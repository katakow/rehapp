using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[EnableCors("AllowAllHeaders")]
[Route("[controller]")]
public class DiseasesController : ControllerBase
{
    private readonly DiseasesLogic _diseasesLogic;

    public DiseasesController(DiseasesLogic diseasesLogic)
    {
        _diseasesLogic = diseasesLogic;
    }

    [HttpGet]
    public async Task<IActionResult> Fetch()
    {
        var disease = await _diseasesLogic.GetDiseasesAsync();
        return Ok(disease);
    }

    // [HttpPost("add")]
    [HttpPost]
    public async Task<IActionResult> Create(DiseaseViewModel diseaseViewModel)
    {
        var disease = await _diseasesLogic.AddDiseaseAsync(diseaseViewModel);
        return Ok(disease);
    }
}