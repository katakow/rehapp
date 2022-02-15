using Microsoft.AspNetCore.Identity;

namespace Rehapp.ViewModels;

public class DoctorViewModel : IdentityUser
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Pwz { get; set; }
    public string Mail { get; set; }
    public string Password { get; set; }
}