
//
// function readURL(input) {
//     if (input.files && input.files[0]) {
//
//         var reader = new FileReader();
//
//         reader.onload = function(e) {
//             $('.image-upload-wrap').hide();
//
//             $('.file-upload-image').attr('src', e.target.result);
//             $('.file-upload-content').show();
//
//             $('.image-title').html(input.files[0].name);
//         };
//
//         reader.readAsDataURL(input.files[0]);
//
//     } else {
//         removeUpload();
//     }
// }
//
// function removeUpload() {
//     $('.file-upload-input').replaceWith($('.file-upload-input').clone());
//     $('.file-upload-content').hide();
//     $('.image-upload-wrap').show();
// }
// $('.image-upload-wrap').bind('dragover', function () {
//     $('.image-upload-wrap').addClass('image-dropping');
// });
// $('.image-upload-wrap').bind('dragleave', function () {
//     $('.image-upload-wrap').removeClass('image-dropping');
// });


let software1="da"
async function getData(id){

    if (id===1){
        software1="apps"
    }
    if (id===0){
        software1="games"
    }


    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/software/'+software1

    const response = await fetch(
        proxyUrl+targetUrl)
    const data = await response.json()
    return data

}
let clean


async function fillDropdown() {
    let field = document.getElementById("dropDown")
    let json = await getData(gameorsoftware)
    clean=json.length
        field.innerHTML = '<option>Select</option>'

    for (let i = 0; i < json.length; i++) {
        field.innerHTML += '<option>' + json[i].software_name + '</option>'
    }

}



let gameorsoftware=1
async function iconChange() {
    let a = document.getElementById("ButonisGame")
    let b = document.getElementById("button")
    if (gameorsoftware === 0) {
        a.innerText = "Software"
        b.innerHTML = "<img id='img' src=\"images/icon/logo.png\" height=\"75\" width=\"75\"/>"
        gameorsoftware = 1
    } else {
        if (gameorsoftware === 1) {
            a.innerText = "Game"
            b.innerHTML = "<img id='img'src=\"images/icon/logogaming.png\" height=\"75\" width=\"75\"/>"
            gameorsoftware = 0
        }
    }
    await fillDropdown()
}
window.onload = async function() {

    await fillDropdown()


}