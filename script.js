$(document).ready(function () {
  $(".kved-page-wrapper-content-second-step-trigger").click(function () {
    $(this).next(".kved-page-wrapper-content-second-step-content").toggle();
  });
});

$(document).ready(function () {
  $(".kved-page-wrapper-content-third-step-trigger").click(function () {
    $(this).next(".kved-page-wrapper-content-third-step-content").toggle();
  });
});

$(document).ready(function () {
  $(".kved-page-wrapper-content-fourth-step-trigger").click(function () {
    $(this).next(".kved-page-wrapper-content-fourth-step-content").toggle();
  });
});





const input = document.querySelector('input');
const button = document.querySelector(".header-search-button");
const closBtn = document.querySelector(".header-search-close-button")
const section = document.querySelectorAll(".kved-container");
const sectionParent = document.querySelectorAll(
  ".kved-page-wrapper-content-second-step-trigger"
);
const qweqwe = document.querySelectorAll(
  ".kved-page-wrapper-content-second-step-content"
);



button.addEventListener("click", function (event) {
  event.preventDefault();
  const searchValue = input.value;
  searchParams(searchValue);
});

closBtn.addEventListener("click", function() {
  input.value = ''
  cliarSearchValue() 
});



function searchParams(searchValue) {
  
  const search = [...section].find((item) => item.id === searchValue);

  if (search) {
    section.forEach(item => {item.classList.add('mystyle-invisible')})
    sectionParent.forEach(item => {item.classList.add('mystyle-invisible')})

    const childElements = search.children;
    const parentElement = search.parentNode.parentNode;
    
    search.classList.add("mystyle-visible");
    parentElement.classList.add("mystyle-visible");
    for (let i = 0; i < childElements.length; i++) {
      childElements[i].classList.add("mystyle-visible");
    }
  } else {
    alert("Данный Квед не найден");
  }
}

function cliarSearchValue()  {
  console.log('Cliar');
  
  section.forEach(item => {item.classList.remove('mystyle-invisible', 'mystyle-visible')})
  sectionParent.forEach(item => {item.classList.remove('mystyle-invisible')})
  qweqwe.forEach(item => {item.classList.remove('mystyle-visible')})

}

input.addEventListener('input', event => {
  console.log(event.target.value);
  if(event.target.value.length === 0) {
    cliarSearchValue() 
  }
  
})



