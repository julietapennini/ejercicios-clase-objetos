//___________Ejercicio 4

const datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
};

// Solución
datos.telefono = "0192837465"
datos.edad = 29;

console.log(datos)




//___________Ejercicio 8
const user = {
    id: 123456789,
    name: "Ada Lovelace",
    url: "https://www.linkedin.com/in/ada-lovelace",
    skills: ["HTML", "CSS", "SASS"],
};
  
// Solución
user.skills.push ("Javascript");
  
console.log(user);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }





//___________Ejercicio 10
const ganadoras = [
    {
      nombre: "Bebe Zahara Benet",
      temporada: "1",
      foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
    },
    {
      nombre: "Tyra Sanchez",
      temporada: "2",
      foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
    },
    {
      nombre: "Raja",
      temporada: "3",
      foto: "http://www.nokeynoshade.party/images/raja.jpg",
    },
    {
      nombre: "Sharon Needles",
      temporada: "4",
      foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
    },
    {
      nombre: "Jinkx Monsoon",
      temporada: "5",
      foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
    },
    {
      nombre: "Bianca Del Rio",
      temporada: "6",
      foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
    },
];

// Solución
  for(let i = 0; i < ganadoras.length; i++){
    console.log(`${ganadoras[i].nombre} ganó la temporada ${ganadoras[i].temporada}`);
}
  
  
///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6


//___________Ejercicio 11

const bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];
  
// Solución

for (let i = 0; i < bandas.length; i++) {
    const {id, nombre, fundacion, activa} = bandas[i];
    if(activa === true){
        console.log(`${nombre} está activa desde el año ${fundacion}`)
    }else{
        console.log(`${nombre} NO está activa`)
    }   
}



// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
 // Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990


//___________Ejercicio 12

const banda = {
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
  

// Solución

const anioLanzamiento = banda.year;
const cantidadMiembros = banda.members.length;
//metodo de arrays para tomar todos los elementos del Array convertilos en un string largo pomiendo en el medio lo que pongamos en el parámetro
const miembros = banda.members.join(", ");
const cantidadDiscos = banda.albums.length
/*1 - Entrar al objeto banda
2- Entrar a la propiedad albumns
3 - Recorrer el Array dentro de albums
4 - Leer length de propiedad songs de cada elemento del Arrayal albumns
5 - Sumar todas los elementos del arrrayal song dentro del arrayal albuumns*/
    

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
6 - dividir el total por la cantidad de canciones*/
    
const buscarTotalDuracion = () => {
 let total = 0;
for (let i = 0; i < banda.albums.length; i++) {
        total += banda.albums[i].duration;
}
return total / cantidadTotalCanciones;
}

const promedioDuracion = buscarTotalDuracion()

  
///// RESULTADO
console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
  
console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
  
console.log("Tiene en total " + cantidadDiscos + " discos");
  
console.log(
    "Tiene en total " + cantidadTotalCanciones +" canciones entre todos los discos."
);
  
  console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
  // ESPERADO
  // Led Zeppelin se fundó en el año 1968
  // Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
  // Tiene en total 4 discos
  // Tiene en total 9 canciones entre todos los discos.
  // En promedio, cada canción dura 1137.888888888889 segundos
