var formulario = document.querySelector('form');
var usuario = document.getElementById('user');
var clave = document.getElementById('password');


formulario.onsubmit = function(e){
    var verificacion= true;

    if (usuario.value == '' && clave.value !=''){
        e.preventDefault();
        alert('El formulario no se envio porque debe completar el usuario, ingrese un usuario.');
        verificacion=false;
    }
    else if(usuario.value =='' && clave.value =='' ){
         e.preventDefault();
         alert('El formulario no se envio porque debe completar el usuario y la clave, ingrese el usuario y la clave.');
         verificacion = false;
    }
    else if(!usuario.value.includes('@') && usuario !=''){
         e.preventDefault();
        alert('El formulario no se envio porque el usuario debe llevar @, ingrese un usuario valido.');
        verificacion=false;
    }

    if (usuario.value!='' && clave.value == ''){
        e.preventDefault();
        alert('El formulario no se envio porque debe completar la clave , ingrese una clave');
        verificacion=false;
    }

    if (verificacion){
        alert('El formulario se envio correctamente, gracias vuelva pronto.');
    }
   


}
