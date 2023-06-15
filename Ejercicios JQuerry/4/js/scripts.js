
const añadir = () => {
    val = parseInt($('#lista li:last-child').text());
    val++
    console.log(val)
    $("#lista").append('<li>' + val + '</li>')
}


$("#agregarBtn").click(() => añadir())

