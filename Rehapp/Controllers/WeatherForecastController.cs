using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Rehapp.Logic;
using System.Collections.Generic;

namespace Rehapp.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IWeatherForecastProvider forecastProvider;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherForecastProvider forecastProvider)
        {
            _logger = logger;
            this.forecastProvider = forecastProvider;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return forecastProvider.GetForecast();
        }
    }
}
