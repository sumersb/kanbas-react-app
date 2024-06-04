import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button className="btn bg-success text-white btn-md m-2" onClick={addElement}>Add Element</button>
            <ul className="p-2 w-25">
                {array.map((item, index) => (
                    <li className="p-0 align-items-center list-item-box" key={index}>
                        <div className="p-2 border d-flex justify-content-between align-items-center">
                            {item}
                            <button className=" btn bg-danger text-white btn-md" onClick={() => deleteElement(index)} id="wd-delete-element-click">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    )
}