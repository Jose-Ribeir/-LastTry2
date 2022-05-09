import http from "http";
import formidable from "formidable";
import fs from "fs";

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});


async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users/'+id

    const response = await fetch(
        targetUrl)
    const data = await response.json()
    return data

}
let gameorsoftware=0
function iconChange(){

    gameorsoftware=1
    let a =document.getElementById("ButonisGame")
    let b =document.getElementById("button")
    if(gameorsoftware === 0){
        gameorsoftware++
        a.remove();
        document.getElementById("img").remove()
        b.innerHTML="<img id='img' src=\"images/icon/logo.png\" height=\"75\" width=\"75\"/>"

    }

    if(gameorsoftware === 1){
        gameorsoftware--
        a.remove();
        document.getElementById("img").remove()
        b.innerHTML="<img id='img'src=\"images/icon/logogaming.png\" height=\"75\" width=\"75\"/>"
    }

}