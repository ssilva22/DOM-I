const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};




// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ct= document.querySelector("#cta-img");
ct.setAttribute('src','img/header-img.png');

let nav1=document.querySelector("#nav-item-1");
nav1.textContent= "Services";

let nav2=document.querySelector("#nav-item-2");
nav2.textContent= "Product";

let nav3=document.querySelector("#nav-item-3");
nav3.textContent= "Vision";

let nav4=document.querySelector("#nav-item-4");
nav4.textContent= "Features";

let nav5=document.querySelector("#nav-item-5");
nav5.textContent= "About";

let nav6=document.querySelector("#nav-item-6");
nav6.textContent= "Contact";

let title= document.querySelector('.cta-text');
title.innerHTML= "DOM<br> Is<br> Awesome<br>  <button>Get Started</button>";

let featsH4= document.querySelector('.main-content .text-content-1 h4');
featsH4.textContent=siteContent["main-content"]["features-h4"];

let featsContent= document.querySelector('.main-content .text-content-1 p');
featsContent.textContent=siteContent["main-content"]["features-content"];

let aboutH4=document.querySelector('.main-content .text-content-2 h4 ');
aboutH4.textContent=siteContent["main-content"]["about-h4"];

let aboutContent=document.querySelector('.main-content .text-content-2 p');
aboutContent.textContent=siteContent["main-content"]["about-content"];

let mainImg=document.querySelector('.main-content .middle-img');
mainImg.setAttribute('src',siteContent["main-content"]['middle-img-src']);

let servicesH4=document.querySelector('.bottom-content .text-content-3 h4');
servicesH4.textContent=siteContent["main-content"]["services-h4"];

let servicesContent=document.querySelector(' .bottom-content .text-content-3 p');
servicesContent.textContent= siteContent["main-content"]["services-content"];


let  productH4=document.querySelector('.bottom-content .text-content-4 h4');
productH4.textContent= siteContent["main-content"]['product-h4'];

let productContent=document.querySelector('.bottom-content .text-content-4 p');
productContent.textContent=siteContent["main-content"]["product-content"];

let visionH4=document.querySelector('.bottom-content .text-content-5 h4');
visionH4.textContent= siteContent['main-content']['vision-h4'];

let visionContent=document.querySelector('.bottom-content .text-content-5 p')
visionContent.textContent=siteContent['main-content']['vision-content'];

let contactTitle=document.querySelector('.contact h4');
contactTitle.textContent=siteContent['contact']['contact-h4'];

let contactContent=document.querySelector('.contact p');
contactContent.innerHTML="123 Way Street<br>Somewhere,USA<br><br>1 (888) 888-8888<br><br>sales@greatidea.io"

let copyright=document.querySelector('footer');
copyright.textContent=siteContent['footer']['copyright'];
/*
       <section class="contact">

            <h4>Contact</h4>

            <p>123 Way 456 Street<br>
                Somewhere, USA</p>

            <p>1 (888) 888-8888</p>

            <p>sales@greatidea.io</p>

        </section>

        <footer>
            <p>Copyright Great Idea! 2018</p>
        </footer>

    </div><!-- container ends -->
</body>

*/








