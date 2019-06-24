var mapa; // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var map = document.getElementById('map');

var posicionCentral = { lat: -31.4200833, lng: -64.1887761 };
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  /* Modificá la variable mapa con el constructor Map().
  Tendrás que asignarle un valor de zoom y
  un centro igual a la variable posicionCentral. */
  mapa = new google.maps.Map(map, {
  zoom: 12,
  center: posicionCentral
  });

  geocodificadorModulo.inicializar();
  marcadorModulo.inicializar();
  direccionesModulo.inicializar();
  lugaresModulo.inicializar();
  streetViewModulo.inicializar();
}
