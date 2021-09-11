import React from "react";
import PropTypes from "prop-types";
import "./AnnotationForm.css";
import { toast } from "react-toastify";

const AnnotationForm = ({ onSubmit, setAlertMessage }) => {
    const [val, setVal] = React.useState("");
    console.log(val);

    const submit = () => {
        setAlertMessage(val);
        setVal("");
        toast("Sent the alert!");
    };

    return (
        <div id="annotation-form">
            <form onSubmit={submit} action="#">
                <textarea
                    id="textarea"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    palceholder="Send a advice or warning message"
                ></textarea>
                <input id="button" type="submit" value="Submit" />
            </form>
        </div>
    );
};

AnnotationForm.propTypes = {};

export default AnnotationForm;
