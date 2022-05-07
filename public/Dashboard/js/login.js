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
        let newProduct = await $.ajax({
            url: "https://cfg-api-ultimate.herokuapp.com/login",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        alert(JSON.stringify(newProduct))

        sessionStorage.setItem("user_id",JSON.stringify(newProduct.person_id))
        window.location.href='../../Dashboard/table.html'

    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
           alert(""+err.responseJSON.msg);
        } else {
            alert("Was not able to add product") ;
        }
    }
}







