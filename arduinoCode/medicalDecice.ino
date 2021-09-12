/*
Code for arduino prototype medical device with heart rate monitor attachment
*/

#include <Wire.h>
#include "MAX30105.h"
#include "heartRate.h"

int buttonPin = 8;
bool isOn = false;
bool cleared = false;

// #include <uartWIFI.h>
//#include <SoftwareSerial.h>

#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,20,4);

MAX30105 particleSensor;
const byte RATE_SIZE = 4; //Increase this for more averaging. 4 is good.
byte rates[RATE_SIZE]; //Array of heart rates
byte rateSpot = 0;
long lastBeat = 0; //Time at which the last beat occurred

float beatsPerMinute;
int beatAvg;

// #define SSID       "test"
// #define PASSWORD   "test"
// WIFI wifi;
// extern int chlID;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(buttonPin, INPUT);
  Serial.println("Initializing...");

  // Initialize sensor
  while (!particleSensor.begin(Wire, I2C_SPEED_FAST)) //Use default I2C port, 400kHz speed
  {
    Serial.println("MAX30105 was not found. Please check wiring/power. ");
    // while (1);
  }
  Serial.println("Place your index finger on the sensor with steady pressure.");

  particleSensor.setup(); //Configure sensor with default settings
  particleSensor.setPulseAmplitudeRed(0x0A); //Turn Red LED to low to indicate sensor is running
  particleSensor.setPulseAmplitudeGreen(0); //Turn off Green LED

  lcd.init();                      // initialize the lcd 
  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Hello, world!");

  // delay(1000);

  /*
  // Wifi setup
  wifi.begin();
  bool b = wifi.Initialize(AP, SSID, PASSWORD);
  if(!b)
  {
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Init Error");
  //    DebugSerial.println("Init error");
  }
  delay(8000);  //make sure the module can have enough time to get an IP address 
  String ipstring  = wifi.showIP();
  //  DebugSerial.println(ipstring);    //show the ip address of module
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print(ipstring);
  
  delay(1000);
  wifi.confMux(1);
  delay(100);
  if(wifi.confServer(1,80))
  //  DebugSerial.println("Server is set up");
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Server is set up");

  delay(10000);
  */

  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Sensor off");
}

void loop() {
  // put your main code here, to run repeatedly:

  // Set mode, whether in read mode (button down) or server mode (button up)
  if (digitalRead(buttonPin) == HIGH) {
    lcd.clear();
    isOn = !isOn;
    cleared = false;

    lcd.setCursor(0,0);
    if (isOn) {
      lcd.print("Starting data");
      lcd.setCursor(0,1);
      lcd.print("transmit");
      delay(1500);
    } else {
      lcd.print("Sensor off");
    }
    delay(500);
  }
  
  if (isOn) {
    // Read mode
    long irValue = particleSensor.getIR();

    if (irValue < 50000) {
      // No finger present
      cleared = false;
      lcd.clear();
      lcd.setCursor(0,0);
      lcd.print("Place finger on");
      lcd.setCursor(0,1);
      lcd.print("sensor");
    } else {
      if (checkForBeat(irValue) == true)
      {
        // From example code
        //We sensed a beat!
        long delta = millis() - lastBeat;
        lastBeat = millis();
    
        beatsPerMinute = 60 / (delta / 1000.0);
    
        if (beatsPerMinute < 255 && beatsPerMinute > 20)
        {
          rates[rateSpot++] = (byte)beatsPerMinute; //Store this reading in the array
          rateSpot %= RATE_SIZE; //Wrap variable
    
          //Take average of readings
          beatAvg = 0;
          for (byte x = 0 ; x < RATE_SIZE ; x++)
            beatAvg += rates[x];
          beatAvg /= RATE_SIZE;
        }
      }
    
      //    Serial.print("IR=");
      //    Serial.print(irValue);
          
      //    Serial.print(", BPM=");
      //    Serial.print(beatsPerMinute);
      //    Serial.print(", Avg BPM=");
      //    Serial.print(beatAvg);

      //      lcd.clear();

      //      lcd.setCursor(0,0);
      //      lcd.print("Transmitting...");

      if (!cleared) {
        lcd.clear();
        cleared = true;
      }
      
      lcd.setCursor(0,0);
      lcd.print("BPM=");

      lcd.setCursor(7,0);
      lcd.print("  ");
      lcd.print(beatAvg);

    //      lcd.setCursor(0,1);
    //      lcd.print(beatsPerMinute);
    }

  } else {
    // Server mode
    // Serial.println("OFF");
    delay(100);
  }  
}
