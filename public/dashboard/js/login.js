// Sending and receiving data in JSON format using POST method
//
// function loging(){
//     var xhr = new XMLHttpRequest();
//     var url = "https://cfg-api-ultimate.herokuapp.com/login";
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var json = JSON.parse(xhr.responseText);
//             console.log(json.email + ", " + json.password);
//         }
//     };
//     var data = JSON.stringify({"person_email": document.getElementById('email').value, "person_password":  document.getElementById('password').value});
//     console.log(xhr.responseText)
//     xhr.send(data);
//
// }
var temp;

async function add() {
    var data1 = JSON.stringify({"person_email": document.getElementById('email').value, "person_password":  document.getElementById('password').value});
    let data = {
        person_email: (document.getElementById("email").value),
        person_password: (document.getElementById("password").value)
    }
    console.log("[addProducts] data = " + JSON.stringify(data));
    console.log("data1" + JSON.stringify(data1));
    try {

        //get json here
        let logedUser = await $.ajax({
            url: linkApi+"login",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });


        sessionStorage.setItem("user_id",JSON.stringify(logedUser.person_id))
        sessionStorage.setItem("user_name",JSON.stringify(logedUser.person_name))

        sessionStorage.setItem("user_email",JSON.stringify(logedUser.person_email))
        sessionStorage.setItem("user_is_admin",JSON.stringify(logedUser.person_is_admin))
        window.location.href='../dashboard/profile.html'

    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
           alert(""+err.responseJSON.msg);
        } else {
            alert("Was not able to add product") ;
        }
    }
}

    window.onload =function() {
        sessionStorage.clear();
        sessionStorage.removeItem("user_id")
        sessionStorage.removeItem("user_name")
        sessionStorage.removeItem("user_email")
        sessionStorage.removeItem("user_is_admin")
    }





