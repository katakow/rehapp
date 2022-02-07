using Microsoft.AspNetCore.Mvc;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[Route("[controller]")]
public class DoctorsController : ControllerBase
{
    private readonly DoctorsLogic _doctorsLogic;

    public DoctorsController(DoctorsLogic doctorsLogic)
    {
        _doctorsLogic = doctorsLogic;
    }

    [HttpGet]
    public async Task<IActionResult> Fetch()
    {
        var doctors = await _doctorsLogic.GetDoctorsAsync();
        return Ok(doctors);
    }

    // [HttpPost("add")]
    [HttpPost]
    public async Task<IActionResult> Create(DoctorViewModel doctorViewModel)
    {
        var doctor = await _doctorsLogic.AddDoctorAsync(doctorViewModel);
        return Ok(doctor);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var doctor = await _doctorsLogic.GetDoctorAsync(id);
        return Ok(doctor);
    }
}