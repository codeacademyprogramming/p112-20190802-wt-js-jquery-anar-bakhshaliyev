$(document).ready(function () {
    let header = $("<header></header>");
    let main = $("<main></main>");
    let footer = $(`<footer class = "bg-dark py-5" ></footer>`);

    //Header//

    let nav = $(`<nav class = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"></nav>`);
    let divcont = $("<div></div>");
    let divnavleft = $("<div></div>");
    let divnavright = $("<div></div>");
    let h5 = $("<h5></h5>");
    let alogo = $("<a></a>");
    let ul = $(`<ul class = "navbar-nav ml-auto"></ul>`)
    let lihome = $(`<li class="nav-item"><a href = "#" class = "nav-link">Home</a></li>`);
    let liabout = $(`<li class="nav-item"><a href = "#" class = "nav-link">About</a></li>`);
    let liservices = $(`<li class="nav-item"><a href = "#" class = "nav-link">Services</a></li>`);
    let licontact = $(`<li class="nav-item"><a href = "#" class = "nav-link">Contact</a></li>`);
    let divintro = $(`<div class = "container jumbotron"></div>`);
    $(divintro).css("margin-top", "85px")
    let h1 = (`<h1 class = "display-3">A Warm Welcome!</h1>`);
    let pElem = $(`<p class = "text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>`)
    let button = $(`<button class = "btn btn-primary btn-lg mb-4">Call to action!</button>`);


    $(divcont).addClass("container d-flex justify-content-between")
    $(divnavleft).attr("id", "divleft");
    $(divnavright).attr("id", "divright");
    $("body").append(header, main, footer);
    $("header").append(nav);
    $("nav").append(divcont);
    $("div").append(divnavleft, divnavright);
    $("#divleft").append(h5);
    $(h5).append(alogo);
    $(alogo).text("Start Bootstrap");
    $(alogo).attr("href", "#");
    $(alogo).addClass("navbar-brand");
    $("#divright").append(ul);
    $(ul).append(lihome, liabout, liservices, licontact);

    //Main Part//

    
})