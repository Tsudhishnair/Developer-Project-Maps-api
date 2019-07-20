// Initialising variables
var map;

// Functions
function initFunction() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.7, lng: 76.672675 },
    zoom: 13
  });

  //variable to set the marker
  var home = { lat: 10.7, lng: 76.67266 };
  //marker api
  var marker = new google.maps.Marker({
    position: home,
    map: map,
    title: "Home"
  });

  //infowindow
  var infowindow = new google.maps.InfoWindow({
    content: "This is my lovely home.Please do visit our lovely home"
  });
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
}
