using System.ComponentModel.DataAnnotations;

namespace Rehapp.Database;

public class Patient
{
    [Key]
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Pesel { get; set; }
    public string Mail { get; set; }
    public string Password { get; set; }
    public string Diet { get; set; }
    public string Allergie { get; set; }
    public string Disease { get; set; }
    public string CovidTest { get; set; }
    public string CovidCourse { get; set; }
    
    public ICollection<Symptom> symptoms { get; set; }

    public ICollection<Doctor> Doctors { get; set; }

}