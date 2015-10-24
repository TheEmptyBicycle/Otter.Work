var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 36.96481, lng: -122.0164 },
        zoom: 8
    });
}