// Single Selection Accordian

import { useState } from "react"
import data from "../data.js"

const Accordian = () => {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (

        < div className="wrapper" >

            <div className="accordian">

                {/* Fetching Data */}

                {data && data.length > 0 ? data.map((dataItem) => {
                    return <div className="item" key={dataItem.id}>

                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span className="plus">+</span>
                        </div>

                        {selected == dataItem.id ? <div className="content">
                            {dataItem.answer}
                        </div> : null}

                    </div>
                })
                    : <div>No Data Found!</div>}
            </div>

        </div >
    )
}

export default Accordian