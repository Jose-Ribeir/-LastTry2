async function uploadFile() {
    let formData = new FormData();
    formData.append("fileupload", fileupload.files[0]);
    await fetch('https://cfg-api-ultimate.herokuapp.com/fileupload', {
        method: "POST",
        body: formData
    });
}