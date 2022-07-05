import React from "react";

export default function ButtonFamily(props) {
    return (
        <button
            className="family"
            onClick={() => props.filterItems(props.category)}
        >
            {props.category}
        </button>
    );
}
