// Single Selection Accordian

import { useState } from "react";
import data from "../data.js";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  // For multiple selections
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const [multiple, setMiltiple] = useState([]);

  // handle single selection function
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // handle multiple selection button
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];

    // checking if the current clicked ID exist in the muliple array or not
    const findIndexOfCurretId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurretId);

    if (findIndexOfCurretId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurretId, 1);

    setMiltiple(cpyMultiple);
  }

  // console.log(enableMultiSelection, selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>

      <div className="accordian">
        {/* Fetching Data */}

        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span className="plus">+</span>
                </div>

                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected == dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            );
          })
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
