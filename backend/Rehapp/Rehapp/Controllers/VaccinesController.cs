using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[Route("[controller]")]
public class VaccinesController : ControllerBase
{
    private readonly VaccinesLogic _vaccinesLogic;

    public VaccinesController(VaccinesLogic vaccinesLogic)
    {
        _vaccinesLogic = vaccinesLogic;
    }

    [HttpGet]
    public async Task<IActionResult> Fetch()
    {
        var vaccines = await _vaccinesLogic.GetVaccinesAsync();
        return Ok(vaccines);
    }

    // [HttpPost("add")]
    [HttpPost]
    public async Task<IActionResult> Create(VaccinesViewModel vaccinesViewModel)
    {
        var vaccines = await _vaccinesLogic.AddVaccineAsync(vaccinesViewModel);
        return Ok(vaccines);
    }
}