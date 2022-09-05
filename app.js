let scrolltext1 = "King James Only -";
let scrolltext2 = "Dispensational -";
let scrolltext3 = "Pre-Millenial -";
let scrolltext4 = "Waiting on Jesus Christ's return!";
let scrolltext5 = "Are you Ready?";
let scrolltext6 = "And as it is appointed unto men once to die, but after this the judgement Hebrew 9:27 KJV";
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 15000); // Change image every 15 seconds
    console.log(slides.length)

}
//let scrolltext = document.getElementsByClassName("roll_text").innerHTML;
//let tester = document.getElementsByClassName("test");
function scroll1() {
    let scrolltext = (scrolltext1);
    document.getElementById('roll_text').textContent = scrolltext;
    console.log(scrolltext);
}

function scroll2() {
    let scrolltext = (scrolltext1 + " " + scrolltext2);
    document.getElementById('roll_text').textContent = scrolltext;
    console.log(scrolltext);
}

function scroll3() {
    let scrolltext = (scrolltext1 + " " + scrolltext2 + " " + scrolltext3);
    document.getElementById('roll_text').textContent = scrolltext;
    console.log(scrolltext);
}

function scroll4() {
    let scrolltext = (scrolltext1 + " " + scrolltext2 + " " + scrolltext3 + " " + scrolltext4);
    document.getElementById('roll_text').textContent = scrolltext;
    console.log(scrolltext);
}

function scroll5() {
    let scrolltext = (scrolltext5);
    document.getElementById('roll_text_2').textContent = scrolltext;
    console.log(scrolltext);
}

function scroll6() {
    let scrolltext = (scrolltext6);
    document.getElementById('roll_text_3').textContent = scrolltext;
    console.log(scrolltext);
}

function scroll_a() {
    setTimeout(function() {
        setTimeout(scroll1())
    }, 1)

}

function scroll_b() {
    setTimeout(function() {
        setTimeout(scroll2())
    }, 2000)
}

function scroll_c() {
    setTimeout(function() {
        setTimeout(scroll3())
    }, 4000)
}

function scroll_d() {
    setTimeout(function() {
        setTimeout(scroll4())
    }, 6000)
}

function scroll_e() {
    setTimeout(function() {
        setTimeout(scroll5())
    }, 13000)
}

function scroll_f() {
    setTimeout(function() {
        setTimeout(scroll6())
    }, 9000)
}
scroll_a();
scroll_b();
scroll_c();
scroll_d();
scroll_e();
scroll_f();