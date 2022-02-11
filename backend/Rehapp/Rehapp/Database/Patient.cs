using System.ComponentModel.DataAnnotations;

namespace Rehapp.Database;

public class Patient
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Pesel { get; set; }
    public string Mail { get; set; }
    public double Weight { get; set; }
    public int Height { get; set; }

    public ICollection<Doctor> Doctors { get; set; }

}