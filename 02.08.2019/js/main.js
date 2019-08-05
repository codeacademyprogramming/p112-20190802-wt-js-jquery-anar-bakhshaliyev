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

    //Main//

    let divcontainer = $(`<div class = "container"></div>`);
    let divrow = $(`<div class = "row text-center"></div>`);
    let divrow1 = $(`<div class = "col-3 mb-4"></div>`);
    let divcard = $(`<div class = "card h-100"></div>`);
    let img = $(`<img class = "card-img-top" src = "http://placehold.it/500x325">`);
    let divbody = $(`<div class = "card-body"></div>`);
    let h4 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>`);
    let divcardfooter = $(`<div class = "card-footer"></div>`)
    let acardfooter = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);

    let divrow2 = $(`<div class = "col-3 mb-4"></div>`);
    let divcard1 = $(`<div class = "card h-100"></div>`);
    let img1 = $(`<img class = "card-img-top" src = "http://placehold.it/500x325">`);
    let divbody1 = $(`<div class = "card-body"></div>`);
    let h41 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody1 = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>`);
    let divcardfooter1 = $(`<div class = "card-footer"></div>`)
    let acardfooter1 = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);

    let divrow3 = $(`<div class = "col-3 mb-4"></div>`);
    let divcard2 = $(`<div class = "card h-100"></div>`);
    let img2 = $(`<img class = "card-img-top" src="http://placehold.it/500x325">`);
    let divbody2 = $(`<div class = "card-body"></div>`);
    let h42 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody2 = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>`);
    let divcardfooter2 = $(`<div class = "card-footer"></div>`)
    let acardfooter2 = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);

    let divrow4 = $(`<div class = "col-3 mb-4"></div>`);
    let divcard3 = $(`<div class = "card h-100"></div>`);
    let img3 = $(`<img class = "card-img-top" src = "http://placehold.it/500x325">`);
    let divbody3 = $(`<div class = "card-body"></div>`);
    let h43 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody3 = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>`);
    let divcardfooter3 = $(`<div class = "card-footer"></div>`)
    let acardfooter3 = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);
    

    $(main).append(divintro);
    $(divintro).append(h1, pElem, button);
    $(main).append(divcontainer);
    $(divcontainer).append(divrow);
    $(divrow).append(divrow1);
    $(divrow1).append(divcard);
    $(divcard).append(img, divbody);
    $(divbody).append(h4, pbody);
    $(divcard).append(divcardfooter);
    $(divcardfooter).append(acardfooter);
    $(divrow).append(divrow2);
    $(divrow2).append(divcard1);
    $(divcard1).append(img1, divbody1);
    $(divbody1).append(h41, pbody1);
    $(divcard1).append(divcardfooter1);
    $(divcardfooter1).append(acardfooter1);
    $(divrow).append(divrow3);
    $(divrow3).append(divcard2);
    $(divcard2).append(img2, divbody2);
    $(divbody2).append(h42, pbody2);
    $(divcard2).append(divcardfooter2);
    $(divcardfooter2).append(acardfooter2);
    $(divrow).append(divrow4);
    $(divrow4).append(divcard3);
    $(divcard3).append(img3, divbody3);
    $(divbody3).append(h43, pbody3);
    $(divcard3).append(divcardfooter3);
    $(divcardfooter3).append(acardfooter3)

    //Footer//

    let divfooter = $(`<div class = "container"></div>`);
    let pfooter = $(`<p class = "m-0 text-center text-white">Copyright © Your Website 2019</p>`)


    $("footer").append(divfooter);
    $(divfooter).append(pfooter);


})