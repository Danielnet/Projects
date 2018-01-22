import React from 'react';




class TodoList extends React.Component {

  render() {


//console.log(arraY);
//console.log(this.props.liss);
var displaylist = this.props.liss.map((elem, i) => {
  return <li key={i}>{elem}</li>
});

    return (
        <ol>
          {displaylist}
        </ol>
    );
  }
}
//module.exports = TodoList;
export default TodoList;
