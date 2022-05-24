
async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/cfg'

    const response = await fetch(
         targetUrl)
    const data = await response.json()
    return data
}






function removehash(a){

    let b=a.substring(a.indexOf('"')+1,a.length)
    b=b.substring(0,b.indexOf('"'))
    return b
}

window.onload = async function() {
    if(!sessionStorage.getItem("user_is_admin")){
        window.location.href='../dashboard/profile.html'
    }
    document.getElementById("name1").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("name2").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("email").innerText=removehash(sessionStorage.getItem("user_email"))

    const json = await getData()
    console.log(json[0])
    var table = document.getElementById("ContentTable");
    for (let i = 0; i < json.length; i++) {
        var row = table.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = "" + json[i].cfg_id
        cell2.innerHTML = ""+ json[i].cfg_name
        cell3.innerHTML = "" + json[i].cfg_description
        cell4.innerHTML = "" + json[i].cfg_date
        cell5.innerHTML = "" + json[i].cfg_person_id
        cell6.innerHTML = "" + json[i].cfg_software_id

        cell7.innerHTML +="<td class=\"text-right\"><button type=\"button\" class=\"btn btn-danger\">Delete</button></td>"

    }
}