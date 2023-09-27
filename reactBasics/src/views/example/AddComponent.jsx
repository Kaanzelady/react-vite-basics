import React, { useSyncExternalStore } from "react";

class AddComponent extends React.Component {

  state = {
    title: '',
    salary: ''
  }

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleOnChangeSalary = (event) => {
    this.setState({
      salary: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert('Required params');
      return;
    }

    console.log('>>> check data input: ', this.state);
    this.props.addNewJob({
      id: 'abcJob' + Math.floor(Math.random() * 10001),
      title: this.state.title,
      salary: this.state.salary
    })

    this.setState({
      title: '',
      salary: ''
    })
  }

  render() {
    return (
      <>

        <form>
          <label htmlFor="title">Job Title:</label><br />
          <input type="text" value={this.state.title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          /><br />
          <label htmlFor="salary">Salary:</label><br />
          <input type="text" value={this.state.salary}
            onChange={(event) => this.handleOnChangeSalary(event)}
          /><br /><br />
          <input type="submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>

      </>
    )
  }

}

export default AddComponent;