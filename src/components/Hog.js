import React from "react"

//refactor this function into class component
class Hog extends React.Component {

    constructor(){
        super()
        this.state = {
            showDetails:  false //false means this hog is not showing the details
        }
    }

    //it is going to change state
    //exists here in the same class as the state
    changeDetails = () => {
        //going to change state
        this.setState({showDetails: !this.state.showDetails})

        //this.setState({})
        //this.setState((previous)=> {return newStateObj})
        //this.setState({}, ()=>{})
        
    }

    render(){
        let pigImage = require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`)

        return (
            <div className="ui card" onClick={this.changeDetails}>
                {this.props.hog.name}
                <img src={pigImage} />
                
                {this.state.showDetails ? 
                <div>
                    <p>Specialty: {this.props.hog.specialty}</p>
                    <p>Greased: {this.props.hog.greased ? "true" : "false" }</p>
                    <p>Weight: {this.props.hog.weight}</p>
                    <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
                </div> 
                : 
                null }
            </div>
        )
    }
}
   

export default Hog
//when some event happens => change the state