using System.ComponentModel.DataAnnotations;

namespace Rehapp.Models.Entities
{
    public class Symptom
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }
    }
}
