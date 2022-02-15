using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Rehapp.ViewModels;

public class AdminViewModel : IdentityUser
{
    [Key]
    public int id { get; }
    public String Mail { get; set; }
    public String Password { get; set; }
}