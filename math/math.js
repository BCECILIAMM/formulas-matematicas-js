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

// TRIANGULO ISOSCELES 

console.group('TRIANGULO ISOSCELES');

function cacularAlturaTriangulo(lados, base) {
    if (lados == base) {
        console.warn('Esto no es un triangulo isosceles');
    } else {
        //h = raizCuadrada(lados**2 - (base**2)/4)
        const altura = Math.sqrt((lados ** 2) - ((base ** 2)) / 4); // MATH.SQRT ES PARA ELEVARLO AL CUADRADO
        return altura;

    }
}
console.groupEnd('TRIANGULO ISOSCELES');


console.group('TRIANGULO ESCALENO');

function calcularEscaleno(lado1, lado2, base) {

    if (lado1 == lado2) {
        console.warn('no es un triangulo escaleno')
    } else {
        //h = raizCuadrada((lado2 ** 2) - (lado2**2) + (base **2) / 2* base)
        const altura = Math.sqrt((lado2 ** 2) - (lado1 ** 2) + (base ** 2) / (2 * base));
        return altura;
    }


}

export function solution(lado1, lado2, lado3) {

    let a = lado1;
    let b = lado2;
    let c = lado3;

    // Si no es escaleno, no continuamos
    if (a == b || b == c || c == a) {
        return false;
    }

    // Si es escaleno, calculamos primero su area
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Ahora usamos que A = bh/2, por lo que h = 2A/b
    let altura_a = Math.floor(2 * area / a);
    let altura_b = Math.floor(2 * area / b);
    let altura_c = Math.floor(2 * area / c);

    // IMPTE: No se especifica cual de las alturas se quiere, tras probar el codigo conclui que se busca la altura respecto a 'a' como base
    return altura_a;

}

console.groupEnd('TRIANGULO ESCALENO');