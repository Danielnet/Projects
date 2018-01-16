var React = require('react');


const bar = ['hello',"link2","link3"];

let Lol = () => {

  for(i = 0; i < bar.length; i++){

    console.log(bar[i]);
}
};

function Welcome(props) {
  return <h1>Hello you are, {props.name}</h1>;
}




class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }



  render() {
    return (
   <button className="square" onClick={() => alert('click')}>
     {this.props.value}
   </button>
 );
  }
}

module.exports = NavBar;
