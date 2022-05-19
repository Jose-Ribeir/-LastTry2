async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data

    let type=queryString.substring(1,queryString.length)
    type=type.substring(0,type.indexOf("&"))
    alert(type)
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/cfg/'+type

    const response = await fetch(
        targetUrl)
    const data = await response.json()
    return data
}










async function click(id) {


}





async function batata() {
    alert("batata")
  const  queryString = window.location.search;
    console.log(queryString);


    const json = await getData()
    alert(""+json[0])
    let lista=document.getElementById("list")
    for (let i = 0; i < json.length; i++) {
        lista.innerHTML+= '<div class="u-align-left u-container-style u-layout-cell u-size-20 u-layout-cell-1">\n' +
            '                        <div class="u-container-layout u-valign-top u-container-layout-1">\n' +
            '                            <h4 class="u-custom-font u-font-ubuntu u-text u-text-default u-text-3">Sample Headline</h4>\n' +
            '                            <p class="u-custom-font u-font-ubuntu u-text u-text-4">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>\n' +
            '                        </div>\n' +
            '                    </div>'
    }

}

function f() {
    alert("Function f")
}
window.onload = async function() {
    alert("Onloadddd")
    batata()

}
window.addEventListener("load", async function () {
    alert("event listener")
    batata()
})