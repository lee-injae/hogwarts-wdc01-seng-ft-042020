import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import FilterSort from "./FilterSort"
import HogsContainer from "./HogsContainer"

class App extends Component {
  constructor() {
    super()
      this.state = {
        showGreased: false,
        sortBy: "name"
      }
  }

  handleDropDown = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  handleGreased = (event) => {
    //if you want to change the state to sth, else change the state
    //to another thing
    this.setState({
      showGreased: Boolean(event.target.value) //false, we want to show all hogs
    })
  }

  getFilteredHogs(){
      if (this.state.showGreased){
        return hogs.filter(hog => hog.greased)
      } else {
       return hogs
      }
    } 

  sortHogs(array){
    if (this.state.sortBy == "name"){
      return array.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name) )
    } else if (this.state.sortBy === "weight"){
      return array.sort ( (hog1, hog2) => hog1.weight - hog2.weight )
    }
  }

  render() {
    let displayHogs = this.getFilteredHogs()
    let sortedArray = this.sortHogs(displayHogs)

    return (
      <div className="App">
        <Nav />
        <FilterSort 
          handleDropDown={this.handleDropDown} 
          handleGreased={this.handleGreased} 
          showGreased={this.state.showGreased} 
        />
        <HogsContainer hogs={sortedArray} />
      </div>
    );
  }
}

export default App;

//when user edits form => change state => DOM is rerendered
//when user changes drop down => change state => DOM is rerendered

/* 
App c 
  NavBar p 
  FilterSort p
  HogContainer c
    Hogcard p 
*/