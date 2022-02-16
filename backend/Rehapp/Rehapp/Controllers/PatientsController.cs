using System.Collections.Generic;
using System.Threading.Tasks;
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
    private readonly SymptomLogic _symptomLogic;
    private readonly SignInManager<PatientViewModel> _signInManager;
    private readonly UserManager<PatientViewModel> _userManager;

    public PatientsController(PatientsLogic patientLogic, SignInManager<PatientViewModel> signInManager,
        UserManager<PatientViewModel> userManager, SymptomLogic symptomLogic)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _patientsLogic = patientLogic;
        _symptomLogic = symptomLogic;
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
        PatientViewModel Test = new PatientViewModel();

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
            return Ok(Test.Id);
        }
        else
        {
            return Ok("E - mail jest w bazie!");
        }
    }

    [HttpPost("/Patients/Login")]
    public async Task<IActionResult> Login([FromBody] LoginUserViewModel user)
    {
        var patient = await _patientsLogic.GetPatientByCredentials(user.Mail, user.Password);
        if (patient != null)
        {
            await _signInManager.PasswordSignInAsync(patient.Mail, patient.Password, false, false);
            return Ok(patient.Id);
        }
        else
        {
            return BadRequest("Taki pacjent nie istnieje");
        }
    }

    [HttpPost("/Patient/addSymptoms")]
    public async Task<IActionResult> addSymptoms([FromBody] ICollection<SymptomViewModel> symptoms,
        [FromQuery] string mail)
    {
        var user = _patientsLogic.GetPatientByMail(mail);
        foreach (var el in symptoms)
        {
            SymptomViewModel symptom = new SymptomViewModel();
            symptom.Id = user.Id;
            symptom.symptom = el.symptom;
            await _symptomLogic.addSymptom(symptom);
        }

        return Ok(user);
    }
}