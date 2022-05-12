var temp;



async function add(){
    await newUser()
    alert("Account created")
    window.location.href='../index.html'
}


async function newUser() {
    if (validatePassword()){
    let data = {
        person_email: (document.getElementById("email").value),
        person_name: (document.getElementById("username").value),
        person_password: (document.getElementById("pass").value)

    }

    try {

        //get json here
        let newProduct = await $.ajax({
            url: "https://cfg-api-ultimate.herokuapp.com/users",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        alert(JSON.stringify(newProduct))

        sessionStorage.setItem("user_id",JSON.stringify(newProduct.person_id))
        //
        // window.location.href='../index.html'
    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
            alert(""+err.responseJSON.msg);
        } else {
            alert("Was not able to add product") ;
        }
    }
    }
}


var password = document.getElementById("pass")
    , confirm_password = document.getElementById("confirmPass");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
        return false
    } else {
        confirm_password.setCustomValidity('');
        return true
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;