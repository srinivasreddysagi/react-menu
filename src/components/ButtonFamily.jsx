import React from "react";

export default function ButtonFamily(props) {
    return (
        <button
            className={props.cls}
            onClick={() => {
                props.setFamily(props.category);
                props.filterItems(props.category);
            }}
        >
            {props.category}
        </button>
    );
}
