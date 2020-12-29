// import React,{useContext} from "react";
// import UserItem from "./UserItem";
// import Spinner from "../Spinner";

// import GithubContext from "../../../context/github/githubContext"

// const Users = () => {

//   const githubContext = useContext(GithubContext)
//   const {users, loading} = githubContext
//   if (loading) {
//     return <Spinner />;
//   } else {
//     return (
//       <div style={userStyle}>
//         {users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// };


// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1rem",
// };
// export default Users;


























// Functional programming
import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Spinner";
import PropTypes from "prop-types";
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users;












// class Users extends Component {

//   render() {
//     return (
//       <div style={userStyle}>
//         {this.props.users.map((user) => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// }

// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1rem",
// };
// export default Users;
