
async function clickGaming() {
    window.location.href='/applications.html?games'

}


async function clickSoftware() {
    window.location.href='/applications.html?apps'

}

function searchRef() {
    window.location.href='/search.html?'+document.getElementById("search").value

}

window.onload = async function() {
    if(!(sessionStorage.getItem("user_id")==="null")) {
        document.getElementById("logged").innerHTML= ""
    }



}