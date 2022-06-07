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
window.onload = async function() {
    queryString = window.location.search;
    console.log(queryString);
    type=queryString.substring(1,queryString.length)
    if(type==="games")
        document.getElementById("title").innerText="Gaming"
    else
        document.getElementById("title").innerText="Working"
    const json = await getData()

    let lista=document.getElementById("list")
    for (let i = 0; i < json.length; i++) {
        lista.innerHTML+= '<div class="u-container-style u-align-center u-list-item u-repeater-item "> ' +
            '<div onclick="teste(this.id)" id="'+json[i].software_id+'&'+json[i].software_name+'" class="u-layout-cell-41 u-container-layout u-align-center u-similar-container u-container-layout-1"> ' +
            '<p class="u-text u-text-1">'+json[i].software_name+'</p><hr style="height:2px;border-width:0;color:gray;background-color:gray;margin-top: 0px"> ' +
            '<img  class="u-hover-feature u-image u-image-default u-preserve-proportions u-image-1" src="images/'+json[i].software_image+'" alt="" > </div> ' +
            '</div>'
    }
}

// <div className="two-col u-layout-cell-4">
//     <div className="col1 align-content-center align-items-center"><img
//         src="images/Microsoft_Office_Excel_(2019–present).svg.png" data-image-height="100" data-image-width="100"
//         className="imagesearch "></div>
//     <div className="col2">
//         <div className="u-align-left u-container-style u-layout-cell u-size-20 ">
//             <div onClick="refCfg(this.id)" id="26&amp;Accountant"
//                  className="u-container-layout u-valign-top u-container-layout-1"><h4
//                 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-3 textColor mt-4">Accountant</h4> <p
//                 className="u-custom-font u-font-ubuntu u-text u-text-4 textColor">This cfg has been evolving along the
//                 years i have been working as an account with all the macros that you need in the job.
//                 You can always perfect it if needed.</p></div>
//         </div>
//     </div>
// </div>