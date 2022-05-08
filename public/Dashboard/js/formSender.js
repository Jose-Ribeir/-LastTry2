
let id



async function upDate() {
    let data = {"person_name": document.getElementById('inputName').value,
        "person_surname":  document.getElementById('inputSurname').value,
        "person_postal_code":  document.getElementById('inputPostalCode').value,
        "person_region":  document.getElementById('inputRegion').value,
        "person_country":  document.getElementById('inputCountry').value,
        "person_adress":  document.getElementById('inputAdress').value,
        "person_bio":  document.getElementById('inputBio').value};
    console.log("[addProducts] data = " + JSON.stringify(data));
    try {

        //get json here
        let newProduct = await $.ajax({
            url: "https://cfg-api-ultimate.herokuapp.com/users/"+id,
            method: "put",
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

async function changePass() {
    if (document.getElementById('newpass2').value === document.getElementById('newpass1').value){
    let data = {"person_id": "1",
        "person_password": document.getElementById('oldpass').value,
        "person_passwordnew":  document.getElementById('newpass1').value};


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

        sessionStorage.setItem("user_id",JSON.stringify(newProduct.person_id))
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





async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users/'+id

    const response = await fetch(
         targetUrl)
    const data = await response.json()
    return data

}


async function namemail(){
    const json = await getData()

    const email = document.getElementById('email');
    const name = document.getElementById('name');

    email.insertAdjacentHTML(
        'beforeend',
        '<span class="text-black-50"> '+json[0].person_email+'</code>',
    );

    name.insertAdjacentHTML(
        'beforeend',
        '<span class="font-weight-bold"> '+json[0].person_name+json[0].person_surname+'</code>',
    );

}

window.onload = async function() {

    id = sessionStorage.getItem("user_id")
    alert("uma coisa sem"+id)
    alert("olaaaaaa")


    await namemail()
    const json = await getData()
    document.getElementById("inputName").value= ""+json[0].person_name;
    document.getElementById("inputAdress").value= ""+json[0].person_adress;
    document.getElementById("inputCountry").value= ""+json[0].person_country;
    document.getElementById("inputPostalCode").value= ""+json[0].person_postal_code;
    document.getElementById("inputSurname").value= ""+json[0].person_surname;
    document.getElementById("inputRegion").value= ""+json[0].person_region;
    document.getElementById("inputBio").value= ""+json[0].person_bio;


}



async function changePass(){
   window.location.href="../Dashboard/changepass.html"

}
