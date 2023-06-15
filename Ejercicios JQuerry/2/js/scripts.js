
const change = (b) => {
    !b ? $('#elemento').addClass('hide') : $('#elemento').removeClass('hide')
}

$('#mostrarBtn').click(() => { change(true) });
$('#ocultarBtn').click(() => { change(false) });

