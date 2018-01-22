import React, { Component } from 'react';
import logo from './img/hkweather.png';
import './App.css';
import axios from 'axios';
var FontAwesome = require('react-fontawesome');




class App extends Component {
constructor(){
  super();

  this.state = {};
}

  render() {
  //  http://www.yr.no/sted/Norge/Buskerud/Hurum/Holmsbu/varsel.xml
  //  http://om.yr.no/verdata/xml/spesifikasjon/
var lool = this.getState();
  const city = "HURUM";
    return (
      <div className="App">
        <header className="App-header">
          {//<img src={logo} className="App-logo" alt="logo" />}
        }
          <h1 className="App-title">App 2 : Weather App</h1>
        </header>




        <div className="weatherContainer">
          <div className= "topContainer">
            <h2>{city}</h2>
            <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="weather-pic"></img>
          </div>
          <div className= "bottomContainer">
            <div className= "bottom-left-Container">
            <h1>{this.state.temp_min}° / ({this.state.temp_max})°</h1>
            </div>
            <div className= "bottom-right-Container">
            <h3><i class="fa fa-tint fa-2x" aria-hidden="true"></i> {this.state.humidity} %</h3>

            <h3><i class="fa fa-location-arrow fa-2x" aria-hidden="true"></i> {this.state.speed} km/t</h3>
            </div>

          </div>
        </div>



      </div>
    );
  }


  query(city,key){
    axios({
      method:'GET',
      url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`,
      responseType:'json'
    })
    .then((response) => {
      this.setState({
      speed: response.data.wind.speed,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon

});

/*
      console.log("desc : " +response.data.weather[0].description);
      console.log("desc : " +response.data.weather[0].icon);
      console.log("desc : " +response.data.weather[0].id);
      console.log("desc : " +response.data.weather[0].main);
      */

    });
  }


  componentDidMount(){
  }

  getState(){
    console.log(this.state);
    return this.state
  }

    componentWillMount(){
    this.query("HURUM");
    }

  }





export default App;
