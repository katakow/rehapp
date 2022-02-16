using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class DietsLogic
{
    private readonly RehappContext _rehappContext;

    public DietsLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<Diet> AddDietAsync(DietsViewModel dietsViewModel)
    {
        var diet = new Diet {Label = dietsViewModel.Label};
        _rehappContext.Diets.Add(diet);
        await _rehappContext.SaveChangesAsync();
        return diet;
    }

    public async Task<IEnumerable<DietsViewModel>> GetDietsAsync()
    {
        return await _rehappContext.Diets.Select(diet => new DietsViewModel
        {
            Label = diet.Label,
            Id = diet.Id,
        }).ToListAsync();
    }
}