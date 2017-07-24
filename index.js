$(document).ready(function () {
    var link = "http://158.108.165.223/data/CEEDney/"

    $('#light').click(function () {
        var open = "1-0-0-0-0-0";
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log(open)
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#air').click(function () {
        var open = "0-1-0-0-0-0";
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log(open)
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#door').click(function () {
        var open = "0-0-1-0-0-0"
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log(open)
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    setInterval(function () {
        $.ajax({
            url: link
        }).done(function (data) {
            var code = data.split("-")
            console.log($('#num').text(code[3]));
            console.log($('#temp').text(code[4]));
            console.log($('#inten').text(code[5]));
            if (code[0] == 1) {
                console.log($('#light2').text("on"));
            } else {
                console.log($('#light2').text("off"));
            }
            if (code[1] == 1) {
                console.log($('#air2').text("on"));
            } else {
                console.log($('#air2').text("off"));
            }
            if (code[2] == 1) {
                console.log($('#door2').text("open"));
            } else {
                console.log($('#door2').text("close"));
            }


            $('#temp').val(data);
        }).fail(function (data) {
            console.error("failed");
        });
    }, 1000 * 2);

});
