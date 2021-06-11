// An array of all the train stops
const trainStops = [
    [151.206526, -33.883011],
    [151.198597, -33.892031],
    [151.166538, -33.91455],
    [151.153409, -33.928543],
    [151.136817, -33.952074],
    [151.132669, -33.962168],
    [151.102515, -33.967373],
    [151.079053, -33.980677],
    [151.064659, -34.015898],
    [151.057409, -34.031494],
    [151.071449, -34.034983],
    [151.085542, -34.034887],
    [151.10263, -34.036305],
    [151.122307, -34.041579],
    [151.144041, -34.047689],
    [151.151291, -34.055539],
]; 


  
  // Access Token
  mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaHByaWNlIiwiYSI6ImNrcHAyOHp2NjAwZ2Iyb3F4MDFjM2UwbjYifQ.wIHy2j01L2xhsc1_rtG5lg';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [151.206526, -33.883011],
    zoom: 13,
  });
  
  // Stars the marker at that Long/Lat
  let marker = new mapboxgl.Marker().setLngLat([151.206526, -33.883011]).addTo(map);
  
  let counter = 0;
  function move() {
   // Moves the marker every 5000 ms
    setTimeout(() => {
      if(counter >= trainStops.length) return;
      marker.setLngLat(trainStops[counter]);
      counter++;
      move();
    }, 5000);
       
    
  }
  
  