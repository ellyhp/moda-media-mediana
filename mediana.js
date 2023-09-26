

// function esPar(lista){
//     return !(lista.length % 2);
// }

// console.log(esPar([3,5]));

// // Retorna si la longitud del arreglo tiene NO tiene un residuo,
// // eso significa que es PAR, retorna TRUE O FALSE



// function esImpar(lista){
//     return lista.length % 2;
// }

// console.log(esImpar([4,2,3]));

// // Retorna si la longitud del arreglo tiene un residuo, lo
// // que lo convierte en un numero impar


// function Mediana(lista){


//     const listaEsPar = esPar(lista);
    
//     if(listaEsPar){

//         const Mediana1Impar = (lista.length / 2) - 1;
//         const Mediana2Impar = lista.length / 2 ;
//         const ArrayPar = [];
//         ArrayPar.push(lista[Mediana1Impar]);
//         ArrayPar.push(lista[Mediana2Impar]);
//         return calcularPromedio(ArrayPar)


//         // console.log(ArrayPar);

//     }else{

//         // return lista.length / 2;

//         // toma todo el arreglo y la longitud que tiene 
//         // la divide entre 2

//         const MedianaImpar = Math.floor(lista.length / 2);
//         console.log(lista[MedianaImpar]);

//         // El metodo de Math floor nos va ayudar a quitar los decimales
//         // a los numeros. por ejemplo el numer 9.5, se convierte en 9.
        
//         // Esto nos ayuda, creamos una constante llamada MedianaImpar, a esta le
//         // vamos a asignar el método de JS Matj.floor el cual no va ayudar 
//         // quitarle los decimales a lista.length con la división de la longitud
//         // del arreglo entre dos, sacando así la mitad del arreglo
//     }

// }

// console.log(Mediana([1,2,3,4]));


// function calcularPromedio(lista){

//     function sumarElementos(valorAcumulado, nuevoValor){
//         return valorAcumulado + nuevoValor;
//     }

//     const sumaLista = lista.reduce(sumarElementos);
//     const promedio = sumaLista / lista.length;
//     return promedio;


// }




function resultado(){

    const btnModa = document.getElementById('btnModa');
    const btnMediana = document.getElementById('btnMediana');
    const btnMedia = document.getElementById('btnMedia')

    btnModa.addEventListener('click', calcularModa);
    btnMediana.addEventListener('click', calcularMediana);
    btnMedia.addEventListener('clicl', CalcularMedia)


}

// function calcularModa(){

// }


function calcularMediana(lista){

  
    function esPar(lista){
        return !(lista.length % 2);
    }

    function esImpar(lista){
        return lista.length % 2;
    }


    if(esPar(lista)){
        
        const medianaPar1 = lista.length / 2;
        const medianaPar2 = (lista.length / 2) - 1;
        
        console.log(lista[medianaPar1]);
        console.log(lista[medianaPar2]);
        
        let arrayMediana = []
        arrayMediana.push(lista[medianaPar1])
        arrayMediana.push(lista[medianaPar2])

        let medianaPar = calcularPromedio(arrayMediana)
        

    }else{
        const medianaImpar = Math.floor(lista.length / 2);
        console.log(lista[medianaImpar]); 
        const medianaImparResultado =  lista[medianaImpar];
    }

}


// function calcularMedia(){

// }


function calcularPromedio (lista) {


    // let acumulador = 0;
    // for(i = 0; i < lista.length; i++){
    //     acumulador +=  lista[i];  
    // }

    // resultado = acumulador / lista.length;

    // console.log(resultado);


    // function sumarElementos(valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;
    // }


    const sumaLista = lista.reduce((a,b) => a + b);
    const resultado = sumaLista / lista.length;

    return resultado;
    

}