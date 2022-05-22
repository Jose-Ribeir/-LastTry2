
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

    alert(""+type)
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/cfg/'+type
    const response = await fetch(
        targetUrl)
    const data = await response.json()

    return data
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;


var queryString

window.onload = async function() {
    queryString = window.location.search;
    console.log(queryString);
    const json = await getcfg()

    alert("Json getData config"+JSON.stringify(json))
    document.getElementById("descri").innerHTML=""+json[0].cfg_description
    document.getElementById("date").innerHTML=""+json[0].cfg_date
    document.getElementById("cfgName").innerHTML=""+json[0].cfg_name
    document.getElementById("keyact").innerHTML=""+json[0].cfg_key_action
    document.getElementById("person").innerHTML=""+json[0].person_name+" "+json[0].person_surname
    document.getElementById("views").innerHTML=""+json[0].cfg_view
    document.getElementById("gameName").innerHTML=""+json[0].software_name
    document.getElementById("softwareImg").src="images/"+json[0].software_image

    // document.getElementById("keyact").value=json.cfg_



}