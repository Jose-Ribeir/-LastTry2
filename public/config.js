// Mapa do circlo

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

async function initMap(a) {
    // console.log(json)
    const map = new google.maps.Map(document.getElementById("mapcfg"), {
        zoom: 13,
        center: { lat: a.st_x, lng: a.st_y },
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



        const cityCircle = new google.maps.Circle({
            strokeColor: "#ffb500",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#ffb500",
            fillOpacity: 0.35,
            map,
            center: { lat: a.st_x, lng: a.st_y },
            // center: citymap.lisboa.center,
            radius: 500,
        });



}



async function getcfg(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)ff
    // const data = await response.json()
    // console.log(data)
    // return data
    let type=queryString.substring(1,queryString.length)
    type=type.substring(0,type.indexOf("&"))

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/cfg/'+type
    const response = await fetch(
        targetUrl)
    const data = await response.json()

    return data
}



var queryString

window.onload = async function() {
    queryString = window.location.search;
    const json = await getcfg()
    window.initMap = initMap(json[0]);
    const d = new Date(json[0].cfg_date);
    alert("key action "+json[0].cfg_key_action)
    document.getElementById("descri").innerHTML=""+json[0].cfg_description
    document.getElementById("date").innerHTML="" + d.toDateString();
    document.getElementById("cfgName").innerHTML=""+json[0].cfg_name
    document.getElementById("keyact").innerText=""+json[0].cfg_key_action
    document.getElementById("person").innerHTML=""+json[0].person_name+" "+json[0].person_surname
    document.getElementById("views").innerHTML=""+json[0].cfg_view
    document.getElementById("gameName").innerHTML=""+json[0].software_name
    document.getElementById("softwareImg").src="images/"+json[0].software_image
    document.getElementById("dowloadfile").innerHTML='<a href="Cfg/'+json[0].cfg_cfg+'" download="'+json[0].cfg_cfg+'"><button type="button" class="button11">Download Now<button></a>'

    // document.getElementById("keyact").value=json.cfg_
}


