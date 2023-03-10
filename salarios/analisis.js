console.log(PlatziMath);
console.log(salarios);

//Analisis personal para Juanita

//find que encuentra a la primera juantita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name === personaEnBusqueda)
};

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map(function(elemento) {
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    // console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}

// ANALISIS EMPRESARIAL 

const empresas = {};
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log({ empresas });


function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);

        });

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
        console.log(listaMedianaYears);

        const ultimoMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimoMediana * medianaPorcentajesCrecimiento;
        const nuevoSalario = ultimoMediana + aumento;

        return nuevoSalario;

    }


    function medianaGeneral() {
        const listaMedianas = salarios.map(
            persona => medianaPorPersona(persona.name)
        );

        const mediana = PlatziMath.calcularMediana(listaMedianas);

        return mediana;
    }


    function medianaTop10() {
        const listaMedianas = salarios.map(
            persona => medianaPorPersona(persona.name)
        );

        const medianasOrdenandas = PlatziMath.ordenarLista(listaMedianas);

        const cantidad = listaMedianas.length / 10;

        const limite = listaMedianas.length - cantidad;

        // SPLICE quita al arreglo 
        // SLICE: agarrar algunos elementos y haga el corte donde es nuestro limite

        const top10 = medianasOrdenandas.slice(limite, medianasOrdenandas.length);

        const medianaTop10 = PlatziMath.calcularMediana(top10);
        return medianaTop10;


        console.log({ medianasOrdenandas });
    }
}