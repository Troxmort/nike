document.addEventListener("DOMContentLoaded",()=>{new Swiper(".mySwiper",{spaceBetween:30,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".swiper-products",{initialSlide:0,spaceBetween:0,breakpoints:{1e3:{slidesPerView:3,spaceBetween:50},800:{slidesPerView:2,spaceBetween:25},500:{slidesPerView:1}},navigation:{nextEl:".swiper-products__button--next",prevEl:".swiper-products__button--prev"}})}),document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("menu-burguer"),t=document.getElementById("menu-list"),n=document.getElementById("change-idiom"),i=document.getElementById("idiom-english"),c=document.getElementById("down"),o=document.getElementById("up");n.addEventListener("click",()=>{n.classList.toggle("active"),i.classList.toggle("hidden"),c.classList.toggle("hidden"),o.classList.toggle("hidden")}),e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active")})}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("close-modal"),t=document.querySelector("#list-products"),l=document.querySelector(".data-product"),n=document.querySelector(".overlay");function i(e){e.preventDefault(),n.classList.remove("active")}function c(e){e.preventDefault(),e.target.classList.contains("btn")&&(function(e){l.innerHTML="";const t=e.querySelector("img").src,n=e.querySelector("h4").textContent,i=e.querySelector(".kg").textContent,c=e.querySelector(".sieve").textContent,o=e.querySelector(".country").textContent,d=e.querySelector(".hts").textContent,s=document.createElement("div");s.classList.add("product"),s.innerHTML=`
            <div class="box-img-product">
                <img src="${t}" alt="" />
            </div>
            <div class="box-product">
                <div class="title-box-product">
                <p class="section-title section-title--alternative">${n}</p>
                </div>
                <div class="p-xy">
                    <p>${i}</p>
                    <p>${c}</p>
                    <p class='country'>${o}</p>
                    <p>${d}</p>
                </div>
            </div>
        `,l.appendChild(s)}(e.target.parentElement.parentElement.parentElement),n.classList.add("active"))}t.addEventListener("click",c),e.addEventListener("click",i)}),document.addEventListener("DOMContentLoaded",()=>{const e=new Swiper(".sliderSection",{loop:!0,speed:400,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}});e()});