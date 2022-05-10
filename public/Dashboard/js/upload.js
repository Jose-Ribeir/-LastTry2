
var loginId
var software1="da"
var json


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
        targetUrl)
    const data = await response.json()
    return data

}
var clean


async function fillDropdown() {
    let field = document.getElementById("dropDown")
    json = await getData(gameorsoftware)
    clean=json.length
        field.innerHTML = '<option>Select</option>'

    for (let i = 0; i < json.length; i++) {
        field.innerHTML += '<option>' + json[i].software_name + '</option>'
    }

}



var gameorsoftware=1
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

async function uploadCFG() {
    const d = new Date();
    let field = document.getElementById("dropDown")
    let softwareId
    for (let i = 0; i < json.length; i++) {
        if (json[i].software_name === field.value)
        {
            softwareId=json[i].software_id
        }

    }

    let data = {"cfg_name":  document.getElementById('name').value,
       // "cfg_cfg":  document.getElementById('inputPostalCode').value,
        "cfg_software_id":  softwareId,
        "cfg_person_id":  loginId,
        "cfg_date":  d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()	,
        "cfg_key_action":  document.getElementById('keyaction').value,
        "cfg_description":  document.getElementById('description').value};
    console.log("[addProducts] data = " + JSON.stringify(data));
    try {

        //get json here
        let newProduct = await $.ajax({
            url: "https://cfg-api-ultimate.herokuapp.com/cfg",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        alert(JSON.stringify(newProduct))
        //
         window.location.href='../../Dashboard/form.html'

    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
            alert(""+err.responseJSON.msg);
        } else {
            alert("Was not able to add product") ;
        }
    }
}



window.onload = async function() {
    loginId = sessionStorage.getItem("user_id")
    await fillDropdown()
}