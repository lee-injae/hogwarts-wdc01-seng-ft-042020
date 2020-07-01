import React from "react"
import Hog from "./Hog"

class HogsContainer extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.hogs.map(hogObject => 
                    <Hog 
                    hog={hogObject}
                    key={hogObject.name}
                     />)
                }
            </div>
            
        )
    }
}

export default HogsContainer