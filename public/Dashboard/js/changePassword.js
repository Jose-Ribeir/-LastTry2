async function changePass1() {
    alert(""+document.getElementById('newpass2').value === document.getElementById('newpass1').value)
    if (document.getElementById('newpass2').value === document.getElementById('newpass1').value){
        let data = {"person_id": "1",
            "person_password": document.getElementById('oldpass').value,
            "person_passwordnew":  document.getElementById('newpass1').value};

        alert(""+JSON.stringify(data))

        try {

            //get json here
            let newProduct = await $.ajax({
                url: "https://cfg-api-ultimate.herokuapp.com/changepass",
                method: "put",
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: "json"
            });
            alert(JSON.stringify(newProduct))

            window.location.href='../../Dashboard/table.html'

        } catch (err) {
            console.log(err);
            if (err) {
                alert(""+err);
            } else {
                alert("Wrong password") ;
            }
        }
    }
    else
        alert("Passwords don't coincide")
}