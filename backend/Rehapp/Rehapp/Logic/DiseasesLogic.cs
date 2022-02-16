using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class DiseasesLogic
{
    private readonly RehappContext _rehappContext;

    public DiseasesLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }
    
    public async Task<Disease> AddDiseaseAsync(DiseaseViewModel diseaseViewModel)
    {
        var disease = new Disease {Label = diseaseViewModel.Label};
        _rehappContext.Disease.Add(disease);
        await _rehappContext.SaveChangesAsync();
        return disease;
    }

    public async Task<IEnumerable<DiseaseViewModel>> GetDiseasesAsync()
    {
        return await _rehappContext.Disease.Select(disease => new DiseaseViewModel
        {
            Label = disease.Label,
            Id = disease.Id,
        }) .ToListAsync(); 
    }
}