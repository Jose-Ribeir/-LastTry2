
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
    let button = document.getElementById("logged")
    if(!(sessionStorage.getItem("user_id")==="null")) {
       button.innerHTML= '<a>'+sessionStorage.getItem("user_name")+'</a>'
        button.href='./dashboard/profile.html'
    }



}