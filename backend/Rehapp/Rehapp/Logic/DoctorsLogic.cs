using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class DoctorsLogic
{
    private readonly RehappContext _rehappContext;

    public DoctorsLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<DoctorViewModel> AddDoctorAsync(DoctorViewModel doctorViewModel)
    {
        var doctor = new DoctorViewModel
        {
            FirstName = doctorViewModel.FirstName, LastName = doctorViewModel.LastName,
            Pwz = doctorViewModel.Pwz, Mail = doctorViewModel.Mail,
            Password = doctorViewModel.Password
        };

        var check = _rehappContext.Doctors.FirstOrDefault(s => s.Pwz == doctor.Pwz);
        if (check == null)
        {
            _rehappContext.Doctors.Add(doctor);
            await _rehappContext.SaveChangesAsync();
            return doctor;
        }
        else
        {
            return null;
        }

        //_rehappContext.Doctors.Add(doctor);
        //await _rehappContext.SaveChangesAsync();
        //return doctor;
    }

    public async Task<IEnumerable<DoctorViewModel>> GetDoctorsAsync()
    {
        return await _rehappContext.Doctors.Select(doctor => new DoctorViewModel
        {
            FirstName = doctor.FirstName,
            LastName = doctor.LastName,
            Id = doctor.Id,
            Pwz = doctor.Pwz,
            Mail = doctor.Mail,
            Password = doctor.Password
        }).ToListAsync();
    }

    public async Task<DoctorViewModel?> GetDoctorByCredentials(string mail, string password)
    {
        var doctor = await _rehappContext.Doctors.FirstOrDefaultAsync(d => d.Mail == mail);
        if (doctor != null)
        {
            return new DoctorViewModel
            {
                FirstName = doctor.FirstName,
                LastName = doctor.LastName,
                Id = doctor.Id,
                Pwz = doctor.Pwz,
                Mail = doctor.Mail,
                Password = doctor.Password
            };
        }

        return null;
    }

    public async Task<DoctorViewModel> GetDoctorAsync(int Id)
    {
        var doctor = await _rehappContext.Doctors.FirstOrDefaultAsync(d => d.Id == Id);
        return new DoctorViewModel
        {
            FirstName = doctor.FirstName,
            LastName = doctor.LastName,
            Id = doctor.Id,
            Pwz = doctor.Pwz,
            Mail = doctor.Mail,
            Password = doctor.Password
        };
    }
}