import React from "react";

const Square = (props) => {
    
    return (
        <div key = {props.id}>
            <button
                className = "squares"
                onClick = {() => props.onClick(props.id)}
            >
                {props.value}
            </button>
        </div>
    );
};

export default Square;
