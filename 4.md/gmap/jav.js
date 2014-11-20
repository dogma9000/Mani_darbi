function initialize() {
  var myLatlng = new google.maps.LatLng(57.546256, 25.422840);
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  }
var map = new google.maps.Map(document.getElementById('karte'), mapOptions);
  	latLng = new google.maps.LatLng(57.546256, 25.422840);
  	latLng2 = new google.maps.LatLng(57.538578, 25.421265);
  	latLng3 = new google.maps.LatLng(57.537299, 25.421605);
  	new google.maps.Marker({position: latLng, map: map});
   	new google.maps.Marker({position: latLng2, map: map});
   	new google.maps.Marker({position: latLng3, map: map});
}

google.maps.event.addDomListener(window, 'load', initialize);