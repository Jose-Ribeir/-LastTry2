async function uploadFile() {
    let formData = new FormData();
    formData.append("fileupload", fileupload.files[0]);
    await fetch('https://cfg-api-ultimate.herokuapp.com/fileupload', {
        method: "POST",
        body: formData
    });
}

$(document).ready(function (e) {
    $("#form").on('submit', (function (e) {
        e.preventDefault();

        $.ajax({
            url: "https://cfg-api-ultimate.herokuapp.com/fileupload",
            type: "POST",
            data: new FormData(this),
            dataType: 'json',
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                console.log(data);
            },
            error: function (e) {
                console.log(e);
            }
        });
    }));
});