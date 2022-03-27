
function initMap() {
    // The location of Bangalore
    const Bangalore = { lat: 12.9716, lng: 77.5946 };
    // The map, centered at Bangalore
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Bangalore,
    });
    // The marker, positioned at Bangalore
    const marker = new google.maps.Marker({
      position: Bangalore,
      map: map,
    });
  }


