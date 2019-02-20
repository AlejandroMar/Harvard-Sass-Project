function initMap() {
            // The location of medellin
            var medellin = { lat: 6.157232, lng: -75.590853 };
            // The map, centered at medellin
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 12, center: medellin });
            // The marker, positioned at medellin
            var marker = new google.maps.Marker({ position: medellin, map: map });
}

// A $( document ).ready() block.
$( document ).ready(function() {
    
});