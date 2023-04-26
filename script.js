
let basketIcon=document.querySelector(".basket_icon")
let headerFoot = document.querySelector('.slider')
let section2Container = document.querySelector(".section_2_container")
let section1Container=document.querySelector(".section_one_slider_container")
let section3CardContainer=document.querySelector(".section_3_card_container")
let section4SliderContainer=document.querySelector(".section_4_slider_container")

fetch("./api.json")
  .then(resp => resp.json())
  .then(data => {
    // console.log(data);
    data.forEach(x => {
      headerFoot.innerHTML += `
        
            
              // <div class="swiper-slide">
              // <div class='head_slider_container'>
              // <div class="test">
              // <p>${x.text}</p>
              // <button>${x.button}
              // </button>
              // </div>
              // <img src='${x.img}'></div>
              // </div>
           
              <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                <p>${x.text}</p>
              <button>${x.button}
              </button>
              </div>
              <img src='${x.img}'></div>
                </div>
                
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
         
        `
    })
  })

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

fetch("./cards.json")
    .then(resp => resp.json())
    .then(data => {
        // console.log(data);
        data.forEach(a => {
            // console.log(a);
            section2Container.innerHTML += `
        <div class='section_2_card'>
            <div class='bck_shd'>
              <div class="section_2_card_main">
                <img src="${a.img}">
                <button onclick="addToCart(${a.id})"> Indi al</button>
              </div>
            </div>
            <p>${a.text}</p>
        </div>
        `
        })
    })

function addToCart (id) {
  // console.log(id);
  let checkBasket=basket.find(data=>data.id===id)
  if (checkBasket) {
    checkBasket.count+=1
  } else {
    fetch ("./cards.json")
    .then (resp=>resp.json())
    .then (data=> 
      {
        // console.log(data);
    let checkPr=data.find(x=>x.id===id)
    checkPr.count=1
    basket.push(checkPr)
    })
  }
  localStorage.setItem("sebet",JSON.stringify(basket))
  console.log(basket);
}


basketIcon.addEventListener("click", ()=>{
  window.location.href='./cart.html'
})



fetch("./heyvanlarucunmehsullar.json")
    .then(resp => resp.json())
    .then(data => {
        // console.log(data);
        data.forEach(b => {
            // console.log(b);
            section1Container.innerHTML += `
          <div class="your-class">
            <div>
            
            <div>
              <img src="${b.img}">
            </div>
            ${b.text}

            
            </div>

           
          </div>
           
                  
            
           
        ` 
        })
    })



    fetch ("./trendmehsullar.json")
    .then (resp=>resp.json())
    .then (data=>{
      // console.log(data);
      data.forEach(c=>{
        section3CardContainer.innerHTML+=`
        <div class="section_3_card" data-name="${c.dataName}">
        <img src="${c.img}">
        <p>${c.text}</p>
        <b>${c.price} azn</b>
        <div class="section_3_card_buttons">
        <button onclick="addToCart2(${c.id})" class="section_3_card_button_1"> Indi al <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.47658 0H3.83821C3.86052 0 3.87948 0.0102163 3.90118 0.012459C3.94647 0.016994 3.98881 0.0243697 4.03125 0.0382241C4.06678 0.0497361 4.09885 0.0639393 4.13123 0.0811826C4.16848 0.101067 4.20208 0.122646 4.23456 0.149508C4.26445 0.174126 4.28981 0.20034 4.31451 0.229893C4.33998 0.260342 4.36173 0.29134 4.38104 0.326624C4.40102 0.362855 4.41505 0.400032 4.4273 0.4402C4.43395 0.461978 4.44834 0.479471 4.45261 0.502345L4.81028 2.41898L20.0943 3.29475C20.1529 3.29076 20.2045 3.29913 20.27 3.30511C20.6095 3.33541 20.8616 3.62725 20.8364 3.96055C20.8344 3.98567 20.8311 4.00999 20.8262 4.03391L19.7613 9.72875C19.5177 10.6118 18.7675 11.5033 17.6392 11.5033H6.50566L6.74404 12.7807H16.1123C17.2984 12.7807 18.2637 13.7272 18.2637 14.8902C18.2637 16.0535 17.2984 17 16.1123 17C14.9262 17 13.9609 16.0535 13.9609 14.8902C13.9609 14.5732 14.0377 14.2754 14.166 14.0055H8.41331C8.54159 14.2754 8.61839 14.5732 8.61839 14.8902C8.61839 16.0535 7.65308 17 6.46698 17C5.28088 17 4.31558 16.0535 4.31558 14.8902C4.31558 14.0632 4.80809 13.3531 5.51652 13.0075L3.31759 1.22477H1.47658C1.13177 1.22477 0.85202 0.950469 0.85202 0.612383C0.85202 0.274296 1.13177 0 1.47658 0ZM5.83012 7.88338L8.47679 7.92415L8.33264 6.4202L5.54173 6.33817L5.83012 7.88338ZM19.0524 6.73531L16.4076 6.65757L16.2346 8.04355L18.8007 8.08307L19.0524 6.73531ZM15.5721 6.633L12.665 6.54758V7.98858L15.3975 8.0307L15.5721 6.633ZM12.665 5.73032L15.6737 5.81878L15.866 4.27935L12.665 4.09586V5.73032ZM11.8323 4.04812L8.92579 3.88146L9.09291 5.62532L11.8323 5.70585V4.04812ZM12.665 8.80529V10.2785H15.1169L15.2958 8.84581L12.665 8.80529ZM11.8323 8.79249L9.39284 8.75496L9.53887 10.2785H11.8323V8.79249ZM11.8323 7.97578V6.52311L9.17144 6.44487L9.31447 7.937L11.8323 7.97578ZM5.38838 5.51643L8.25411 5.60065L8.08476 3.83327L5.04169 3.6588L5.38838 5.51643ZM16.6986 4.3271L16.5093 5.8433L19.2042 5.92254C19.3177 5.31763 19.4082 4.84753 19.4852 4.48682L16.6986 4.3271ZM18.5439 9.45884L18.6487 8.89744L16.1328 8.85872L15.9555 10.2785H17.6392C18.1743 10.2785 18.4723 9.71001 18.5439 9.45884ZM8.70241 10.2785L8.55516 8.74205L5.98296 8.70243L6.27709 10.2785H8.70241ZM15.21 14.8902C15.21 15.3781 15.6146 15.7752 16.1123 15.7752C16.61 15.7752 17.0146 15.3781 17.0146 14.8902C17.0146 14.4022 16.61 14.0055 16.1123 14.0055C15.6146 14.0055 15.21 14.4022 15.21 14.8902ZM6.46698 15.7752C6.96468 15.7752 7.36927 15.3781 7.36927 14.8902C7.36927 14.4022 6.96468 14.0055 6.46698 14.0055C5.96929 14.0055 5.5647 14.4022 5.5647 14.8902C5.5647 15.3781 5.96929 15.7752 6.46698 15.7752Z" fill="#1D1D1B"/>
        </svg>
        </button>
        <button class="section_3_card_button_2"><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3458 7.72466C19.1968 5.95615 19.1968 3.08052 17.3458 1.32638C15.4947 -0.442128 12.4849 -0.442128 10.6339 1.32638L9.73092 2.18907L8.82797 1.32638C6.97693 -0.442128 3.9671 -0.442128 2.1311 1.32638C1.22815 2.17469 0.746582 3.32495 0.746582 4.53271C0.746582 5.74047 1.2432 6.87635 2.1311 7.73904L9.73092 15L17.3458 7.72466ZM1.93546 4.53271C1.93546 3.62689 2.29664 2.77858 2.97386 2.14594C3.66612 1.48454 4.56906 1.15385 5.47201 1.15385C6.37496 1.15385 7.27791 1.48454 7.97017 2.14594L9.73092 3.8138L11.4917 2.13156C12.8762 0.808771 15.1185 0.808771 16.488 2.13156C17.1501 2.7642 17.5264 3.61251 17.5264 4.51833C17.5264 5.42416 17.1652 6.27247 16.488 6.9051L9.73092 13.3753L2.97386 6.91948C2.31169 6.27247 1.93546 5.42416 1.93546 4.53271Z" fill="black"/>
        </svg>
        </button></div>
        
        </div>
        `
      })

      

     


      let sec3Buttons =document.querySelector(".sec_3_buttons")
      let buttons=document.querySelectorAll(".sec_3_buttons button")
      let section3Card=document.querySelectorAll(".section_3_card")
  
  
      
      for (let i=0; i<buttons.length;i++) {
        buttons[i].addEventListener("click", ()=>{
          console.log(buttons[i]);
          sec3Buttons.querySelector(".active").classList.remove('active')
          buttons[i].classList.add('active')
  
          let getAtrBtns=buttons[i].getAttribute("data-name")
          for (let i=0;i<section3Card.length;i++) {
            let getAtrCards=section3Card[i].getAttribute("data-name")
            if (getAtrBtns===getAtrCards || getAtrBtns=="all")
             {
              section3Card[i].classList.add("show")
              section3Card[i].classList.remove("hide")
            } else {
              section3Card[i].classList.add("hide")
              section3Card[i].classList.remove("show")
            }
          }
        })
      }

    })

    fetch("services.json")
    .then (resp=>resp.json())
    .then (data=>{console.log(data);
    data.forEach(d=>{
      section4SliderContainer.innerHTML+= `
      
      <div class='section_4_card'>
      <img src='${d.icon}'
      <p>${d.text}</p>
      </div>

      `
    })
    
    })

  


    // var swiper = new Swiper(".mySwiper1", {
    //   loop: true,
    //   effect: "coverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });

   

    function addToCart2 (id) {
      let checkBasket2=basket.find(data=>data.id===id)
      if (checkBasket2) {console.log(checkBasket2);
        checkBasket2.count+=1
      } else {
        fetch ("./trendmehsullar.json")
        .then (resp=>resp.json())
        .then (data=> 
          {
            // console.log(data);
        let checkPr2=data.find(x=>x.id===id)
        checkPr2.count=1
        basket.push(checkPr2)
        })
      }
      localStorage.setItem("sebet",JSON.stringify(basket))
      console.log(basket);
    }
