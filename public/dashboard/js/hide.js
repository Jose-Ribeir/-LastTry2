$(document).ready(function() {
    let user = sessionStorage.getItem("user_is_admin")
    console.log(user)

    const tu = document.querySelector('.hide')
    tu.style.display = 'none'
    if(user) {
        tu.style.display='inline'
    }
});