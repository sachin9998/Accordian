# Accordion - React Machine Coding Question

![Screenshot 2025-02-28 at 7 06 16 PM](https://github.com/user-attachments/assets/65e98bde-2f22-430a-ac40-34c9a15f8dfe)


**Logic:**

- For Single Selection, Will use `selected` state to track single item.
- `setSelected(getCurrentId === selected ? null : getCurrentId);` using this will check if currently open item is selected or not.

- For Multiple selection, will use `multiple` state to track the id of all opened items and based on that will open them.

**Accordian.jsx**

```jsx
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
```

**App.css**

---

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.wrapper button {
    /* padding: 10px; */
    background-color: #04AA6D;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
}

.accordian {
    width: 500px;
}

.item {
    background: lightgreen;
    margin-bottom: 10px;
    padding: 10px 20px;
    border: 1px solid grey;
    margin: 10px 0px;
}

.title {
    color: black;
    /* background: white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px 0px;
}

.content {
    color: black;
    height: auto;
}

.plus {
    font-style: bold;
    font-size: 20px;
}
```
