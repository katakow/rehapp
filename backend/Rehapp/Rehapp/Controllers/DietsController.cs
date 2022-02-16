using Microsoft.AspNetCore.Mvc;
using Rehapp.Database;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[Route("[controller]")]
public class DietsController: ControllerBase
{
    private readonly DietsLogic _dietsLogic;
    private readonly SymptomLogic _symtomLogic;

    public DietsController(DietsLogic dietsLogic, SymptomLogic symptomLogic)
    {
        _symtomLogic = symptomLogic;
        _dietsLogic = dietsLogic;
    }

    [HttpGet]
    public async Task<IActionResult> Fetch()
    {
        var diets = await _dietsLogic.GetDietsAsync();
        return Ok(diets);
    }

    // [HttpPost("add")]
    [HttpPost]
    public async Task<IActionResult> Create(DietsViewModel dietsViewModel)
    {
        var diets = await _dietsLogic.AddDietAsync(dietsViewModel);
        return Ok(diets);
    }
}