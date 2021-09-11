import React from "react";
import PropTypes from "prop-types";
import "./AnnotationForm.css";

const AnnotationForm = (props) => {
    return (
        <div id="annotation-form">
            <form action="#">
                <textarea id="textarea"></textarea>
                <input id="button" type="submit" value="Annotate" />
            </form>
        </div>
    );
};

AnnotationForm.propTypes = {};

export default AnnotationForm;
