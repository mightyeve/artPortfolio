

/*main menu**********************************************************************/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;


for(let i = 0; i < totalNavList; i++){
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function(){
   
      for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("back-section");
      }

      for(let j = 0; j < totalNavList; j++){
        if(navList[j].querySelector("a").classList.contains("active")){
          allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
      }

    this.classList.add("active");
    showSection(this);

    if(window.innerWidth < 1200){
      mainMenuSectionTogglerBtn();
    }

  })
  
}


function showSection(element){
  for(let i = 0; i < totalSection;i++){
    allSection[i].classList.remove("active");
  }
  const target=element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
/******************************************************************************** */



/*navigation button****************************************************************/
const navTogglerBtn = document.querySelector(".nav-toggler"),
      mainMenu = document.querySelector(".mainMenu");

navTogglerBtn.addEventListener("click",mainMenuSectionTogglerBtn);

function mainMenuSectionTogglerBtn(){
  mainMenu.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for(let i = 0; i < totalSection; i++){
    allSection[i].classList.toggle("open");
  }
}

/******************************************************************************** */










/* Traditional Section Filter ************************************/

const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;


for(let i = 0; i < totalFilterBtn; i++){

  filterBtns[i].addEventListener("click",function(){
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue=this.getAttribute("data-filter");
    for(let k = 0; k < totalPortfolioItem; k++){
      if(filterValue === portfolioItems[k].getAttribute("data-category")){
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
      else{
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }

      if(filterValue == "all"){
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
    
  })
}
/*********************************************************************************/


/*Traditional Section Lightbox*********************************************************/
const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter"),
      lightboxClose = lightbox.querySelector(".lightbox-close");

      
let itemIndex = 0;

for(let i = 0; i < totalPortfolioItem; i++){
  portfolioItems[i].addEventListener("click", function(){
    itemIndex = i;

    changeItem();
    
    toggleLightbox();
    
  })
}

function changeItem(){

  imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;

}

function toggleLightbox(){
  navTogglerBtn.style.visibility = "hidden";
  lightbox.classList.toggle("open");

}

lightbox.addEventListener("click", function(event){
  if(event.target === lightboxClose || event.target === lightbox){
    toggleLightbox();
    navTogglerBtn.style.visibility = "visible";
  }
})
/******************************************************************************** */



  







/*Digital Section filter**************************************************************/
const filterContainer2 = document.querySelector(".portfolio-filter2"),
      filterBtns2 = filterContainer2.children,
      totalFilterBtn2 = filterBtns2.length,
      portfolioItems2 = document.querySelectorAll(".portfolio-item2"),
      totalPortfolioItem2 = portfolioItems2.length;


for(let i = 0; i< totalFilterBtn2; i++){
  filterBtns2[i].addEventListener("click",function(){
    filterContainer2.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue2=this.getAttribute("data-filter");
    for(let k = 0; k < totalPortfolioItem2; k++){
      if(filterValue2 === portfolioItems2[k].getAttribute("data-category")){
        portfolioItems2[k].classList.remove("hide");
        portfolioItems2[k].classList.add("show");
      }
      else{
        portfolioItems2[k].classList.remove("show");
        portfolioItems2[k].classList.add("hide");
      }

      if(filterValue2 == "all"){
        portfolioItems2[k].classList.remove("hide");
        portfolioItems2[k].classList.add("show");
      }
    }
    
  })
}
/******************************************************************************** */



/*Digital Section Lightbox**********************************************************/
  
const lightbox2 = document.querySelector(".lightbox2"),
      lightboxImg2 = lightbox2.querySelector(".lightbox-img2"),
      lightboxText2 = lightbox2.querySelector(".caption-text2"),
      lightboxCounter2 = lightbox2.querySelector(".caption-counter2"),
      lightboxClose2 = lightbox2.querySelector(".lightbox-close2");


  
let itemIndex2 = 0;

for(let i = 0; i < totalPortfolioItem2; i++){
  portfolioItems2[i].addEventListener("click", function(){
    itemIndex2 = i;
    changeItem2();
    toggleLightbox2();
  })
}

function changeItem2(){
  imgSrc = portfolioItems2[itemIndex2].querySelector(".portfolio-img2 img").getAttribute("src");
  lightboxImg2.src = imgSrc;
  lightboxText2.innerHTML = portfolioItems2[itemIndex2].querySelector("h4").innerHTML;
}

function toggleLightbox2(){
  lightbox2.classList.toggle("open");
  navTogglerBtn.style.visibility = "hidden";
}

function nextItem2(){
  if(itemIndex2 === totalPortfolioItem2-1){
    itemIndex2 = 0;
  }
  else{
    itemIndex2++;
  }

  changeItem2();
}

function prevItem2(){
  if(itemIndex2 === 0){
    itemIndex2 = totalPortfolioItem2-1;
  }
  else{
    itemIndex2--;
  }

  changeItem2();
}

lightbox2.addEventListener("click", function(event){
  if(event.target === lightboxClose2 || event.target === lightbox2){
    toggleLightbox2();
    navTogglerBtn.style.visibility = "visible";
  }
})
/******************************************************************************** */

  









/*threed 3d section filter***********************************************************/
const filterContainer3 = document.querySelector(".portfolio-filter3"),
      filterBtns3 = filterContainer3.children,
      totalFilterBtn3 = filterBtns3.length,
      portfolioItems3 = document.querySelectorAll(".portfolio-item3"),
      totalPortfolioItem3 = portfolioItems3.length;


for(let i = 0; i < totalFilterBtn3; i++){
  filterBtns3[i].addEventListener("click",function(){
    filterContainer3.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue3 = this.getAttribute("data-filter");
    for(let k = 0; k < totalPortfolioItem3; k++){
      if(filterValue3 === portfolioItems3[k].getAttribute("data-category")){
        portfolioItems3[k].classList.remove("hide");
        portfolioItems3[k].classList.add("show");
      }
      else{
        portfolioItems3[k].classList.remove("show");
        portfolioItems3[k].classList.add("hide");
      }

      if(filterValue3 == "all"){
        portfolioItems3[k].classList.remove("hide");
        portfolioItems3[k].classList.add("show");
      }
    }
    
  })
}
/******************************************************************************** */




/*3d section lightbox******************************************************************/
const lightbox3 = document.querySelector(".lightbox3"),
      lightboxImg3 = lightbox3.querySelector(".lightbox-img3"),
      lightboxText3 = lightbox3.querySelector(".caption-text3"),
      lightboxCounter3 = lightbox3.querySelector(".caption-counter3"),
      lightboxClose3 = lightbox3.querySelector(".lightbox-close3");



let itemIndex3 = 0;
  for(let i = 0; i < totalPortfolioItem3; i++){
    portfolioItems3[i].addEventListener("click", function(){
    itemIndex3 = i;
    changeItem3();
    toggleLightbox3();
  })
}

function changeItem3(){
  imgSrc = portfolioItems3[itemIndex3].querySelector(".portfolio-img3 img").getAttribute("src");
  lightboxImg3.src = imgSrc;
  lightboxText3.innerHTML = portfolioItems3[itemIndex3].querySelector("h4").innerHTML;
}

function toggleLightbox3(){
  lightbox3.classList.toggle("open");
  navTogglerBtn.style.visibility = "hidden";
}

function nextItem3(){
  if(itemIndex3 === totalPortfolioItem3-1){
    itemIndex3 = 0;
  }
  else{
    itemIndex3++;
  }

  changeItem3();
}

function prevItem3(){
  if(itemIndex3 === 0){
    itemIndex3 = totalPortfolioItem3-1;
  }
  else{
    itemIndex3--;
  }

  changeItem3();
}

lightbox3.addEventListener("click", function(event){
  if(event.target === lightboxClose3 || event.target === lightbox3){
    toggleLightbox3();
    navTogglerBtn.style.visibility = "visible";
  }
})

/******************************************************************************** */





/*Concentration filter*************************************************************/
const filterContainer4 = document.querySelector(".portfolio-filter4"),
      filterBtns4 = filterContainer4.children,
      totalFilterBtn4 = filterBtns4.length,
      portfolioItems4 = document.querySelectorAll(".portfolio-item4"),
      totalPortfolioItem4 = portfolioItems4.length;


for(let i = 0; i < totalFilterBtn4; i++){
  filterBtns4[i].addEventListener("click",function(){
    filterContainer4.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue4=this.getAttribute("data-filter");
    for(let k = 0; k < totalPortfolioItem4; k++){
      if(filterValue4 === portfolioItems4[k].getAttribute("data-category")){
        portfolioItems4[k].classList.remove("hide");
        portfolioItems4[k].classList.add("show");
      }
      else{
        portfolioItems4[k].classList.remove("show");
        portfolioItems4[k].classList.add("hide");
      }

      if(filterValue4 == "all"){
        portfolioItems4[k].classList.remove("hide");
        portfolioItems4[k].classList.add("show");
      }
    }
    
  })
}
/******************************************************************************** */


/*Concentration section lightbox********************************************************/
const lightbox4 = document.querySelector(".lightbox4"),
      lightboxImg4 = lightbox4.querySelector(".lightbox-img4"),
      lightboxText4 = lightbox4.querySelector(".caption-text4"),
      lightboxCounter4 = lightbox4.querySelector(".caption-counter4"),
      lightboxClose4 = lightbox4.querySelector(".lightbox-close4");



let itemIndex4 = 0;
  for(let i = 0; i<totalPortfolioItem4;i++){
    portfolioItems4[i].addEventListener("click", function(){
    itemIndex4 = i;
    changeItem4();
    toggleLightbox4();
  })
}

function changeItem4(){
  imgSrc = portfolioItems4[itemIndex4].querySelector(".portfolio-img4 img").getAttribute("src");
  lightboxImg4.src = imgSrc;
  lightboxText4.innerHTML = portfolioItems4[itemIndex4].querySelector("h4").innerHTML;
}

function toggleLightbox4(){
  lightbox4.classList.toggle("open");
  navTogglerBtn.style.visibility = "hidden";
}

function nextItem4(){
  if(itemIndex4 === totalPortfolioItem4-1){
    itemIndex4 = 0;
  }
  else{
    itemIndex4++;
  }

  changeItem4();
}

function prevItem4(){
  if(itemIndex4 === 0){
    itemIndex4 = totalPortfolioItem4-1;
  }
  else{
    itemIndex4--;
  }

  changeItem4();
}

lightbox4.addEventListener("click", function(event){
  if(event.target === lightboxClose4 || event.target === lightbox4){
    toggleLightbox4();
    navTogglerBtn.style.visibility = "visible";
  }
})
/******************************************************************************** */

