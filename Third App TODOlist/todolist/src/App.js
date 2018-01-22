import './App.css';
import React from 'react';
import TodoList from './components/TodoList.js'
import AddNewItem from './components/AddNewItem.js'
import RemoveItem from './components/RemoveItem.js'




class Main extends React.Component {
constructor(props) {    // fires before component is mounted
   super(props);
   // makes this refer to this component
      this.state = {listItems : ["Eggs","Bananas","Apples"],
                    isEditing : false} // set state
                    //passing add new
                    this.addI = this.addI.bind(this);
                    this.removeI = this.removeI.bind(this);
                    this.getState = this.getState.bind(this);
      //https://www.youtube.com/watch?v=4A9YuAG4qT4
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>@TODO</h1>
        </header>
        <div className="Main_Wrapper">
          <div className="Inner_Wrapper">
        <AddNewItem addI={this.addI.bind(this)}/>
        <TodoList liss={this.state.listItems}/>
        <RemoveItem removeI={this.removeI.bind(this)} getState={this.getState.bind(this)} />
        </div>
  </div>
      </div>
    );
  }

getState(){
  return this.state
}

addI(newelement){
this.setState({listItems:[...this.state.listItems, newelement]});
}


removeI(index) {
  this.setState((prevState) => ({
    listItems: [...prevState.listItems.slice(0,index), ...prevState.listItems.slice(index+1)]
  }))
}

componentWillMount() {
     // fires immediately before the initial render
  //   this.addItem('task 4');
}

  componentDidMount() {
   // fires immediately after the initial render
//   console.log(this.getState());

}









}
export default Main;
