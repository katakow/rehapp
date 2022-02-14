using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Controllers;

public class PatientAccountController : Controller
{
    
    private readonly UserManager<Patient> userManager;
    private readonly SignInManager<Patient> signInManager;
    private readonly IHttpContextAccessor httpContextAccessor;

    
    public PatientAccountController(UserManager<Patient> userManager, SignInManager<Patient> signInManager,
        IHttpContextAccessor httpContextAccessor)
    {
        this.userManager = userManager;
        this.httpContextAccessor = httpContextAccessor;
        this.signInManager = signInManager;

    }
    
    [HttpPost]
    public async Task<IActionResult> Registration(Registration model)
    {
        if (ModelState.IsValid)
        {
            var user = new Patient
            {
                Login = model.Login,
                Mail = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Sex = model.Sex,
                Disease = model.Diseases,
                Diet = model.Diet,
                Allergie = model.Allergie,

            };

            var result = await userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await signInManager.SignInAsync(user, isPersistent: false);
                return RedirectToAction("UserMain", "PatientHome");
            }

            //@todo
            //errors

        }

        return View(model);
    }
}