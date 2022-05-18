
async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)ff
    // const data = await response.json()
    // console.log(data)
    // return data

    let type=queryString.substring(1,queryString.length)


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/cfg/name/'+type
    const response = await fetch(
        targetUrl)
    const data = await response.json()

    return data
}





window.onload = async function() {
    queryString = window.location.search;
    console.log(queryString);
    const json = await getData()

    document.getElementById("descri").innerText=json[0].cfg_description
    document.getElementById("date").innerText=json[0].cfg_date
    document.getElementById("name").innerText=json[0].cfg_name
    document.getElementById("keyact").innerText=json[0].cfg_key_action
    // document.getElementById("name").value=json.cfg_
    // document.getElementById("keyact").value=json.cfg_



}