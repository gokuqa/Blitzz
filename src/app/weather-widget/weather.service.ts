import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(): Observable<{ condition: string, temperature: number }> {
    // Simulate fetching weather data from API
    const weatherData = this.generateRandomWeather();
    return of(weatherData);
  }

  private generateRandomWeather(): { condition: string, temperature: number } {
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Thunderstorm', 'Snowy'];
    const temperatures = [20, 15, 10, 5, 0]; // Example temperatures in Celsius
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return { condition: conditions[randomIndex], temperature: temperatures[randomIndex] };
  }
}
