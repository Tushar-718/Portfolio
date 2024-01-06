import React from "react";
import "./../contentWrapper/contentWrapper.scss"


const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;