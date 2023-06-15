let nameError = true

const validation = () => {
    nombre = $('#name').val();
    regex = /^[a-zA-Z\s]+$/;
    !regex.test(nombre) ? ($('#error').html('error'), nameError = true) : ($('#error').html(''), nameError = false);
}
const verify = () => {
    if (!nameError) return true
    else {
        alert('completa el formulario');
        validation();
    }
}


$('#name').on('keyup', () => validation());
$('#miFormulario').on('submit', () => { return verify() })

