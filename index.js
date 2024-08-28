document.getElementById('propuesta-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let sabor = document.getElementById('sabor').value;

    document.getElementById('mensaje-exito').style.display = 'block';

    document.getElementById('propuesta-form').reset();
});