using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class AllergiesLogic
{
    private readonly RehappContext _rehappContext;

    public AllergiesLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<Allergie> AddAllerieAsync(AllergiesViewModel allergiesViewModel)
    {
        var allergie = new Allergie {Label = allergiesViewModel.Label};
        _rehappContext.Allergies.Add(allergie);
        await _rehappContext.SaveChangesAsync();
        return allergie;
    }

    public async Task<IEnumerable<AllergiesViewModel>> GetAllergiesAsync()
    {
        return await _rehappContext.Allergies.Select(allergies => new AllergiesViewModel
        {
            Label = allergies.Label,
            Id = allergies.Id,
        }).ToListAsync();
    }
}