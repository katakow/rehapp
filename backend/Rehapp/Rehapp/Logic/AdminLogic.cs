using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class AdminLogic
{
    private readonly RehappContext _rehappContext;

    public AdminLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }
    public async Task<AdminViewModel?> GetAdminByCredentials(string userMail, string userPassword)
    {
        var admin = await _rehappContext.Admins.FirstOrDefaultAsync(d => d.Mail == userMail);
        if (admin != null)
        {
            return new AdminViewModel
            {
                Id = admin.Id,
                Mail = admin.Mail,
                Password = admin.Password,

            };
        }

        return null;
    }

    public async Task<PatientViewModel?> DeletePatient(int id)
    {
        var deletedUser = await _rehappContext.Patients.FirstOrDefaultAsync(p => p.Id == id);
        _rehappContext.Patients.Remove(deletedUser);
        _rehappContext.SaveChanges();
        return new PatientViewModel
        {
            Id = deletedUser.Id,
            FirstName = deletedUser.FirstName,
            LastName = deletedUser.LastName
        };
    }
    
    public async Task<DoctorViewModel?> DeleteDoctor(int id)
    {
        var deletedUser = await _rehappContext.Doctors.FirstOrDefaultAsync(p => p.Id == id);
        _rehappContext.Doctors.Remove(deletedUser);
        _rehappContext.SaveChanges();

        return new DoctorViewModel
        {
            Id = deletedUser.Id,
            FirstName = deletedUser.FirstName,
            LastName = deletedUser.LastName
        };
    }
    public async Task<AllergiesViewModel?> DeleteAllergie(int id)
    {
        var deletedAllergie = await _rehappContext.Allergies.FirstOrDefaultAsync(p => p.Id == id);
        _rehappContext.Allergies.Remove(deletedAllergie);
        _rehappContext.SaveChanges();

        return new AllergiesViewModel
        {
            Id = deletedAllergie.Id,
            Label = deletedAllergie.Label
        };
    }
    public async Task<DiseaseViewModel?> DeleteDiseases(int id)
    {
        var deletedDiseases = await _rehappContext.Disease.FirstOrDefaultAsync(p => p.Id == id);
        _rehappContext.Disease.Remove(deletedDiseases);
        _rehappContext.SaveChanges();

        return new DiseaseViewModel()
        {
            Id = deletedDiseases.Id,
            Label = deletedDiseases.Label
        };
    }
    public async Task<DietsViewModel?> DeleteDiets(int id)
    {
        var deletedDiets = await _rehappContext.Diets.FirstOrDefaultAsync(p => p.Id == id);
        _rehappContext.Diets.Remove(deletedDiets);
        _rehappContext.SaveChanges();

        return new DietsViewModel
        {
            Id = deletedDiets.Id,
            Label = deletedDiets.Label
        };
    }
}