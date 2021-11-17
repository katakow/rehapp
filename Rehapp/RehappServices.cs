using Microsoft.Extensions.DependencyInjection;
using Rehapp.Logic;

namespace Rehapp
{
    public static class RehappServices
    {
        public static IServiceCollection AddRehappServices(this IServiceCollection services)
        {
            services.AddTransient<IWeatherForecastProvider, WeatherForecastProvider>();

            return services;
        }
    }
}
