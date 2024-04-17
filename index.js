let aHome = document.querySelectorAll('#aHome');
let aAboutUs = document.querySelectorAll('#aAboutUs');
let aGetOffer = document.querySelectorAll('#aGetOffer');
let aContact = document.querySelectorAll('#aContact');
let pobarajPbutton = document.querySelector("#pobarajPbutton");
let kontaktButton = document.querySelector("#kontaktButton");
let logo = document.querySelector(".header").querySelector("a");

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    if(window.innerWidth <= 510 ){
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
       logo.className = "scrolledHeader";
    } else if (st < lastScrollTop) {
        logo.className = "unscrolledHeader";
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st;
    } // For Mobile or negative scrolling
 }, false);
 

aHome.forEach((el) => {
    el.addEventListener("click", () => {
        window.scroll(0,0);
    })
})

aAboutUs.forEach((el) => {
    el.addEventListener("click", () => {
        document.querySelector(".sec7").scrollIntoView({block:"center"});
        //window.scroll(0,document.body.scrollHeight - 890);
    })
})

aGetOffer.forEach((el) => {
    el.addEventListener("click", () => {
        document.querySelector("#pobarajP").scrollIntoView({block:"center"});
        //window.scroll(0,520);
    })
})

aContact.forEach((el) => {
    el.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({block:"center"});
        //window.scroll(0,2280);
    })
})

pobarajPbutton.addEventListener("click", () => {
    document.querySelector("#pobarajP").scrollIntoView({block:"center"});
    //window.scroll(0,520);
})

kontaktButton.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({block:"center"});
    //window.scroll(0,2280);
})