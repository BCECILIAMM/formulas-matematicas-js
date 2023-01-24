//TIPOS DE CONSOLES
console.warn()
console.table()
console.group()


// Sacando el perimetro de un cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

// Area del cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularPerimetroTriangulo(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}
console.groupEnd('Cuadrado');
console.group('Triangulo');
// TRIANGULO
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1,
        lado2,
        base,
        altura,
        area: (base * altura) / 2
    }
}

// DIAMETRO Y RADIO DE UN CIRCULO 
console.group('CIRCULO');
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * PI;

//Nota: los ** quiere decir que es a la potencia de 2
// const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    // areaCirculo,
});

function calcularCirculo(radio) {
    const diametro = radio * 2
    const radioCirculo = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI, // SACA EL PI Y SE LIMITA CON toFixed
        area: radioAlCuadrado * Math.PI.toFixed(2),
    }
}

console.groupEnd('CIRCULO');