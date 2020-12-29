import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from "./RepoItem"

 const Repos = ({repos}) => {
    return repos.map((repo) => (<RepoItem repo={repo} key={repo.id} />))
}

Repos.propTypes= {
    repos: PropTypes.array.isRequired,
}
export default Repos



    //    {users.map((user) => ( <UserItem key={user.id} user={user} />))}
   