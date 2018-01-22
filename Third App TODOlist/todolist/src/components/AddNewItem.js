import React from 'react';

class AddNewItem extends React.Component {
constructor(props){
  super(props);
  this.userSubmitted = this.userSubmitted.bind(this);
}

userSubmitted(event) {
event.preventDefault();
var input = event.target.querySelector('input');
var value = input.value;
if(!value==''){
input.value = '';
console.log(this);
this.props.addI(value);
//this.props.removeI([2]);
}
}
  render() {

    return (

<form onSubmit={this.userSubmitted.bind(this)}>

  <input type="text" />
  <input type="submit" value="Add" className="Submit_Button"/>
</form>
    );
  }
}
export default AddNewItem;
