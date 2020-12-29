import React, {useState, useContext} from "react";

import GithubContext from "../../../context/github/githubContext"
import AlertContext from "../../../context/alert/alertContext"
const Search = () => {

  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const [text, setText] = useState("")
  
   const onChange = (e) => {
    setText(e.target.value );
  };

   const onSubmit = (e) => {
    e.preventDefault();
    if(text === "") {
      alertContext.setAlert("Please enter something","light" )

    }else {
      githubContext.searchUsers(text);
      setText(""); 
    }
   
  };
  
    
    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {githubContext.users.length > 0 &&(
        <button 
        className="btn btn-light btn-block" 
        onClick={githubContext.clearUsers}>
          Clear
        </button>
        )}
      </div>
    );
  
}


export default Search;






























// FUNCTIONAL BASED
// import React, {useState} from "react";
// import PropTypes from "prop-types";

// const Search = ({showClear, searchUsers, clearUsers, setAlert}) => {
//   const [text, setText] = useState("")
  
//    const onChange = (e) => {
//     setText(e.target.value );
//   };

//    const onSubmit = (e) => {
//     e.preventDefault();
//     if(text === "") {
//       setAlert("Please enter something","light" )

//     }else {
//       searchUsers(text);
//       setText(""); 
//     }
   
//   };
  
    
//     return (
//       <div>
//         <form className="form" onSubmit={onSubmit}>
//           <input
//             type="text"
//             name="text"
//             placeholder="Search Users..."
//             value={text}
//             onChange={onChange}
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-dark btn-block"
//           />
//         </form>
//         {showClear &&(
//         <button 
//         className="btn btn-light btn-block" 
//         onClick={clearUsers}>
//           Clear
//         </button>
//         )}
//       </div>
//     );
  
// }
// Search.propTypes = {
//   searchUsers: PropTypes.func.isRequired,
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired,
// };

// export default Search;






























// CLASS BASED COMPONENT
// import React, {Component} from "react";
// import PropTypes from "prop-types";

// export class Search extends Component {
//   state = {
//     text: "",
//   };
//   static propTypes = {
//     searchUsers: PropTypes.func.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired,
//   };

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if(this.state.text === "") {
//       this.props.setAlert("Please enter something","light" )

//     }else {
//       this.props.searchUsers(this.state.text);
//       this.setState({ text: "" }); 
//     }
   
//   };
//   render() {
//     const {showClear, clearUsers} = this.props
//     return (
//       <div>
//         <form className="form" onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             name="text"
//             placeholder="Search Users..."
//             value={this.state.text}
//             onChange={this.onChange}
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-dark btn-block"
//           />
//         </form>
//         {showClear &&(
//         <button 
//         className="btn btn-light btn-block" 
//         onClick={clearUsers}>
//           Clear
//         </button>
//         )}
//       </div>
//     );
//   }
// }

// export default Search;
