using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[Route("[controller]")]
public class AllergiesController : ControllerBase
{
    private readonly AllergiesLogic _allergiesLogic;

    public AllergiesController(AllergiesLogic allergiesLogic)
    {
        _allergiesLogic = allergiesLogic;
    }

    [HttpGet]
    public async Task<IActionResult> Fetch()
    {
        var allergies = await _allergiesLogic.GetAllergiesAsync();
        return Ok(allergies);
    }

    // [HttpPost("add")]
    [HttpPost]
    public async Task<IActionResult> Create(AllergiesViewModel allergiesViewModel)
    {
        var allergies = await _allergiesLogic.AddAllergieAsync(allergiesViewModel);
        return Ok(allergies);
    }
    
}