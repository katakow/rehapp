using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class CovidVaccinesLogic
{
    private readonly RehappContext _rehappContext;

    public CovidVaccinesLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<CovidVaccine> AddCovidVaccineAsync(CovidVaccineViewModel covidVaccineViewModel)
    {
        var covidVaccine = new CovidVaccine {Label = covidVaccineViewModel.Label};
        _rehappContext.CovidVaccines.Add(covidVaccine);
        await _rehappContext.SaveChangesAsync();
        return covidVaccine;
    }

    public async Task<IEnumerable<CovidVaccineViewModel>> GetCovidVaccineAsync()
    {
        return await _rehappContext.CovidVaccines.Select(covidVaccine => new CovidVaccineViewModel
        {
            Label = covidVaccine.Label,
            Id = covidVaccine.Id,
        }).ToListAsync();
    }
}