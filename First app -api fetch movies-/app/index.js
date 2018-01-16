var React = require('react');
var ReactDOM = require('react-dom');
import Request from 'superagent';
var app = require('./components/App');
import _ from 'lodash';


class Main extends React.Component {

constructor(){
  super();
  console.log("testur");

  this.state = {};
}

lul(){
  var key= 'INSERT KEY';
  return key
}



search(){

    var url = `http://www.omdbapi.com/?apikey=${this.lul()}&s=star&y=&y=&r=json&plot=short`;
  Request.get(url).then((response) => {
    console.log(response);
    this.setState({
    movies: response.body.Search,
    total: response.body.totalResults
    });
  });

}

componentWillMount(){
  this.search();
}

componentDidMount(){
console.log(this.state);
}

getState(){
  console.log(this.state);
  return this.state
}



  render() {

var lool = this.getState();
var movieTitles = _.map(this.state.movies,(movie, index) => {
//  console.log(movie)
  return <li key={index}>{index}{movie.Title}</li>
})
    return (
      <div>
<h1> Hello , this is Movies galore</h1>

<ul>
{movieTitles}
</ul>








</div>

    );
  }









}



ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
