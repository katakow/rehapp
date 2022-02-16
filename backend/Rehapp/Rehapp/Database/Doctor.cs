using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.VisualBasic.CompilerServices;

namespace Rehapp.Database;

public class Doctor : IdentityUser
{
    [Key] public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Pwz { get; set; }
    public string Mail { get; set; }
    public string Password { get; set; }

    public ICollection<Patient> Patients { get; set; }
    
}