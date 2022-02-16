using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class SymptomLogic
{
    private readonly RehappContext _rehappContext;

    public SymptomLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<Symptom> addSymptom(SymptomViewModel _symptom)
    {
        Symptom symptom = new Symptom
        {
            name = _symptom.symptom,
            patient = _rehappContext.Patients.First(p => p.Id == _symptom.Id
            )};
        _rehappContext.Symptoms.Add(symptom);
        await _rehappContext.SaveChangesAsync();
        return symptom; 
    }
}