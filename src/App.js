// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/layout/Navbar";
// import User from "./components/layout/users/User";
// import Alert from "./components/layout/Alert";
// import About from "./components/pages/About";
// import GithubState from "./context/github/GithubState";
// import AlertState from "./context/alert/AlertState"
// import NotFound from "./components/pages/NotFound"
// import Home from "./components/pages/Home"
// const App = () => {
  
//   return (
//     <GithubState>
//       <AlertState>
//       <Router>
//         <div className="App">
//           <Navbar icon="fab fa-github" title="Github Finder" />

//           <div className="container">
//             <Alert />
//             <Switch>
//               <Route exact path="/" component={Home}/>
//               <Route exact path="/about" component={About} />
//               <Route exact path="/user/:login" component={User} />
//               <Route component={NotFound}/>
//             </Switch>
//           </div>
//         </div>
//       </Router>
//       </AlertState>
//     </GithubState>
//   );
// };

// export default App;















// FUNCTIONAL BASED PROGRAMMING
import React, { Fragment, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/layout/users/Users";
import User from "./components/layout/users/User";
import Search from "./components/layout/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About"


const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // Search github users
  const searchUsers = async (text) => {
   setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items)
    setLoading(false)
  };
  // clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  };

  //Get Single Github user
  const getUser = async(username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data)
    setLoading(false);

  }

  //Get users repos
  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data)
    setLoading(false)

  }

  //Set Alert
  const showAlert = (msg, type) => {
    setAlert({msg, type })

    setTimeout(() => setAlert(null), 5000);
  };

    return (

      <Router>
        <div className="App">
          <Navbar icon="fab fa-github" title="Github Finder" />

          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
                />
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" render={props => (
                  <User
                  {...props}
                   getUser={getUser}
                   getUserRepos={getUserRepos}
                   user={user}
                   repos={repos}
                  loading={loading}/>
                )}/>
            </Switch>

          </div>
        </div>
      </Router>

    );

}

export default App;






//CLASS BASED COMPONENT
// import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/layout/Navbar";
// import Users from "./components/layout/users/Users";
// import User from "./components/layout/users/User";
// import Search from "./components/layout/users/Search";
// import axios from "axios";
// import Alert from "./components/layout/Alert";
// import About from "./components/pages/About"

// class App extends Component {
//   state = {
//     users: [],
//     user: {},
//     repos: [],
//     loading: false,
//     alert: null,
//   };

//   // async componentDidMount() {
//   //   this.setState({ loading: true });
//   //   const res = await axios.get(`https://api.github.com/users?client_id=$
//   //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//   //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//   //   this.setState({ users: res.data, loading: false });
//   // }
//   // Search github users
//   searchUsers = async (text) => {
//     this.setState({ loading: true });
//     const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
//     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     this.setState({ users: res.data.items, loading: false });
//   };
//   // clear users from state
//   clearUsers = () => this.setState({ users: [], loading: false });

//   //Get Single Github user
//   getUser = async(username) => {
//     this.setState({ loading: true });
//     const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
//     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     this.setState({ user: res.data, loading: false });

//   }

//   //Get users repos
//   getUserRepos = async(username) => {
//     this.setState({ loading: true });
//     const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=$
//     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//     this.setState({ repos: res.data, loading: false });

//   }

//   //Set Alert
//   setAlert = (msg, type) => {
//     this.setState({ alert: { msg, type } });

//     setTimeout(() => this.setState({ alert: null }), 5000);
//   };
//   render() {
//     const { users, loading, repos, user } = this.state;
//     return (
//       <Router>
//         <div className="App">
//           <Navbar icon="fab fa-github" title="Github Finder" />

//           <div className="container">
//             <Alert alert={this.state.alert} />
//             <Switch>
//               <Route
//                 exact
//                 path="/"
//                 render={props => (
//                   <Fragment>
//                     <Search
//                       searchUsers={this.searchUsers}
//                       clearUsers={this.clearUsers}
//                       showClear={users.length > 0 ? true : false}
//                       setAlert={this.setAlert}
//                     />
//                     <Users loading={loading} users={users} />
//                   </Fragment>
//                 )}
//                 />
//                 <Route exact path="/about" component={About}/>
//                 <Route exact path="/user/:login" render={props => (
//                   <User
//                   {...props}
//                    getUser={this.getUser}
//                    getUserRepos={this.getUserRepos}
//                    user={user}
//                    repos={repos}
//                   loading={loading}/>
//                 )}/>
//             </Switch>

//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
