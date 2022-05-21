
async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'

    const response = await fetch(
         targetUrl)
    const data = await response.json()
    return data

}



async function delet(id){
   await refresh(id)
    alert("User Deleted")
  window.location.reload()
}


async function refresh(id){
    const json = await getData()

    $.ajax({
        url: "https://cfg-api-ultimate.herokuapp.com/users/"+json[id].person_id,
        type: "Delete",
        dataType: 'json',
        success: function(response) {
            console.log(response);
            // window.location.replace("https//www.google.com")

        }
    });
    // await table()
}

// function myDeleteFunction() {
//     document.getElementById("myTable").deleteRow(0);
// }

async function table(){
    const json = await getData()

    var table = document.getElementById("UsersTable");
    for (let i = 0; i < json.length; i++) {
        var row = table.insertRow(1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4);
        cell1.innerHTML = ""+json[i].person_id
        cell2.innerHTML = "" + json[i].person_name
        cell3.innerHTML = ""+ json[i].person_email
        cell4.innerHTML = "" + json[i].person_bio
        cell5.innerHTML +='<td class=\"text-right\"><button type=\"button\" id="'+i+'" onClick="delet(this.id)" href="index.html" class=\"btn btn-danger\">Delete</button></td>'

    }
}

window.onload = async function() {
    await table()
}