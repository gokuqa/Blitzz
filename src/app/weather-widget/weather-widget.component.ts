import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  currentWeather: string = '';
  temperature: number = 0;
  weatherIcon: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe(({ condition, temperature }) => {
      this.currentWeather = condition;
      this.temperature = temperature;
      this.setWeatherIcon(condition);
    });
  }

  setWeatherIcon(condition: string) {
    switch (condition.toLowerCase()) {
      case 'sunny':
        this.weatherIcon = 'fa fa-sun-o';
        break;
      case 'cloudy':
        this.weatherIcon = 'fa fa-cloud';
        break;
      case 'rainy':
        this.weatherIcon = 'fa fa-tint';
        break;
      case 'thunderstorm':
        this.weatherIcon = 'fa fa-bolt';
        break;
      case 'snowy':
        this.weatherIcon = 'fa fa-snowflake-o';
        break;
      default:
        this.weatherIcon = 'fa-question-circle';
        break;
    }
  }
}
