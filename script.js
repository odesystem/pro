
window.addEventListener("load", function(event) {
    
   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
               .then(reg => alert('Registro de SW exitoso', reg))
               .catch(err => alert('Error al tratar de registrar el sw', err))
   }	

   /*document.getElementById("boton1").addEventListener("click", function(){
       //alert('Prueba !!!');
	   document.getElementById("h_2").innerText = 'Hola !!!';
   });*/
	
});

