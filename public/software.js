async function getCfgs(a){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/cfg/software/'+a

    const response = await fetch(
        targetUrl)
    const data = await response.json()
    return data
}





async function getSoftware(a){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/software/'+a

    const response = await fetch(
        targetUrl)
    const data = await response.json()


    return data
}



function teste(a) {
    window.location.href='config.html?'+a
}

window.onload = async function() {

    queryString = window.location.search;

    let type=queryString.substring(1,queryString.length)
    type=type.substring(0,type.indexOf("&"))

    const json = await getCfgs(type)

    let lista=document.getElementById("list")
    for (let i = 0; i < json.length; i++) {
        lista.innerHTML+= '<div class="u-align-left u-container-style u-layout-cell u-size-20 u-layout-cell-1"><div onclick="teste(this.id)" id="'+json[i].cfg_id+'&'+json[i].cfg_name+'" class="u-container-layout u-valign-top u-container-layout-1"><h4 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-3">'+json[i].cfg_name+'</h4><p class="u-custom-font u-font-ubuntu u-text u-text-4">'+json[i].cfg_description+'</p></div></div>'
    }

   let software= await getSoftware(type)


    document.getElementById("software").innerHTML=' <div class="two-col"><div class="col1"><img id="softwareImg" class="u-image u-align-center u-image-1" src="images/'+software[0].software_image+'" data-image-width="1000" data-image-height="1000"><h2 id="softwareName" class="u-custom-font u-align-center u-font-ubuntu u-text u-text-default u-text-1">'+software[0].software_name+'</h2></div></div>'


}
