using Microsoft.AspNetCore.Identity;

namespace Rehapp.ViewModels;

public class PatientViewModel : IdentityUser
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Pesel { get; set; }
    public string Mail { get; set; }

    public string Password { get; set; }
    public string CovidTest { get; set; }
    public string CovidCourse { get; set; }
}