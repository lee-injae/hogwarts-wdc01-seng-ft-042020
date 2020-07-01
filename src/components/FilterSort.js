import React from "react"

//presentation
//functional components do not need a render()
const FilterSort = (props) => {
    //rdio buttons are special
    //they expect an attribute called checked={boolean} 

    return (
        <div>
            <div className="radio">
                <label>
                    <input type="radio" value={"true"} checked={props.showGreased ? true : false } onChange={props.handleGreased} />
                    Show Greasy Pigs
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value={""} checked={props.showGreased ? false : true} onChange={props.handleGreased}/>
                    Show All Pigs
                </label>
            </div>
            <select onChange={props.handleDropDown}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default FilterSort 