const numbers = [9,10,8,6,3,1,4,2,5,7];
numbers.sort(()=> Math.random() - 0.5)  

document.addEventListener("DOMContentLoaded", () => {
    const calculoMental = (tabla,suma) =>{
        let num = 0
        let calculo = numbers.map(function(element){
            let multi = tabla * element;
            let result = multi + suma
            num++;
            return `<p>${num}) - (${tabla} * ${element}) + ${suma} = <span class="hide">${result}</span></p>
            `
        });
        return calculo
    }

    const validaNumeros = (tabla,suma) =>{
        if(tabla == 0 || suma == 0){
            Swal.fire({
                icon: 'error',
                title: '¡Oops...!',
                html: '<h2>Tabla o suma no son números válidos</h2>',
            })
            return "error"
        }
    }
    
    const imprimeEjercicios = (tabla,suma) => {
        let perlis = calculoMental(tabla,suma);
        const btn = '<a class="btn btn-danger" onclick="visibilidad()">Mostrar/Ocultar Resultado</a>';
        document.querySelector("#txtResultados").innerHTML = `${btn} <br> ${perlis.join().replaceAll(',','')}`;
        addHistorial(tabla,suma);
    }

    const generador = document.querySelector("#generaEjercicios");
    generador.addEventListener('click',function(event){
        let tabla = Number(document.getElementById("tabla").value);
        let suma  = Number(document.getElementById("suma").value);
        if(validaNumeros(tabla,suma) == "error") return
        imprimeEjercicios(tabla,suma)
        
        
    })

   


});

function addHistorial(tabla, suma) {
    const btnLimpiaHistorial = document.querySelector("#btnLimpiaHistorial");
    if(btnLimpiaHistorial.classList.contains('disabled')) btnLimpiaHistorial.classList.remove('disabled');
    const div = document.getElementById("historial");
    const anterior = div.innerHTML;
    const idNode = "n"+tabla+suma;
    const texto = `
    <div id="${idNode}" class="nodoHistorial">
        <a onclick="deleteHistorial('${idNode}')">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
        </a>
        Tabla: ${tabla} : Suma: ${suma}
        <a onclick="repetirEjercicio(${tabla},${suma})"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 4v16l13 -8z" />
        </svg>
    </div>`
    div.innerHTML = anterior+texto;
}

function deleteHistorial(elemento){
    let top = document.getElementById("historial");
    let nested = document.getElementById(elemento);
    let garbage = top.removeChild(nested);
}

function btnLimpiaHistorial(){
    let divHistorial = document.querySelector("#historial");
    divHistorial.innerHTML = "";
}

function visibilidad(){
    const visionClass = document.querySelectorAll("span");
    visionClass.forEach(element => {
        console.log(element.className)
        if(element.className == "hide")element.classList.replace('hide','show')
            else element.classList.replace('show','hide');
    });
}

const validaNumeros = (tabla,suma) =>{
    if(tabla == 0 || suma == 0){
        Swal.fire({
            icon: 'error',
            title: '¡Oops...!',
            html: '<h2>Tabla o suma no son números válidos</h2>',
        })
        return "error"
    }
}
const calculoMental = (tabla,suma) =>{
    let num = 0
    let calculo = numbers.map(function(element){
        let multi = tabla * element;
        let result = multi + suma
        num++;
        return `<p>${num}) - (${tabla} * ${element}) + ${suma} = <span class="hide">${result}</span></p>
        `
    });
    return calculo
}

const imprimeEjercicios = (tabla,suma) => {
    let perlis = calculoMental(tabla,suma);
    const btn = '<a class="btn btn-danger" onclick="visibilidad()">Mostrar/Ocultar Resultado</a>';
    document.querySelector("#txtResultados").innerHTML = `${btn} <br> ${perlis.join().replaceAll(',','')}`;
}


const  repetirEjercicio = (tabla,suma) =>{
    if(validaNumeros(tabla,suma) == "error") return
    imprimeEjercicios(tabla,suma)
}


