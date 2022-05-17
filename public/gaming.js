async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data
    alert("getdata")
    let type=queryString.substring(1,queryString.length)


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/software/'+type
    const response = await fetch(
        targetUrl)
    const data = await response.json()
    alert(""+data[0])
    return data
}





window.onload = async function() {
    const queryString = window.location.search;
    console.log(queryString);
    alert(""+queryString)

    const json = await getData()
    alert(""+json[0])
    let lista=document.getElementById("list")
    for (let i = 0; i < json.length; i++) {
        lista.innerHTML+="<div class=\"u-container-style u-list-item u-repeater-item\">\n" +
            "              <div class=\"u-container-layout u-similar-container u-container-layout-1\">\n" +
            "                <p class=\"u-text u-text-1\">"+json[i]+"</p>\n" +
            "                <img class=\"u-hover-feature u-image u-image-default u-preserve-proportions u-image-1\" src=\"images/272f78_95999562a4cd4ea08798d569018146bd_mv2.png\" alt=\"\" data-image-width=\"78\" data-image-height=\"78\">\n" +
            "              </div>\n" +
            "            </div>"

    }

}
