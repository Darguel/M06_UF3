let map;
let marker;

async function initMap() {
  let address= document.getElementById("adreca").value;
  let jsondata;
    try{
      const response = await fetch('json.json')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        jsondata = await response.json();
        console.log(data)
    }catch(error){
        console.log('error por inutil:' + error)
    }

    const myLatLng = { lat: 41.390205, lng: 2.154007 };
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: myLatLng,
      styles: jsondata
    });
  
    marker = new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
      icon: "home.png"
    });

    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Direccion:</h1>' +
    '<div id="bodyContent">' +
    `<p>${address}</p>` +
    "</div>" +
    "</div>";

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
  
  window.initMap = initMap;

function buscar(){
  let geocoder = new google.maps.Geocoder();
  let address= document.getElementById("adreca").value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();

      document.getElementById("latitude").value = latitude;
      document.getElementById("longitude").value = longitude;
      // console.log(latitude)
      // console.log(longitude)
      
      //para el marcador
      let newLatLng = new google.maps.LatLng(latitude, longitude);
      marker.setPosition(newLatLng);
      // para el mapa
      let center = new google.maps.LatLng(latitude, longitude);
      map.setCenter(center);
      map.setZoom(16);
    }
    else{
      return "direccion no encontrada"
    }
  });
}

function geolocalizacion(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    let pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
    };
    map.setCenter(pos);
    map.setZoom(16);
    marker.setPosition(pos);
    });
    }
}
