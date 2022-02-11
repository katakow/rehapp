using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class VaccinesLogic
{
    private readonly RehappContext _rehappContext;

    public VaccinesLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<Vaccine> AddVaccineAsync(VaccinesViewModel vaccinesViewModel)
    {
        var vaccines = new Vaccine {Label = vaccinesViewModel.Label};
        _rehappContext.Vaccines.Add(vaccines);
        await _rehappContext.SaveChangesAsync();
        return vaccines;
    }

    public async Task<IEnumerable<VaccinesViewModel>> GetVaccinesAsync()
    {
        return await _rehappContext.Vaccines.Select(vaccines => new VaccinesViewModel
        {
            Label = vaccines.Label,
            Id = vaccines.Id,
        }).ToListAsync();
    }
}