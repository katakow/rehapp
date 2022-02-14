using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Rehapp.ViewModels
{
    public class Registration
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "Email jest wymagany!")]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$",
            ErrorMessage = "Entered email is not valid!")]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Login jest wymagany!")]
        [MinLength(5, ErrorMessage = "Login nie może być krótszy niż 5 znaków!")]
        public string Login { get; set; }

        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$",
            ErrorMessage = "Password must have a letter, a number, a special symbol and at least 8 characters!")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Hasło jest wymagane!")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Imię jest wymagane!")]
        [MinLength(3, ErrorMessage = "Imię nie może być krótsze niż 3 znaki!")]
        public string FirstName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Nazwisko jest wymagane !")]
        [MinLength(3, ErrorMessage = "Nazwisko nie może być krótsze niż 3 znaki!")]
        public string LastName { get; set; }

        [RegularExpression(@"^(?=.*[0-9])$", ErrorMessage = "PESEL musi składać się z samych cyfr!")]
        [MinLength(11, ErrorMessage = "PESEL musi mieć 11 znaków!")]
        [MaxLength(11, ErrorMessage = "PESEL musi mieć 11 znaków!")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "PESEL jest wymagany!")]
        public string Pesel { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = " Należy wybrać jedno !")]
        public string Sex { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = " Należy wybrać jedno !")]
        public string Diet { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Należy wybrać jedno !")]
        public string Allergie { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Należy wybrać jedno!")]
        public string Diseases { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Należy wybrać jedno!")]
        public string CovidTest { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Należy wybrać jedno!")]
        public string CovidCousere { get; set; }
    }
}