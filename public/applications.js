async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data



    var targetUrl = linkApi+'software/'+type
    const response = await fetch(
        targetUrl)
    const data = await response.json()

    return data
}

function teste(a) {
    window.location.href='software.html?'+a
}

var queryString
var type

let executed = false
let i=0
let limit=0
let json
let final=0
async function loadMoreApps() {


    if (!executed) {
        json=await getData()
        limit = (Object.keys(json).length > 5) ? 6: Object.keys(json).length
        console.log(limit, "limit1")
        executed = true
    }


    let lista=document.getElementById("list")

    for (i ; i < limit; i++) {
        lista.innerHTML+= '<div class="u-container-style u-align-center u-list-item u-repeater-item "> ' +
            '<div onclick="teste(this.id)" id="'+json[i].software_id+'&'+json[i].software_name+'" class="u-layout-cell-41 u-container-layout u-align-center u-similar-container u-container-layout-1"> ' +
            '<p class="u-text u-text-1">'+json[i].software_name+'</p><hr style="height:2px;border-width:0;color:gray;background-color:gray;margin-top: 0px"> ' +
            '<img  class="u-hover-feature u-image u-image-default u-preserve-proportions u-image-1" src="images/'+json[i].software_image+'" alt="" > </div> ' +
            '</div>'
    }



    if (limit+6 < Object.keys(json).length) {
        limit +=6
    }

    else {
        limit = Object.keys(json).length
        final++
    }
    if (final>2){
        alert("No more Apps or games to load")
    }


}



window.onload = async function() {



    queryString = window.location.search;
    console.log(queryString);
    type=queryString.substring(1,queryString.length)


    await loadMoreApps()

    if(type==="games")
        document.getElementById("title").innerText="Gaming"
    else
        document.getElementById("title").innerText="Working"

}