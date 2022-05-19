
async function getData(){
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
    console.log(queryString);
    const json = await getData()

    alert("Json getData config"+JSON.stringify(json))
    document.getElementById("descri").innerHTML=""+json[0].cfg_description
    document.getElementById("date").innerHTML=""+json[0].cfg_date
    document.getElementById("name").innerHTML=""+json[0].cfg_name
    document.getElementById("keyact").innerHTML=""+json[0].cfg_key_action
    // document.getElementById("name").value=json.cfg_
    // document.getElementById("keyact").value=json.cfg_



}