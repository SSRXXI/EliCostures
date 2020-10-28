
const thisForm = document.getElementById('formulario');

thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('http://192.168.1.83:3000/pedidos-detalle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });


    const result = await response.json();
    console.log(result)
    console.log(response)

    if (response.status == 200){
      console.log("algo pasa")

    }else{
      $('#exampleModalError').modal('show'); 
    }
});
