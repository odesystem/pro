
window.addEventListener("load", function(event) {
   var w_ingreso=0;
   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
               .then(reg => w_ingreso=1)
               .catch(err => alert('Error al tratar de registrar el sw', err))
   }	

   document.getElementById("boton1").addEventListener("click", function(){
	   alert('Entro 3');
       alert(TipoVentana());
	   //document.getElementById("h_2").innerText = 'Hola !!!';
   });
   
   
   function TipoVentana() { 
       return navigator.standalone || (window.matchMedia('(display-mode: standalone)').matches); 
   }
	
});

