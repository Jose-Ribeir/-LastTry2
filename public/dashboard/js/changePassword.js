async function changePass1() {

    id = sessionStorage.getItem("user_id")
    let jsno = await getData(id)

    alert(""+document.getElementById('newpass2').value === document.getElementById('newpass1').value)
    if (document.getElementById('newpass2').value === document.getElementById('newpass1').value){
        if (jsno.person_password === document.getElementById('newpass1').value){


            let data = {"person_id": id,
                "person_password": document.getElementById('oldpass').value,
                "person_passwordnew":  document.getElementById('newpass1').value};



            try {

                //get json here
                let newProduct = await $.ajax({
                    url: "https://cfg-api-ultimate.herokuapp.com/changepass",
                    method: "PUT",
                    data: JSON.stringify(data),
                    contentType: "application/json",
                    dataType: "json"
                });
                alert(JSON.stringify(newProduct))

                window.location.href='../profile.html'

            } catch (err) {
                console.log(err);
                if (err) {
                    alert(""+err);
                }
            }
        }else {
            alert("Wrong password")
        }
    }
    else
        alert("Passwords don't coincide")
}

async function getData(a){
    var targetUrl = linkApi+'users/'+a

    const response = await fetch(targetUrl)
    const data = await response.json()
    return data

}
