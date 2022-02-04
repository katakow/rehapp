using Microsoft.AspNetCore.Mvc;
using Rehapp.Logic;

namespace Rehapp.Controllers;

[ApiController]
    [Route("[controller]")]
public class DoctorsController:ControllerBase
{
    private readonly DoctorsLogic _doctorsLogic;

    public DoctorsController(DoctorsLogic doctorsLogic)
    {
        _doctorsLogic = doctorsLogic;
    }

    public async Task<IActionResult> Fetch()
    {
        var doctors = await _doctorsLogic.GetDoctorsAsync();
        return Ok(doctors);
    }

    public async Task<IActionResult> Create(string name)
    {
        var doctor = await _doctorsLogic.AddDoctorAsync(name);
        return Ok(doctor);
    }
}