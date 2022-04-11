const container = document.querySelector(".container");
const coffees = [
  {
    name: "Nacimiento",
    image: "images/image11.jpg",
    description1: "14 de Junio del 2000",
    description2: "Estado de México"
  },
  {
    name: "Infancia",
    image: "images/image1.jpg",
    description1: "Me cuidaba mi tía",
    description2: "Y crecí con mis primos"
  },
  {
    name: "Familia",
    image: "images/image13.jpg",
    description1: "Familia Munguia",
    description2: "15 mienbros en total"
  },
  {
    name: "Abuelos",
    image: "images/image12.jpg",
    description1: "Quienes más me inspiran",
    description2: "Mis ejemplos a seguir"
  },
  {
    name: "Hermano mayor",
    image: "images/image5.jpg",
    description1: "Miguel Eduardo",
    description2: "El hombre que más quiero"
  },
  {
    name: "Hermanas pequeñas",
    image: "images/image7.jpg",
    description1: "Melissa y Vanessa",
    description2: "Mi motivo para esforzarme"
  },
  {
    name: "Amistades",
    image: "images/image2.jpg",
    description1: "Mar y Naza",
    description2: "Pocas pero valiosas"
  },
  {
    name: "Música",
    image: "images/image9.jpg",
    description1: "BTS",
    description2: "Mi lugar feliz y seguro"
  },
  {
    name: "Fascinaciones",
    image: "images/image8.jpg",
    description1: "Amante del café",
    description2: "Es parte de mi día a día"
  }
];

const coffees2 = [
  {
    name2: "Curiosidades",
    description3: "Tengo un lunar justo en el centro de mi palma izquierda y uno justo en el centro de mi planta del pie derecho."
  },
  {
    name2: "Logros",
    description3: "En el año 2021 participé en el Hackathon con mis compañeros Fernando, Nazareth y Adolfo, donde obtuvimos el segundo lugar con el proyecto FANAVI."
  },
  {
    name2: "Metas",
    description3: "En el futuro me gustaría especializarme en algo como E-commerce o User Experience, y poder desempeñarme en un trabajo relazionado a eso."
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, description1, description2 }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <h5 class="card--description">${description1}</h5>
                <h5 class="card--description">${description2}</h5>
              </div>
              `)
  );
  coffees2.forEach(
    ({ name2, description3 }) =>
      (output += `
              <div class="card2">
                <h1 class="card--title">${name2}</h1>
                <h5 class="card--description">${description3}</h5>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
