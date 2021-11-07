import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather_info";

const API_KEY = "fa6bb78605d590196d966e6f88d43197";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        sunset: undefined,
        error: 'Please enter correct city name'
      });
    }
  }

  render() {
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
              <Form weatherMethod={this.gettingWeather} />
              <Weather 
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                wind={this.state.wind}
                sunset={this.state.sunset}
                error={this.state.error}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
