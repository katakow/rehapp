using System.Collections.Generic;

namespace Rehapp.Logic
{
    public interface IWeatherForecastProvider
    {
        IEnumerable<WeatherForecast> GetForecast();
    }
}