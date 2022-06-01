async function searchSoftware(a){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data

    var targetUrl = linkApi+'software/search/'+a

    const response = await fetch(
        targetUrl)
    const data = await response.json()


    return data
}

async function searchCFG(a){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data

    var targetUrl = linkApi+'cfg/search/'+a

    const response = await fetch(
        targetUrl)
    const data = await response.json()


    return data
}

async function searchUsers(a){

    var targetUrl = linkApi+'users/search/'+a

    const response = await fetch(
        targetUrl)
    const data = await response.json()


    return data
}


function refCfg(a) {
    window.location.href="config.html?"+a

}









window.onload = async function() {

    queryString = window.location.search;

    let type=queryString.substring(1,queryString.length)
    type=type.substring(0,type.indexOf("&"))

    const softwares = await searchSoftware(type)
    const cfgs = await searchCFG(type)
    const users = await searchUsers(type)

    let lista=document.getElementById("itemSearch")
    for (let i = 0; i < cfgs.length; i++) {
        lista.innerHTML+= ' <div  class="u-clearfix u-gutter-10 u-layout-wrap u-layout-wrap-1"><div class="u-clearfix u-gutter-10 u-layout-wrap u-layout-wrap-1"> <div class="u-gutter-0 u-layout"> <div class="u-layout-col" id="list"> <div class="two-col u-layout-cell-4"> <div class="col1 align-content-center align-items-center"> <img src="images/272f78_2c07cd0124b549faa6a64b4fcb7ad492_mv2.jpg" class="imagesearch "> </div> <div class="col2"> <div class="u-align-left u-container-style u-layout-cell u-size-20 "> <div onclick="refCfg(this.id)" id="'+cfgs.cfg_id+'&'+cfgs.cfg_name+'" class="u-container-layout u-valign-top u-container-layout-1"><h4 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-3 textColor mt-4">'+cfgs.cfg_name+'</h4> <p class="u-custom-font u-font-ubuntu u-text u-text-4 textColor">'+cfgs.cfg_description+'</p></div></div></div></div></div></div></div></div>'
    }





}