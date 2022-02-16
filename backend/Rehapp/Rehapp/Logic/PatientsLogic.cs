using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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


    public async Task<PatientViewModel> AddPatientAsync(PatientViewModel patientViewModel)
    {
        var patient = new PatientViewModel()
        {
            FirstName = patientViewModel.FirstName, LastName = patientViewModel.LastName,
            Pesel = patientViewModel.Pesel, Mail = patientViewModel.Mail, Allergie = patientViewModel.Allergie,
            Diet = patientViewModel.Diet, Disease = patientViewModel.Disease,
            Password = patientViewModel.Password,
            CovidCourse = patientViewModel.CovidCourse,
            CovidTest = patientViewModel.CovidTest,
        };
        var check = _rehappContext.Patients.FirstOrDefault(s => s.Mail == patient.Mail);
        if (check == null)
        {
            _rehappContext.Patients.Add(patient);
            await _rehappContext.SaveChangesAsync();
            return patient;
        }
        else
        {
            return null;
        }
    }

    public async Task<IEnumerable<PatientViewModel>> GetPatientsAsync()
    {
        return await _rehappContext.Patients.Select(patient => new PatientViewModel
        {
            FirstName = patient.FirstName,
            Id = patient.Id,
            LastName = patient.LastName,
            Mail = patient.Mail,
            Pesel = patient.Pesel,
        }).ToListAsync();
    }

    public async Task<PatientViewModel> GetPatientAsync(int id)
    {
        var patient = await _rehappContext.Patients.FirstOrDefaultAsync(p => p.Id == id);
        return new PatientViewModel
        {
            Id = patient.Id,
            FirstName = patient.FirstName,
            LastName = patient.LastName,
            Mail = patient.Mail,
            Pesel = patient.Pesel,
            Password = patient.Password,
            Allergie = patient.Allergie,
            Diet = patient.Diet,
            Disease = patient.Disease,
            CovidCourse = patient.CovidCourse,
            CovidTest = patient.CovidTest
        };
    }

    public PatientViewModel GetPatientByMail(string mail)
    {
        return _rehappContext.Patients.Where(p => p.Mail == mail).Single();
    }

    public async Task<PatientViewModel?> GetPatientByCredentials(string userMail, string userPassword)
    {
        var patient = await _rehappContext.Patients.FirstOrDefaultAsync(d => d.Mail == userMail);
        if (patient != null)
        {
            return new PatientViewModel
            {
                FirstName = patient.FirstName,
                LastName = patient.LastName,
                Id = patient.Id,
                Mail = patient.Mail,
                Password = patient.Password,
                Pesel = patient.Pesel,
                Diet = patient.Diet,
                Allergie = patient.Allergie,
                Disease = patient.Disease,
                CovidTest = patient.CovidTest,
                CovidCourse = patient.CovidCourse
            };
        }

        return null;
    }
}