$(document).ready(function() {
    let user = sessionStorage.getItem("user_is_admin")
    console.log(user)
    document.querySelector('#test').style.color='yellow'
    const tu = document.querySelectorAll('.hide')

    for (let i = 0; i < tu.length; i++) {
        tu[i].style.display = 'none'
    }

    if(user==="true") {
        for (let i = 0; i < tu.length; i++) {
            tu[i].style.display = 'inline'
        }
    }
});