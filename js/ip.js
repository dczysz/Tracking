$(document).ready(function() {

  // Doesn't always work on localhost/127.0.0.1
  $.getJSON('https://ipinfo.io', function(data) {

    var ipData = {
      ip: data.ip,
      provider: cleanProvider(data.org),
      city: data.city,
      state: data.region,
      zip: data.postal,
      country: data.country,
      location: data.loc,
      areaCode: data.phone
    };

    if (!!ipData) {
      showSection($('#ipSection')[0]);

      console.log('\n-- IP Address Info --');
      buildTable($('#ip')[0], ipData);
      if ($('#ip')[0].children.length != 0) {
        $('#ipSection .noLoad').addClass('d-none');
        $('#ipSection .didLoad').removeClass('d-none');
      }

      buildMap($('#map')[0], ipData.location);



    }
  });
});

// Removes provider ID from beginning of string
function cleanProvider(uglyProvider) {
  var wordArray = uglyProvider.split(' ');
  var prettyProvider = '';
  for (var i = 1; i < wordArray.length; i++) {
    prettyProvider += wordArray[i] + ' ';
  }
  return prettyProvider;
}

// Creates OpenStreetMap map view
function buildMap(mapDiv, coords) {
  mapDiv.style.display = 'block';
  var coordsString = coords.split(','),
      coordsDouble = [];

  // Convert coordinates from string to double
  for (var i = 0; i < coordsString.length; i++) {
    coordsDouble[i] = parseFloat(coordsString[i]);
  }

  var mymap = L.map(mapDiv, {
    center: coordsDouble,
    zoom: 13,
    scrollWheelZoom: false,
    dragging: false
  });

  var circle = L.circle(coordsDouble, {
    fillOpacity: 0.5,
    radius: 1000
  }).addTo(mymap);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY3p5c3oiLCJhIjoiY2pybnYyeW9lMGF0cDQ0azUzaTExbGMwNyJ9.rcB3JmerYE5vyRojnfvgKg',
  }).addTo(mymap);


}
