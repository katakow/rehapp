using Microsoft.EntityFrameworkCore;
using Rehapp.Database;

namespace Rehapp.Logic;

public class DoctorsLogic
{
    private readonly RehappContext _rehappContext;

    public DoctorsLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task <Doctor> AddDoctorAsync(string name)
    {
        var doctor = new Doctor {Name = name};
        _rehappContext.Doctors.Add(doctor);
        await _rehappContext.SaveChangesAsync();
        return doctor;
    }

    public async Task<IEnumerable<Doctor>> GetDoctorsAsync()
    {
        return await _rehappContext.Doctors.ToListAsync();
        
    }
}