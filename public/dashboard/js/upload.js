
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
        b.innerHTML = "<img id='img' src=\"images/icon/logo.png\" height=\"150\" width=\"150\"/>"
        gameorsoftware = 1
    } else {
        if (gameorsoftware === 1) {
            a.innerText = "Game"
            b.innerHTML = "<img id='img'src=\"images/icon/logogaming.png\" height=\"150\" width=\"150\"/>"
            gameorsoftware = 0
        }
    }
    await fillDropdown()
}

async function uploadCFG() {
    const d = new Date();
    let field = document.getElementById("dropDown")
    for (let i = 0; i < json.length; i++) {
        if (json[i].software_name === field.value)
        {

            let data = {"cfg_name":  document.getElementById('name').value,
                "cfg_cfg":  document.getElementById('cfgfile').value,
                "cfg_software_id":  json[i].software_id,
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
                //


            } catch (err) {
                console.log(err);
                if (err.responseJSON) {
                    alert(""+err.responseJSON.msg);
                } else {
                    alert("cfg saved") ;
                    // window.location.href='../cfgUpload.html'
                }
            }
        }
        else{
            alert("Select a Game or Software")
        }

    }

}


function uploadcfg(){

}



window.onload = async function() {
    loginId = sessionStorage.getItem("user_id")

    document.getElementById("name1").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("name2").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("email").innerText=removehash(sessionStorage.getItem("user_email"))
    await fillDropdown()
}