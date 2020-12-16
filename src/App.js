import React, {Component} from "react"
import './App.css';
import Navbar from "./components/layout/Navbar"
import UserItem from "./components/layout/users/UserItem";


class App extends Component {


  render() {
    return (
      <div className="App">
       <Navbar icon="fab fa-github" title="Github Finder"/>
       <UserItem/>
      </div>
    );
    }
 
}

export default App;
