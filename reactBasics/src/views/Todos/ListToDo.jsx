import React from "react";

class ListToDo extends React.Component {

  state = {
    listToDo: [
      { id: 'todo1', title: 'Doing homework' },
      { id: 'todo2', title: 'Making video' },
      { id: 'todo3', title: 'Fixing bugs' },

    ]
  }

  render() {

    let { listToDo } = this.state;


    return (
      <div className="todo__container">
        <div className="todo__add">
          <input type="text" />
          <button type="button">Add</button>
        </div>
        <div className="todo__content">
          <div className="content__child">Todo 1</div>
          <div className="content__child">Todo 1</div>
          <div className="content__child">Todo 1</div>
        </div>
      </div>
    )
  }
}

export default ListToDo;