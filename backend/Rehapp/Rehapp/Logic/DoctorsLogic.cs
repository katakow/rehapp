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
    public async Task<Doctor> AddDoctorAsync(DoctorViewModel doctorViewModel)
    {
        var doctor = new Doctor {Name = doctorViewModel.Name};
        _rehappContext.Doctors.Add(doctor);
        await _rehappContext.SaveChangesAsync();
        return doctor;
    }

    public async Task<IEnumerable<DoctorViewModel>> GetDoctorsAsync()
    {
        return await _rehappContext.Doctors.Select(doctor => new DoctorViewModel
        {
            Name = doctor.Name,
            Id = doctor.Id,
        }) .ToListAsync(); 
    }

    public async Task<DoctorViewModel> GetDoctorAsync(int id)
    {
        var doctor = await _rehappContext.Doctors.FirstOrDefaultAsync(d => d.Id == id);
        return new DoctorViewModel
        {
            Name = doctor.Name,
            Id = doctor.Id,
        };
    }
}