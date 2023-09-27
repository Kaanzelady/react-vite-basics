import React from "react";

class ChildComponent extends React.Component {

  state = {
    showJobs: false
  }

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs
    })
  }

  handleOnClickDelete = (job) => {
    this.props.deleteAJob(job);
  }

  render() {

    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {!showJobs ?
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
          :
          <>
            <div className="jobList__unique"> {
              arrJobs.map(item =>

                <div key={item.id}>
                  {item.title} - {item.salary}$
                  <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                </div>

              )
            }
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        }
      </>
    )
  }
}

// const ChildComponent = (props) => {
//   let { arrJobs } = props;

//   return (
//     <>
//       <div className="job-list">
//         {
//           arrJobs.map((item) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             )
//           })
//         }
//       </div>
//     </>
//   )
// }

export default ChildComponent;