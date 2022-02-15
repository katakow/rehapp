using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Rehapp.Database;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

[ApiController]
[Route("[controller]")]
public class DoctorsController : ControllerBase
{
    private readonly DoctorsLogic _doctorsLogic;
    private readonly SignInManager<DoctorViewModel> _signInManager;
    private readonly UserManager<DoctorViewModel> _userManager;
    public DoctorsController(DoctorsLogic doctorsLogic, SignInManager<DoctorViewModel> signInManager,
        UserManager<DoctorViewModel> userManager)
    {
        _signInManager = signInManager;
        _doctorsLogic = doctorsLogic;
        _userManager = userManager;
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

    [HttpGet("{Id}")]
    public async Task<IActionResult> Get(int Id)
    {
        var doctor = await _doctorsLogic.GetDoctorAsync(Id);
        return Ok(doctor);
    }

    [HttpPost("/Doctors/register")]
    public async Task<IActionResult> Registration([FromBody] RegistrationDoctor models)
    {
        //var user = new Patient
        //{
        //  Login = model.Login,
        //Mail = model.Email,
        //    FirstName = model.FirstName,
        //    LastName = model.LastName,
        // Sex = model.Sex,
        //Disease = model.Diseases,
        // Diet = model.Diet,
        //Allergie = model.Allergie,
        //};

        //if (result.Succeeded)
        // {
        //   await signInManager.SignInAsync(user, isPersistent: false);
        //}

        DoctorViewModel Test = new DoctorViewModel();
        Test.FirstName = models.FirstName;
        Test.LastName = models.LastName;
        Test.Mail = models.Email;
        Test.Password = models.Password;
        Test.Pwz = models.Pwz;

        //TODO
        // POPRAWIC RETURNY 
        if (await this._doctorsLogic.AddDoctorAsync(Test) != null)
        {
            return Ok(Test);
        }
        else
        {
            return Ok("Doktor o danym pwz isntieje w bazie");
        }
    }

    [HttpPost("/Doctors/Login")]
    public async Task<IActionResult> Login([FromBody]LoginUserViewModel user)
    {
        var doctor = await _doctorsLogic.GetDoctorByCredentials(user.Mail, user.Password);
        if (doctor != null)
        { 
            await _signInManager.PasswordSignInAsync(doctor.Mail, doctor.Password,false,false);
            return RedirectToPage("https://localhost:3000/doc/main");
        }
        else
        {
            return BadRequest("Taki doktor nie istnieje");
        }
    }
}