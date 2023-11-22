let menuVisible=false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //ocultar el menu luego de pulsar una opcion
    document.getElementById("nav").classList=""
    menuVisible=false;
}

function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distacia_skills= window.innerHeight-skills.getBoundingClientRect().top
    if(distacia_skills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//detectar scroll para aplicar animacion en la barra de habilidaddes
window.onscroll=function(){
    efectoHabilidades();
}

const $form= document.querySelector('#form');
$form.addEventListener('submit',handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form= new FormData(this);
    const response= await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    });

    if(response.ok){
        this.reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Mensaje enviado!!",
            showConfirmButton: false,
            timer: 1500
          });
    }
    
}
