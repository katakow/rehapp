namespace Rehapp.ViewModels;

public class PatientViewModel
{
    public int id { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string pesel { get; set; }
    public string mail { get; set; }

    public string Login { get; set; }
    public string Password { get; set; }
    public string Sex { get; set; }
    public string Diet { get; set; }
    public string Allergie { get; set; }
    public string Disease { get; set; }
    public string CovidTest { get; set; }
    public string CovidCourse { get; set; }
}