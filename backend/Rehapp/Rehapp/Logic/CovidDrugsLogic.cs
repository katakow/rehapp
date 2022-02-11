using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class CovidDrugsLogic
{
    private readonly RehappContext _rehappContext;

    public CovidDrugsLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<CovidDrug> AddCovidDrugsAsync(CovidDrugsViewModel covidDrugsViewModel)
    {
        var covidDrugs = new CovidDrug {Label = covidDrugsViewModel.Label};
        _rehappContext.CovidDrugs.Add(covidDrugs);
        await _rehappContext.SaveChangesAsync();
        return covidDrugs;
    }

    public async Task<IEnumerable<CovidDrugsViewModel>> GetCovidDrugsAsync()
    {
        return await _rehappContext.CovidDrugs.Select(covidDrugs => new CovidDrugsViewModel
        {
            Label = covidDrugs.Label,
            Id = covidDrugs.Id,
        }).ToListAsync();
    }
}