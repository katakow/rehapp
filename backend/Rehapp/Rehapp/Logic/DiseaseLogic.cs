using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class DiseaseLogic
{
    private readonly RehappContext _rehappContext;

    public DiseaseLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }
    public async Task<Disease> AddDiseaseAsync(DiseaseViewModel diseaseViewModel)
    {
        var disease = new Disease {Name = diseaseViewModel.Name};
        _rehappContext.Disease.Add(disease);
        await _rehappContext.SaveChangesAsync();
        return disease;
    }
    public async Task<IEnumerable<DiseaseViewModel>> GetDiseaseAsync()
    {
        return await _rehappContext.Disease.Select(disease => new DiseaseViewModel()
        {
            Name = disease.Name,
            Id = disease.Id,
        }) .ToListAsync(); 
    }
    
    public async Task<DiseaseViewModel> GetDiseaseAsync(int id)
    {
        var disease = await _rehappContext.Disease.FirstOrDefaultAsync(d => d.Id == id);
        return new DiseaseViewModel
        {
            Name = disease.Name,
            Id = disease.Id,
        };
    }
}