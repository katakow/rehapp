using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Rehapp.Database;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[Route("[controller]")]
public class PatientsController : ControllerBase
{
    private readonly PatientsLogic _patientsLogic;
    private readonly SignInManager<PatientViewModel> _signInManager;
    private readonly UserManager<PatientViewModel> _userManager;

    public PatientsController(PatientsLogic patientLogic, SignInManager<PatientViewModel> signInManager,
        UserManager<PatientViewModel> userManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
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

    [HttpGet("{Id}")]
    public async Task<IActionResult> Get(int Id)
    {
        var patient = await _patientsLogic.GetPatientAsync(Id);
        return Ok(patient);
    }

    [HttpPost("/Patients/register")]
    public async Task<IActionResult> Registration([FromBody] Registration model)
    {
        //var user = new Patient
        //{
        //  Login = model.Login,
        //Mail = model.Email,
        //    FirstName = model.FirstName,
        //    LastName = model.LastName,
        //Disease = model.Diseases,
        // Diet = model.Diet,
        //Allergie = model.Allergie,
        //};

        //if (result.Succeeded)
        // {
        //   await signInManager.SignInAsync(user, isPersistent: false);
        //}

        PatientViewModel Test = new PatientViewModel();
        //Test.Login = model.Login;
        Test.FirstName = model.FirstName;
        Test.LastName = model.LastName;
        Test.Mail = model.Email;
        Test.Password = model.Password;
        Test.Diet = model.Diet;
        Test.Disease = model.Diseases;
        Test.Allergie = model.Allergie;
        Test.CovidCourse = model.CovidCourse;
        Test.CovidTest = model.CovidTest;
        Test.Pesel = model.Pesel;

        //TODO
        // POPRAWIC RETURNY 
        if (await this._patientsLogic.AddPatientAsync(Test) != null)
        {
            return new JsonResult(Test);
        }
        else
        {
            return new JsonResult("E - mail jest w bazie!");
        }
    }

    [HttpPost("/Patients/Login")]
    public async Task<IActionResult> Login([FromBody] LoginUserViewModel user)
    {
        var patient = await _patientsLogic.GetPatientByCredentials(user.Mail, user.Password);
        if (patient != null)
        {
            await _signInManager.PasswordSignInAsync(patient.Mail, patient.Password, false, false);
            return Ok(patient);
        }
        else
        {
            return BadRequest("Taki pacjent nie istnieje");
        }
    }
}