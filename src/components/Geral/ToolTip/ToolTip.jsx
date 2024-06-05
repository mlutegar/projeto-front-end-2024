import React from 'react';
import {ToolTipStyle} from "./Style";

const ToolTip = (props) => {
    return (
        <ToolTipStyle>
            <div className="tooltip">
                {props.children}
                <span className="tooltiptext">{props.text}</span>
            </div>
        </ToolTipStyle>
    );
};

export default ToolTip;