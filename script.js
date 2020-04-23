
window.addEventListener("load", function(event) {
   
   var w_ingreso=0;
   let w_entro=0;
   let w_ct=0;
   let deferredPrompt;
   const boton = document.getElementById("boton1");
   const hh_2 = document.getElementById("h_2");
   
   if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
               .then(reg => w_ingreso=1)
               .catch(err => alert('Error al tratar de registrar el sw', err))
   }	
   
/*    if(deferredPrompt == null){
	 alert('nulo')   ;
   } */
   
   
   window.addEventListener('beforeinstallprompt', (e) => {
	 e.preventDefault();
	 deferredPrompt = e;
     boton.style.display = 'block';
	 boton.style.display = 'block';
	 boton.style.display = 'block';
	 
     boton.addEventListener ('click', () => {
/* 	   if(deferredPrompt == null){
		 alert('nulo')   ;
	   }else{
		   alert('no esta nulo')   ;
	   }; */
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then ((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
			  console.log ('El usuario aceptó la solicitud de A2HS');
			} else  {
			  console.log ('El usuario rechazó la solicitud de A2HS');
			}
			deferredPrompt = null;
		});
     });
	 
	 //w_entro=1;
   });
     
 	var actulizar = setInterval(function(){
	   if(deferredPrompt == null){
		 console.log('nulo');
	   }else{
		 boton.style.display = 'block';
	     boton.style.display = 'block';
	     boton.style.display = 'block';
	   };
	   //document.getElementById("act").click();
	 },4000);
	 
/*    function TipoVentana() { 
       return navigator.standalone || (window.matchMedia('(display-mode: standalone)').matches); 
   } */
	
});

