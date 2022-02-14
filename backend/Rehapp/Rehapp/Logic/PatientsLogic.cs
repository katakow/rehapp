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
            FirstName = patientViewModel.firstName, LastName = patientViewModel.lastName, 
            Pesel = patientViewModel.pesel, Mail = patientViewModel.mail
        };
        _rehappContext.Patients.Add(patient);
        await _rehappContext.SaveChangesAsync();
        return patient;
    }

    public async Task<IEnumerable<PatientViewModel>> GetPatientsAsync()
    {
        return await _rehappContext.Patients.Select(patient => new PatientViewModel
        {
            firstName = patient.FirstName,
            id = patient.Id,
            lastName = patient.LastName,
            mail = patient.Mail,
            pesel = patient.Pesel,
        }).ToListAsync();
    }

    public async Task<PatientViewModel> GetPatientAsync(int id)
    {
        var patient = await _rehappContext.Patients.FirstOrDefaultAsync(p => p.Id == id);
        return new PatientViewModel
        {
            id = patient.Id,
            firstName = patient.FirstName,
            lastName = patient.LastName,
            mail = patient.Mail,
            pesel = patient.Pesel,
        };
    }
}