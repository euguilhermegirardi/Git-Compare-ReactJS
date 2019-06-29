import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/compareList/index';
import api from '../../services/api';
import moment from 'moment';

//Correct way to use an image: You have to import the image as everything in ReactJS.
//Best place to put the API Github is in the state of the aplication, so you must to create a statefull component.

export default class Main extends Component {
  state = {
    loading: false, //We put false in the beginning.
    repositoryError: false, //Initialize with false, because we don't have an error in the beginning.
    repositoryInput: '', //The text that is typed in the Input form (necessary to add more itens).
    repositories: [], //This property is an "array" because the user can add how many itens he/she wants.
    //Every time that the "repositories" is changed the "render" is loaded again.
  };

  //handleAddRepository is the action to add the new information.
  handleAddRepository = async (e) => {

    //e.preventDefault just to prevent the page to load (the page won't load when you submit the new information).
    e.preventDefault();

    this.setState({ loading: true });

    //As the "API called" is an "asynchronous called" we must use the "async and await" function.
    try {
    //This part is where the user type what he/she is searching, but not all the http link, but just the exactly item.
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      //Best place to edit the component before it gets in the "render" is in the state. Before shows in the screen.
      //"response" transformed in "data: repository" - "Desestruturacao"

      repository.lastCommit = moment(repository.pushed_at).fromNow();
      //To convert the date in the real time.

      this.setState({
        repositoriesInput: '',
        repositories: [...this.state.repositories, repository], //"repository comes from "const { data: repository }".
        repositoryError: false, //We use "false" here just to inform that everything went okay with the new input. otherwise the error...
        //... will appear.
      });
    } catch (err) {
      this.setState({ repositoryError: true }); //We use "true" to inform the error.
    } finally {
      this.setState({ loading: false }); //"finally" will be executed whether the process is okay or error. To desapear after the search.
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        {/* onSubmit to link whatever the user is looking for in the API */}
        {/* "Form" is used in "styled-components" so the "styled-components" has access with all properties in the "Form".
        For an example, we can edit "withError" in the styled-components.*/}
        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
          type="text"
          placeholder="user/repository"
          value={this.state.repositoryInput}

          //onChange is a function that is called everytime when the user edit the input.
          //onChange return an event.
          // "e.target.value": event, target (input) value inside of the input. This is where the change will occur.
          //So when the user edit the input we will change the input state to search the new information in the API.
          onChange={e => this.setState({ repositoryInput: e.target.value }) }
          />

          {/* "this.state.loading ?" = if the loading is true = icone, after the "loading" we'll have "OK" */}
          <button type="submit">{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>

        {/* To inform the "CompareList" that the user add something new */}
        <CompareList repositories={this.state.repositories}/>
      </Container>
    );
  }
}
