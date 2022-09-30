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

    

    const generador = document.querySelector("#generaEjercicios");
    generador.addEventListener('click',function(event){
        let tabla = Number(document.getElementById("tabla").value);
        let suma  = Number(document.getElementById("suma").value);
        if(tabla == 0 || suma == 0){
            alert("Tabla o suma no son números validos")
            return
        }
        let perlis = calculoMental(tabla,suma);
        const btn = '<a class="btn btn-danger" onclick="visibilidad()">Mostrar/Ocultar Resultado</a>';
        document.querySelector("#txtResultados").innerHTML = `${btn} <br> ${perlis.join().replaceAll(',','')}`;
        
    })


    


});

function visibilidad(){
    const visionClass = document.querySelectorAll("span");
    visionClass.forEach(element => {
        console.log(element.className)
        if(element.className == "hide")element.classList.replace('hide','show')
            else element.classList.replace('show','hide');
    });
    

}




