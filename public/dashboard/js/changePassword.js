async function changePass1() {

    id = sessionStorage.getItem("user_id")


    if (document.getElementById('newpass2').value === document.getElementById('newpass1').value){
        let data = {"person_id": id,
            "person_password": document.getElementById('oldpass').value,
            "person_passwordnew":  document.getElementById('newpass1').value};

        alert(""+JSON.stringify(data))

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



        } catch (err) {
            alert(""+err);
            alert("Wrong password") ;

            if (err) {

            } else {
                alert("Passwords Changed")
                window.location.href='../dashboard/profile.html'
            }
        }
    }
    else{
        alert("Passwords don't coincide")
    }

}