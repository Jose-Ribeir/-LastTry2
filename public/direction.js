 function  initMap() {

    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 38.736946, lng: -9.142685 },
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
}

 async function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const json = await getData()
    const selectedMode = document.getElementById("mode").value;

    directionsService
        .route({

            origin: { lat: json[0].st_x, lng: json[0].st_y },
            destination: { lat: json[1].st_x, lng: json[1].st_y },
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: google.maps.TravelMode[selectedMode],
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}

async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/stores'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/stores'

    const response = await fetch(
        proxyUrl + targetUrl)
    const data = await response.json()
    return data

}

window.initMap = initMap;