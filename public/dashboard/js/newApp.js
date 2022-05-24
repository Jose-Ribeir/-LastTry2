async function uploadApp() {
    const d = new Date();
    let field = document.getElementById("type")
    let isgame
    if(field.innerText==="Game"){
        isgame=true
    }

    if(field.innerText==="Application"){
        isgame=false
    }

    alert(""+isgame)
    let data = {"software_name":  document.getElementById('Softwarename').value,
        "software_is_game": isgame
        // "software_image":  document.getElementById('cfgfile').value
        };
    console.log("[addProducts] data = " + JSON.stringify(data));
    try {
        //get json here
        let newProduct = await $.ajax({
            url: "https://cfg-api-ultimate.herokuapp.com/software",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        //


    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
            alert(""+err.responseJSON.msg);
        } else {
            alert("cfg saved") ;
             window.location.href='../dashboard/cfgUpload.html'
        }
    }

}
