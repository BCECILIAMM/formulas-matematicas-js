const PlatziMath = {}; //DENTRO DE NUESTRO OBJETO SE PUEDEN GUARDAR FUNCIONES

// creando funcion para saber si es par o es impar 
//  const parInpar = (lista) => {
//      lista.length % 2 ? false : true;
//  }

// M E D I A N A

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
        const lista = PlatziMath.ordenarLista(listaDesordenada);
        const listaEsPar = PlatziMath.esPar(lista);
        if (listaEsPar) {
            const indexMitad1ListaPar = (lista.length / 2) - 1;
            const indexMitad2ListaPar = lista.length / 2;
            // const mitad1ListaPar = lista[(lista.length / 2) - 1];
            // const mitad2ListaPar = lista[lista.length / 2];

            // lista[indexMitad1ListaPar] 
            // lista[indexMitad2ListaPar] 
            // [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]
            // const listaMitades = [mitad1ListaPar, mitad2ListaPar];

            const listaMitades = [];
            listaMitades.push(lista[indexMitad1ListaPar]);
            listaMitades.push(lista[indexMitad2ListaPar]);

            const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
            return medianaListaPar;
        } else {
            const indexMitadListaImpar = Math.floor(lista.length / 2);
            const medianaListaImpar = lista[indexMitadListaImpar];
            console.log(indexMitadListaImpar);
            console.log(medianaListaImpar);
            return medianaListaImpar;
        }
    }
    // P  R  O  M  E  D  I  O
    // [1,2,3,]
PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
}

//  function calcularProm(lista) {

//      // // sumar todos los elementos del array / cantidad de elemenos
//      // let sumaLista = 0;
//      // for (let i = 0; i < lista.length; i++) {
//      //     // en la variable sumaList se esta guardando el elemento que esta en el array y despues ese mismo elemento se esta sumando con el indice
//      //     sumaLista = sumaLista + lista[i];
//      // }
//      // hay 2 formas para sacar el promedio ahora se usara el metodo REDUCE

//      //ESTO ES UNA FUNCION
//      // function sumarElementos(valorAcumulado, nuevoValor) {
//      //     return valorAcumulado + nuevoValor;
//      // }
//      // ESTA ES UNA ARRUND FUNCION O FUNCION DE FLECHA
//      //LAS FUNCIONES FLECHAS NOS DEJAN RETORNAR ALGUN VALOR SI ASI LO QUEREMOS
//      const sumarElementos = (valorAcumulado, nuevoValor) => {
//          valorAcumulado + nuevoValor;
//      };
//      const sumaLista = lista.reduce(sumarElementos);
//      const promedio = sumaLista / lista.length;
//      return promedio;


// METODO SORT PARA ORDENAR LOS NUMEROS DE UN ARRAY
PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }
    const lista = listaDesordenada.sort((a, b) => a - b);

    return lista;
}


// M O D A es el elemento que más veces se repite en js 
// RECIBE UNA LISTA Y NO ES NECESARIAMENTE DE NUMEROS TAMBIEN DE cualquier elemento porque cuaquiera puede estar en una lista

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];

        if (listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);

    const listaOrdenada = ordenarListaBidimencionales(listaCount, 1); //
    const listaOrdenadaMaxNum = listaOrdenada[listaOrdenada.length - 1];
    //  console.log({ listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNum });
    // console.log('la moda es: ' + listaMaxNumber[0]);
    const moda = listaMaxNumber[0];
    return moda;
}

PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}