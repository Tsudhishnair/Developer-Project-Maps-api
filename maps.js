// Initialising variables
var map;
//stores the set of markers for the set of location
var markers = [];

// Functions
function initFunction() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10.75, lng: 76.62676 },
    zoom: 13
  });

  // //variable to set the marker
  // var home = { lat: 10.7, lng: 76.67266 };
  // //marker api
  // var marker = new google.maps.Marker({
  //   position: home,
  //   map: map,
  //   title: "Home"
  // });

  // //infowindow
  // var infowindow = new google.maps.InfoWindow({
  //   content: "This is my lovely home.Please do visit our lovely home"
  // });
  // marker.addListener("click", function() {
  //   infowindow.open(map, marker);
  // });

  var location = [
    { title: "location1", location: { lat: 10.75, lng: 76.652 } },
    { title: "location2", location: { lat: 10.775, lng: 76.67254 } },
    { title: "location3", location: { lat: 10.789, lng: 76.6526123 } },
    { title: "location4", location: { lat: 10.792, lng: 76.6326751 } },
    { title: "location5", location: { lat: 10.75891, lng: 76.6626789 } },
    { title: "location6", location: { lat: 10.751234, lng: 76.67268 } }
  ];
  var largeInfowindow = new google.maps.InfoWindow();
  // looping to create one marker per location
  for (var i = 0; i < location.length; i++) {
    var position = location[i].location;
    var title = location[i].title;
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      id: i
    });
    markers.push(marker);
    marker.addListener("click", function() {
      populateInfoWindow(this, largeInfowindow);
    });
  }
  function populateInfoWindow(marker, InfoWindow) {
    if (InfoWindow.marker != marker) {
      InfoWindow.marker = marker;
      InfoWindow.setContent("<div>" + marker.title + "</div>");
      InfoWindow.open(map, marker);
      InfoWindow.addListener("closeclick", function() {
        InfoWindow.setMarker(null);
      });
    }
  }
}
