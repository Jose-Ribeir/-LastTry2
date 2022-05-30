async function getData(type){
    var targetUrl = linkApi+'software/'+type
    const response = await fetch(
        targetUrl)
    const data = await response.json()

    return data
}





window.onload = async function() {
    let queryString
    queryString = window.location.search;

    let type=queryString.substring(1,queryString.length)
    const json = await getData(type)
    alert(""+json[0])
    let lista=document.getElementById("list")
    for (let i = 0; i < json.length; i++) {
        lista.innerHTML+= '<div class="u-container-style u-align-center u-list-item u-repeater-item"> <div onclick="teste(this.id)" id="'+json[i].software_id+'&'+json[i].software_name+'" class="u-container-layout u-align-center u-similar-container u-container-layout-1"> <p class="u-text u-text-1">'+json[i].software_name+'</p> <img  class="u-hover-feature u-image u-image-default u-preserve-proportions u-image-1" src="images/'+json[i].software_image+'" alt="" data-image-width="78" data-image-height="78"> </div> </div>'
    }
}
