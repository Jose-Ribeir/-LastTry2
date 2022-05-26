let id

async function getGps() {

    var targetUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+
            document.getElementById('inputAdress').value+', '+
            document.getElementById('inputCountry').value+', '+
            document.getElementById('inputPostalCode').value+
            '&key=AIzaSyDk31YFxoBBRi15FKVX3-9rF-Vr8vpGfSQ'

    const response = await fetch(
        targetUrl)
    const data = await response.json()
    return (""+data.results[0].geometry.location.lat +" "+ data.results[0].geometry.location.lng)
}




async function upDate() {
    let data = {"person_name": document.getElementById('inputName').value,
        "person_surname":  document.getElementById('inputSurname').value,
        "person_postal_code":  document.getElementById('inputPostalCode').value,
        "person_region":  document.getElementById('inputRegion').value,
        "person_country":  document.getElementById('inputCountry').value,
        "person_adress":  document.getElementById('inputAdress').value,
        "person_loc": "point("+await getGps()+")",
        "person_bio":  document.getElementById('inputBio').value};
    console.log("[addProducts] data = " + JSON.stringify(data));
    try {

        //get json here
        let newProduct = await $.ajax({
            url: linkApi+"users/"+id,
            method: "PUT",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        alert(JSON.stringify(newProduct))

        sessionStorage.setItem("user_id",JSON.stringify(newProduct.person_id))
        window.location.href='../profile.html'

    }
    catch (err) {
        console.log(err);
        if (err.responseJSON) {
            alert(""+err.responseJSON.msg);
        } else {
            alert("Account Information updated") ;
        }
    }
}







async function getData(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = linkApi+'users/'+id

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

function removehash(a){

    let b=a.substring(a.indexOf('"')+1,a.length)
    b=b.substring(0,b.indexOf('"'))
    return b
}

window.onload = async function() {
    id = sessionStorage.getItem("user_id")
    document.getElementById("name1").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("name2").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("email1").innerText=removehash(sessionStorage.getItem("user_email"))


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
   window.location.href="../changePass.html"

}
