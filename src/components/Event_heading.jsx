import React from "react";

import classes from "../assets/Styles/Heading.module.scss";

const Heading = (props) => {
    return (
        <div className={classes.headingContainer}>
            <p className={classes.titleContainer}>
                {props.children}
                {/* <div className={classes.line}>
                    <div className={classes.actualLine}></div>
                </div> */}
            </p>
            <p className={classes.backText} data-aos="fade-up">
                {props.backText}
            </p>
        </div>
    );
};

export default Heading;
