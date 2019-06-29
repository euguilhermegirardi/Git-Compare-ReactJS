import React from 'react';
import { Container, Repository } from './styles';
import PropTypes from 'prop-types';

//Created the stateless component because we won't use any "state" in "CompareList".

//const CompareList = () => (); Received curly braces and the "properties" to search exactly in the properties of the file.
const CompareList = ({ repositories }) => (
  <Container>
    {/* "repositories.map" is the command to run through the "repositories" and show in the screen the needed information. */}
    {/* This will search the informations in "repository". */}
    {repositories.map(repository => (

      //Repository is just a "div".
      <Repository key={repository.id}>
      <header>
        <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
        <strong>{repository.name}</strong>
        <small>{repository.owner.login}</small>
      </header>

      <ul>
        {/* All the names was searched in the API list. */}
        <li>
          {repository.stargazers_count} <small>stars</small>
        </li>
        <li>
          {repository.forks_count} <small>forks</small>
        </li>
        <li>
          {repository.open_issues_count} <small>issues</small>
        </li>
        <li>
          {/*Was: repository.pushed_at*/}
          {repository.lastCommit} <small>last commit</small>
        </li>
      </ul>
    </Repository>
    )) }
  </Container>
);

CompareList.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,

      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),

      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    })).isRequired,
};

export default CompareList;
