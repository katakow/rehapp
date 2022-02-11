using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class CovidSymptomsLogic
{
    private readonly RehappContext _rehappContext;

    public CovidSymptomsLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<CovidSymptom> AddCovidSymptomAsync(CovidSymptomsViewModel covidSymptomsViewModel)
    {
        var covidSymptoms = new CovidSymptom {Label = covidSymptomsViewModel.Label};
        _rehappContext.CovidSymptoms.Add(covidSymptoms);
        await _rehappContext.SaveChangesAsync();
        return covidSymptoms;
    }

    public async Task<IEnumerable<CovidSymptomsViewModel>> GetCovidSymptomsAsync()
    {
        return await _rehappContext.CovidSymptoms.Select(covidSymptoms => new CovidSymptomsViewModel
        {
            Label = covidSymptoms.Label,
            Id = covidSymptoms.Id,
        }).ToListAsync();
    }
}