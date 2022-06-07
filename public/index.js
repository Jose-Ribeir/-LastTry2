
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

    if((sessionStorage.getItem("user_id")>=0 && sessionStorage.getItem("user_id") != null)) {

        let a = sessionStorage.getItem("user_name")
        let b=a.substring(a.indexOf('"')+1,a.length)
        b=b.substring(0,b.indexOf('"'))
       button.innerHTML= '<a>Loged in as <br>'+b+'</a>'
        button.href='./dashboard/profile.html'
    }



}