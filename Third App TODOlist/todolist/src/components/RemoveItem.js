import React from 'react';

class RemoveItem extends React.Component {
constructor(props){
  super(props);
    this.deleteAll = this.deleteAll.bind(this);
}



deleteAll(){
  //remove latest post
  this.props.removeI(this.props.getState().listItems.length-1);
}

  render() {

    return (

<button type="button" className="remove_Button" onClick={this.deleteAll.bind(this)}>Delete Last</button>

    );
  }
}
export default RemoveItem;
