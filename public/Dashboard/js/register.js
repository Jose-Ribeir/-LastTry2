var temp;

async function add() {
    if (document.getElementById("pass").value===document.getElementById("confirmPass").value){
    let data = {
        person_email: (document.getElementById("email").value),
        person_name: (document.getElementById("username").value),
        person_password: (document.getElementById("pass").value)

    }
    console.log("[addProducts] data = " + JSON.stringify(data));
    console.log("data1" + JSON.stringify(data1));
    try {

        //get json here
        let newProduct = await $.ajax({
            url: "https://cfg-api-ultimate.herokuapp.com/user",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        alert(JSON.stringify(newProduct))

        sessionStorage.setItem("user_id",JSON.stringify(newProduct.person_id))

    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
            alert(""+err.responseJSON.msg);
        } else {
            alert("Was not able to add product") ;
        }
    }
    }
    else
        alert("The passwords don't match")
}