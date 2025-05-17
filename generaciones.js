
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  generaDNI() {
    this.dni = Math.floor(Math.random() * 100000000);
  }
}

let personaCreada = null; // variable afuera para q sea global

const crearPersonaje = (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombrePersonaje").value;
  const edad = parseInt(document.getElementById("edadPersonaje").value);
  const sexo = document.getElementById("sexoPersonaje").value;
  const peso = parseFloat(document.getElementById("pesoPersonaje").value);
  const altura = parseFloat(document.getElementById("alturaPersonaje").value) / 100; // pasar a metros
  const anioNacimiento = parseInt(document.getElementById("anioPersonaje").value);

  personaCreada = new Persona(nombre, edad, null, sexo, peso, altura, anioNacimiento);
  personaCreada.generaDNI();

  document.getElementById("itemNombre").textContent = `Nombre: ${personaCreada.nombre}`;
  document.getElementById("itemEdad").textContent = `Edad: ${personaCreada.edad}`;
  document.getElementById("itemDni").textContent = `DNI: ${personaCreada.dni}`;
  document.getElementById("itemSexo").textContent = `Sexo: ${personaCreada.sexo}`;
  document.getElementById("itemPeso").textContent = `Peso: ${personaCreada.peso} kg`;
  document.getElementById("itemAltura").textContent = `Altura: ${personaCreada.altura} m`;
  document.getElementById("itemAnio").textContent = `Año de nacimiento: ${personaCreada.añoNacimiento}`;
};

// Mostrar generación
const mostrarGeneracion = () => {
  if (personaCreada) {
    let mensaje = "";
    let generacion = "";
    let rasgo = "";

    const anio = personaCreada.añoNacimiento;

    if (anio >= 1994 && anio <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (anio >= 1981 && anio <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (anio >= 1969 && anio <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (anio >= 1949 && anio <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (anio >= 1930 && anio <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Desconocida";
      rasgo = "No identificado";
    }

    mensaje = `${personaCreada.nombre} pertenece a la ${generacion} y su rasgo es: ${rasgo}`;
    document.getElementById("parrafoGeneracion").textContent = mensaje;
  }
};

const mostrarMayorEdad = () => {
  if (personaCreada) {
    let mensaje = ""
    if(personaCreada.edad >= 18){
        mensaje = `${personaCreada.nombre} es mayor de edad.`
    }else{ mensaje = `${personaCreada.nombre} es menor de edad.`;}

    document.getElementById("parrafoEdad").textContent = mensaje;
  }
};

const formulario = document.querySelector("form");
const botonGeneracion = document.getElementById("GeneracionBoton");
const botonMayorEdad = document.getElementById("mayorDeEdadBoton");

formulario.addEventListener("submit", crearPersonaje);
botonGeneracion.addEventListener("click", mostrarGeneracion);
botonMayorEdad.addEventListener("click", mostrarMayorEdad);








