
const citymap = {
    lisboa: {
        center: { lat: 38.736946, lng: -9.142685 },
        population: 504718,
    },
    Porto: {
        center: { lat: 41.15, lng: -8.61024 },
        population: 214349,
    },
};

async function initMap() {
    let b = await getStores()
    var user = await getUserDa()
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("mapcfg"), {
        zoom: 13,
        center: { lat: 38.736946, lng: -9.142685 } ,
        mapTypeId: "terrain",
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    // for (const spot in json) {
    //     // Add the circle for this city to the map.
    //     const cityCircle = new google.maps.Circle({
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 0.8,
    //         strokeWeight: 2,
    //         fillColor: "#FF0000",
    //         fillOpacity: 0.35,
    //         map,
    //         center: { lat: spot.st_x, lng: spot.st_y },
    //         radius: Math.sqrt(spot.sp_view) * 100,
    //     });
    // }




    for (let i = 0; i < b.length; i++) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(b[i].st_x), parseFloat(b[i].st_y)),
            title:b[i].store_name,
            label: {
                text: b[i].store_nameb[i].store_name,
                color: "#4682B4",
                fontSize: "30px"
            },
        });
        marker.addListener("click",() =>{
            let lat =marker.getPosition().lat()
            let long= marker.getPosition().lng()
            directionsRenderer.setMap(map);
            calculateAndDisplayRoute(directionsService, directionsRenderer, lat,long);
            document.getElementById("mode").addEventListener("change", () => {
                calculateAndDisplayRoute(directionsService, directionsRenderer, marker.getPosition.lat,marker.getPosition.lng);
            });})
        marker.setMap(map);
    }


    for (let i = 0; i < user.length; i++) {

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(user[i].st_x), parseFloat(user[i].st_y)),
            icon : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title:"Your location",
            label:"Your location"
        });

        marker1.setMap(map);
    }



}


async function calculateAndDisplayRoute(directionsService, directionsRenderer, lat,long) {

    var user1 = await getUserDa()


    const selectedMode = document.getElementById("mode").value;
    directionsService
        .route({

            origin: { lat: user1[0].st_x, lng: user1[0].st_y },
            destination: { lat:lat,lng:long },
            travelMode: google.maps.TravelMode[selectedMode],
        })

        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}


async function getUserDa(){


    var targetUrl = linkApi+'users/'+sessionStorage.getItem("user_id")

    const response = await fetch(
        targetUrl)
    const data = await response.json()
    return data

}



function removehash(a){

    let b=a.substring(a.indexOf('"')+1,a.length)
    b=b.substring(0,b.indexOf('"'))
    return b
}

async function getStores(){

    let targetUrl = linkApi+'stores'


    const response = await fetch(targetUrl)
    const data = await response.json()
    console.log(data)
    return data

}

window.onload = async function() {
    queryString = window.location.search;
    if(sessionStorage.getItem("user_id")===null)
        window.location.href="../login.html"
    window.initMap = initMap();
    document.getElementById("name1").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("name2").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("email").innerText=removehash(sessionStorage.getItem("user_email"))
}
