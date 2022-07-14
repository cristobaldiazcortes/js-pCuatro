const propiedadesJSON = [
  {
    nombre: 'Casa de campo',
    description: 'Un lugar ideal para descansar de la ciudad',
    src:
      'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
    cuartos: 2,
    metros: 170
  },
  {
    nombre: 'Casa de playa',
    description: 'Despierta tus días oyendo el oceano',
    src:
      'https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg',
    cuartos: 2,
    metros: 130
  },
  {
    nombre: 'Casa en el centro',
    description: 'Ten cerca de ti todo lo que necesitas',
    src:
      'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    cuartos: 1,
    metros: 80
  },
  {
    nombre: 'Casa rodante',
    description: 'Conviertete en un nómada del mundo sin salir de tu casa',
    src:
      'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    cuartos: 1,
    metros: 6
  },
  {
    nombre: 'Departamento',
    description: 'Desde las alturas todo se ve mejor',
    src:
      'https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg',
    cuartos: 3,
    metros: 200
  },
  {
    nombre: 'Mansión',
    description: 'Vive una vida lujosa en la mansión de tus sueños ',
    src:
      'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    cuartos: 5,
    metros: 500
  }
];

function plantillaDepartamento(departamento) {
  return `
    <div class="propiedad">
      <div class="img" style="background-image: url('${departamento.src}')"></div>
      <section>
          <h5>${departamento.nombre}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos: ${departamento.cuartos}</p>
              <p>Metros: ${departamento.metros}</p>
          </div>
          <p class="my-3">${departamento.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
    </div>
  `;
}

function cargaInicial(contenedorDePropiedades, totalDePropiedades) {

  let html = "";
  const contadorResultados = propiedadesJSON.length;
  for (const departamento of propiedadesJSON) {
    html += plantillaDepartamento(departamento);
  }

  contenedorDePropiedades.innerHTML = html;
  totalDePropiedades.innerHTML = contadorResultados;

}

function buscar() {

  const inputCantidadCuartos = document.querySelector("#cantidadCuartos").value;
  const inputMinMetros = document.querySelector("#inputMinMetros").value;
  const inputMaxMetros = document.querySelector("#inputMaxMetros").value;

  
  if (
    inputCantidadCuartos === ""
    || inputMinMetros === ""
    || inputMaxMetros === ""
  ) {
    alert("faltan campos por rellenar")
    return;
  }


  if (isNaN(inputCantidadCuartos) || isNaN(inputMinMetros) || isNaN(inputMaxMetros)) {
    alert("Los inputs deben ser de tipo numerico")
    return;
  }

  let html = "";
  let contadorResultados = 0;
  for (const departamento of propiedadesJSON) {
    if (departamento.cuartos >= inputCantidadCuartos && (departamento.metros >= inputMinMetros && departamento.metros <= inputMaxMetros)) {
      html += plantillaDepartamento(departamento);
      contadorResultados += 1;
    }
  }

  const contenedorDePropiedades = document.querySelector(".propiedades");
  contenedorDePropiedades.innerHTML = html;
  const totalDePropiedades = document.querySelector("#total");
  totalDePropiedades.innerHTML = contadorResultados;
}


document.addEventListener('DOMContentLoaded', (event) => {

  const contenedorDePropiedades = document.querySelector(".propiedades");
  const totalDePropiedades = document.querySelector("#total");
  const botonBuscar = document.querySelector("#botonBuscar");

  botonBuscar.addEventListener('click', buscar)

  cargaInicial(contenedorDePropiedades, totalDePropiedades);
});
