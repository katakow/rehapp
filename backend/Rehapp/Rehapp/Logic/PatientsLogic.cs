using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class PatientsLogic
{
    private readonly RehappContext _rehappContext;

    public PatientsLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<Patient> AddPatientAsync(PatientViewModel patientViewModel)
    {
        var patient = new Patient
        {
            Name = patientViewModel.Name, Surname = patientViewModel.Surname, Weight = patientViewModel.Weight,
            Height = patientViewModel.Height, Pesel = patientViewModel.Pesel, Mail = patientViewModel.Mail
        };
        _rehappContext.Patients.Add(patient);
        await _rehappContext.SaveChangesAsync();
        return patient;
    }

    public async Task<IEnumerable<PatientViewModel>> GetPatientsAsync()
    {
        return await _rehappContext.Patients.Select(patient => new PatientViewModel
        {
            Name = patient.Name,
            Id = patient.Id,
            Surname = patient.Surname,
            Height = patient.Height,
            Mail = patient.Mail,
            Pesel = patient.Pesel,
            Weight = patient.Weight
        }).ToListAsync();
    }

}