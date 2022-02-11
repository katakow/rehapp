using Microsoft.AspNetCore.Mvc;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[Route("[controller]")]
public class PatientsController:ControllerBase
{
    private readonly PatientsLogic _patientsLogic;

    public PatientsController(PatientsLogic patientLogic)
    {
        _patientsLogic = patientLogic;
    }

    [HttpGet]
    public async Task<IActionResult> Fetch()
    {
        var patients = await _patientsLogic.GetPatientsAsync();
        return Ok(patients);
    }

    // [HttpPost("add")]
    [HttpPost]
    public async Task<IActionResult> Create(PatientViewModel patientViewModel)
    {
        var patient = await _patientsLogic.AddPatientAsync(patientViewModel);
        return Ok(patient);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var patient = await _patientsLogic.GetPatientAsync(id);
        return Ok(patient);
    }
    
}