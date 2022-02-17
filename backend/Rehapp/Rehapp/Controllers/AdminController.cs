using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Rehapp.Database;
using Rehapp.Logic;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

public class AdminController : ControllerBase
{
    private readonly SignInManager<AdminViewModel> _signInManager;
    private readonly PatientsLogic _patientsLogic;
    private readonly DoctorsLogic _doctorsLogic;
    private  readonly AdminLogic _adminLogic;
    
    public AdminController(SignInManager<AdminViewModel> signInManager, 
        PatientsLogic patientsLogic, DoctorsLogic doctorsLogic, AdminLogic adminLogic)
    {
        _signInManager = signInManager;
        _doctorsLogic = doctorsLogic;
        _patientsLogic = patientsLogic;
        _adminLogic = adminLogic;
    }
    
    [HttpPost("/Admin/Login")]
    public async Task<IActionResult> Login([FromBody] LoginUserViewModel user)
    {
        var admin = await _adminLogic.GetAdminByCredentials(user.Mail, user.Password);
        if (admin != null)
        {
            await _signInManager.PasswordSignInAsync(admin.Mail, admin.Password, false, false);
            return Ok(admin);
        }
        else
        {
            return BadRequest("Taki admin nie istnieje");
        }
    }

    [HttpDelete("/Patient")]
    public async Task<IActionResult> DeletePatient([FromQuery] int id)
    {
        return Ok(await _adminLogic.DeletePatient(id));
    }

    [HttpDelete("/Doctor")]
    public async Task<IActionResult> DeleteDoctor([FromQuery] int id)
    {
        return Ok(await _adminLogic.DeleteDoctor(id));
    }
  
}