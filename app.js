/*___________Ejercicio 4

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
  };

  
datos.telefono = "0192837465"
datos.edad = 29;

console.log(datos)


//___________Ejercicio 8
var user = {
    id: 123456789,
    name: "Ada Lovelace",
    url: "https://www.linkedin.com/in/ada-lovelace",
    skills: ["HTML", "CSS", "SASS"],
  };
  
  
  user.skills.push ("Javascript");
  
  // despues de la solucion
  console.log(user);
  // deberia mostrar
  // { id: 123456789,
  //   name: 'Ada Lovelace',
  //   url: 'https://www.linkedin.com/in/ada-lovelace',
  //   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }




//___________Ejercicio 12

var banda = {
    name: "Led Zeppelin",
    year: 1968,
    active: false,
    thumbnail:
      "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    
      members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    
    albums: [
      {
        name: "Led Zeppelin",
        year: 1969,
        songs: ["Good Times, Bad Times", "Communication Breakdown"],
        duration: 2691,
      },
      {
        name: "Led Zeppelin II",
        year: 1969,
        songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
        duration: 2502,
      },
      {
        name: "Led Zeppelin III",
        year: 1970,
        songs: ["Immigrant Song"],
        duration: 2489,
      },
      {
        name: "Led Zeppelin IV",
        year: 1971,
        songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
        duration: 2559,
      },
    ],
  };
  
  const anioLanzamiento = banda.year;
  const cantidadMiembros = banda.members.length;
  //metodo de arrays para tomar todos los elementos del Array convertilos en un string largo pomiendo en el medio lo que pongamos en el parámetro
  const miembros = banda.members.join(", ");
  const cantidadDiscos = banda.albums.length
  /*1 - Entrar al objeto banda
    2- Entrar a la propiedad albumns
    3 - Recorrer el Array dentro de albums
    4 - Leer length de propiedad songs de cada elemento del Arrayal albumns
    5 - Sumar todas los elementos del arrrayal song dentro del arrayal albuumns
    

    const buscarTotalCanciones = () => {
        let total = 0;
        for (let i = 0; i < banda.albums.length; i++) {
            total += banda.albums[i].songs.length;
        }
        return total;
    }
    
   const cantidadTotalCanciones = buscarTotalCanciones()
    
/*1 - Entrar al objeto banda
    2- Entrar a la propiedad albumns
    3 - Recorrer el Array dentro de albums
    4 - Leer length de propiedad songs de cada elemento del Arrayal albumns
    5 - Sumar todas los elementos de duracion dentro del arrayal albuumns
    6 - dividir el total por la cantidad de canciones
    
   const buscarTotalDuracion = () => {
    let total = 0;
    for (let i = 0; i < banda.albums.length; i++) {
        total += banda.albums[i].duration;
    }
    return total / cantidadTotalCanciones;
}

const promedioDuracion = buscarTotalDuracion()

  
  // completa el codigo para lograr el resultado esperado
  
  ///// RESULTADO
  console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
  
  console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
  
  console.log("Tiene en total " + cantidadDiscos + " discos");
  
  console.log(
    "Tiene en total " +
      cantidadTotalCanciones +
      " canciones entre todos los discos."
  );
  
  console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
  // ESPERADO
  // Led Zeppelin se fundó en el año 1968
  // Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
  // Tiene en total 4 discos
  // Tiene en total 9 canciones entre todos los discos.
  // En promedio, cada canción dura 1137.888888888889 segundos
*/