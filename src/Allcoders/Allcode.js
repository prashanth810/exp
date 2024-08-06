import React, { useState } from 'react'

const Allcode = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const [checkbox, setcheCkbox] = useState({
        check: false
    });

    const change = () => {
        setcheCkbox({ ...checkbox, check: !checkbox.check })
    }

    const deleted = (id) => {
        const newarr = arr;
        const updatearr = newarr.filter((val, i) => {
            return (
                i != id
            )
        })
        setArr(updatearr)
    }
    return (
        <div className="App">
            <h5> Showing Array With clicking check box get delete button</h5>
            {arr.map((val, i) => {
                return (
                    <div key={i}>
                        <input type="checkbox" checked={checkbox.check} onChange={change} />
                        {val}
                        {checkbox.check === true ? (<button onClick={() => deleted(i)}> Delete </button>) : ("")}
                    </div>
                );
            })}
        </div>
    )
}

export default Allcode
