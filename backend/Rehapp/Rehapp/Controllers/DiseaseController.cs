using Microsoft.AspNetCore.Mvc;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
    [Route("[controller]")]
public class DiseaseController:ControllerBase
{
    private readonly DiseaseLogic _diseaseLogic;

    public DiseaseController(DiseaseLogic diseaseLogic)
    {
        _diseaseLogic = diseaseLogic;
    }

    [HttpGet]
    public async Task<IActionResult> Fetch()
    {
        var disease = await _diseaseLogic.GetDiseaseAsync();
        return Ok(disease);
    }
    // [HttpPost("add")]
    [HttpPost]
    public async Task<IActionResult> Create(DiseaseViewModel diseaseViewModel)
    {
        var disease = await _diseaseLogic.AddDiseaseAsync(diseaseViewModel);
        return Ok(disease);
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var disease = await _diseaseLogic.GetDiseaseAsync(id);
        return Ok(disease);
    }
}