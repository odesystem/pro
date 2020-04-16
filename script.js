
window.addEventListener("load", function(event) {
    
   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
               .then(reg => console.log('Registro de SW exitoso', reg))
               .catch(err => console.warn('Error al tratar de registrar el sw', err))
   }	

   document.getElementById("boton1").addEventListener("click", function(){
       alert('Prueba !!!');
	   window.document.title = 'Hola!';
   });
	
});







