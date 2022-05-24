$(document).ready(function() {
    let user = sessionStorage.getItem("user_is_admin")
    console.log(user)
    document.querySelector('#test').style.color='yellow'
    const tu = document.querySelector('.hide')
    tu.style.display = 'none'
    if(user==="true") {
        tu.style.display='inline'
    }
});