$(document).ready(function () {
    getData();
});

function getData() {
    $.ajax({
        method: 'GET',
        url: 'https://www.jasonbase.com/things/kRj2.json',
        success: function (res) {
            var html = "";
            for (var i = 0; i < res.data.length; i++) {
                html += "<div class=\"col-md-6\">" +
                    "<div class=\"menu-thumbnail\">" +
                    "<img src=\"" + res.data[i].image + "\">" +
                    "<h3>" + res.data[i].title + "</h3>" +
                    "<p>" + res.data[i].content + "</p>" +
                    "</div>" +
                    "<div class=\"menu-price\">" +
                    "<span>" + res.data[i].price + "</span>" +
                    "</div>" +
                    "</div>"
            }
            $('.menu .row').append(html);
        },
        error: function (err) {
            console.log(err);
        }
    });

    $.ajax({
        method: 'GET',
        url: 'https://www.jasonbase.com/things/PyRZ.json',
        success: function (res) {
            var html = "";
            for (var i = 0; i < res.data.length; i++) {
                html += "<div class=\"col-md-4\">" +
                    "<div class=\"gallery-thumbnail animation-2\">" +
                    "<div class=\"animation-wrapper\">" +
                    "<img src=\"" + res.data[i].image + "\">" +
                    "<div class=\"effect\">" +
                    "<a href=\"details.html?id=" + res.data[i].code + "\">" +
                    "<i class=\"fas fa-search\"></i>" +
                    "</a>" +
                    "</div>" +
                    "</div>" +
                    "<h3>" + res.data[i].title + "</h3>" +
                    "</div>" +
                    "</div>"
            }
            $('.gallery .row').append(html);
        },
        error: function (err) {
            console.log(err);
        }
    });
}