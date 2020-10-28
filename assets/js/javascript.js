//document.getElementById("hero")="../assets/images/mujer.jpg";
var url = 'http://192.168.1.83:3000';

var thisForm = document.getElementById('formulario');
var formularioDetalle = document.getElementById('formulario-detalle');

if (thisForm != null){
  console.log("Hay formulario")
    thisForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(thisForm).entries()
      const response = await fetch('http://192.168.1.83:3000/pedidos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(formData))
      });

      const result = await response.json();
      console.log(result.insertId)
      console.log(response)

      if (response.status == 200){
        $('#exampleModal').modal('show'); 
        var position = document.getElementById("numero_orden")
        var orden = document.createTextNode('000'+result.insertId)
        var clean = document.createTextNode('')
        position.appendChild(orden)
        document.getElementById("exampleModal").style.display="visible";

      }else{
        $('#exampleModalError').modal('show'); 
      }
  })
}
  
if (formularioDetalle != null){

    thisForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(thisForm).entries()
      const response = await fetch('http://192.168.1.83:3000/pedidos-detalle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(formData))
      });

      const result = await response.json();
      console.log(result.insertId)
      console.log(response)

      if (response.status == 200){
        $('#exampleModal').modal('show'); 
        var position = document.getElementById("numero_orden")
        var orden = document.createTextNode('000'+result.insertId)
        var clean = document.createTextNode('')
        position.appendChild(orden)
        document.getElementById("exampleModal").style.display="visible";

      }else{
        $('#exampleModalError').modal('show'); 
      }
  })
}
  


fetch(url)

.then(response => response.json())
.then(data => {
  console.log(data)


  var select = document.getElementById('comunasavailable');
if (select !=null){
  for(var i=0; i < data.length; i++){ 
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = data[i].comuna; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
})



document.querySelector("#inicio_").addEventListener('touchstart', fa);

function fa(evi){ 

  console.log('evi: '+evi.touches);
  $('.navbar-collapse').collapse('hide');
}

document.querySelector("#servicio_").addEventListener('touchstart', fb);

function fb(evs){ 

  console.log('evs: '+evs.touches);
  $('.navbar-collapse').collapse('hide');
}

document.querySelector("#contacto_").addEventListener('touchstart', fc);

function fc(evc){ 

  console.log('evc: '+evc.touches);
  $('.navbar-collapse').collapse('hide');
}

function disminuir(){

  console.log("haah")
  valor=document.getElementById('carronumber').value;
  console.log(valor);
  if (valor>0){
    valor=valor-1
    document.getElementById('carronumber').value=valor
  }
}

function aumentar(){

  console.log("aumme")
  valor=document.getElementById('carronumber').value;
  console.log(valor);
  valor=parseInt(valor)+1
  document.getElementById('carronumber').value=valor
  }

var scroles = 0;


window.onscroll = function() {myFunction()};


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      return document.querySelector('.navbar').classList.add('hide')
  }

  if (window.scrollY > 0){
      return document.querySelector('.navbar').classList.remove('hide')
  }

});

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //document.getElementById("navbar").style.top='-100px';
  } else {
    //document.getElementById("navbar").style.top='0';
  }
}

function cleanPedido() {

  var position = document.getElementById("numero_orden")
  position.innerHTML = ""
}

