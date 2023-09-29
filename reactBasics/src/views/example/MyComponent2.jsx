import React, { Children } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent2 extends React.Component {

  state = {

    arrJobs: [
      { id: 'abcJob1', title: 'Developers', salary: '500' },
      { id: 'abcJob2', title: 'Tester', salary: '400' },
      { id: 'abcJob3', title: 'Project Mangager', salary: '1000' }

    ]
  }

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('>> run didUpdate: ', 'prev state: ', prevState, ' current state: ', this.state)
  }
  componentDidMount() {
    console.log('>>> run component did mount')
  }

  render() {
    console.log(this.state);
    return (
      <>
        <AddComponent
          addNewJob={this.addNewJob}
        />



        <ChildComponent
          arrJobs={this.state.arrJobs}

          deleteAJob={this.deleteAJob}
        />
      </>
    )
  }
}

export default MyComponent2;