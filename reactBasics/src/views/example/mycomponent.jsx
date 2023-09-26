import React from "react";

class MyComponent extends React.Component {

  /**
   * JSX => have to return in only 1 block
   * <></> == <React.Fragment></React.Fragment>
  */

  state = {
    name: '',
    channel: 'Hoi dan IT'
  }

  handleClickButton = () => {
    alert('click me');
  }

  handleOnChangeName = (event) => {
    console.log(
      event.target.value, ' - event target: ', event.target,
      ' - event: ', event
    );
    this.setState({
      name: event.target.value,
      channel: 'abc'
    })
  }

  render() {
    return (
      <>
        <div className="first">
          <input value={this.state.name} type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          hello myComponent, My name is {this.state.name}
        </div>

        <div className="second">
          My channel: {this.state['channel']}
        </div>

        <div><button onClick={
          () => this.handleClickButton()
        }>Click Me</button></div >

      </>
    )
  }
}

export default MyComponent;