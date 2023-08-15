$(document).ready(function () {
  $(".kved-page-wrapper-content-second-step-trigger").click(function () {
    $(this)
      .next(".kved-page-wrapper-content-second-step-content")
      .toggleClass("mystyle-invisible");
  });
});
$(document).ready(function () {
  $(".kved-page-wrapper-content-third-step-trigger").click(function () {
    $(this)
      .next(".kved-page-wrapper-content-third-step-content")
      .toggleClass("mystyle-invisible");
  });
});

const input = document.querySelector("input");
const button = document.querySelector(".header-search-button");
const cancelBtn = document.querySelector(".header-search-close-button");
const section = document.querySelectorAll(".kved-container");
const kvedItem = document.querySelectorAll(
  ".kved-page-wrapper-content-third-step-content"
);
const sectionParent = document.querySelectorAll(
  ".kved-page-wrapper-content-second-step-trigger"
);
const kwedSection = document.querySelectorAll(
  ".kved-page-wrapper-content-second-step-content"
);

//////////???///////////
window.onload = function () {
  for (let i = 0; i < kvedItem.length; i++) {
    kvedItem[i].classList.add("mystyle-invisible");
  }
  for (let i = 0; i < kvedItem.length; i++) {
    kvedItem[i].children[0].classList.add("kved-page-wrapper-title");
  }
};
///////////////////////

////////////////Events///////////////
button.addEventListener("click", function (event) {
  event.preventDefault();
  const searchValue = input.value;
  searchByKvedNumber(searchValue);
});

cancelBtn.addEventListener("click", function () {
  input.value = "";
  cliarSearchValue();
});

input.addEventListener("input", (event) => {
  const searchParams = event.target.value;
  if (searchParams.length === 0) {
    cliarSearchValue();
    
  }

 
});

// input.addEventListener("input",
//   _.debounce(() => {
//     console.log('qweqw');
//   }, 3000) )

////////////////////////////////////////////

function searchByKvedText(searchParams) {
  console.log('qqqqqqq');
  
  const kvedTitles = document.querySelectorAll(".kved-page-wrapper-title");

  const kvedTitle = [...kvedTitles].filter((title) => {
    return title.textContent
      .toLocaleLowerCase()
      .includes(searchParams.toLocaleLowerCase());
  });
  console.log(kvedTitle);
  
}

function searchByKvedNumber(searchValue) {
  const search = [...section].find((item) => item.id === searchValue);

  if (search) {
    const childElements = search.children;
    const parentElement = search.parentNode.parentNode;

    section.forEach((item) => {
      item.classList.add("mystyle-invisible");
    });
    sectionParent.forEach((item) => {
      item.classList.add("mystyle-invisible");
    });

    search.classList.add("mystyle-visible");
    parentElement.classList.replace("mystyle-invisible", "mystyle-visible");
    childElements[1].classList.replace("mystyle-invisible", "mystyle-visible");
    childElements[0].classList.add("mystyle-invisible");
  } else {
    alert("Данный Квед не найден");
  }
}

function cliarSearchValue() {
  console.log("Cliar");

  for (let i = 0; i < section.length; i++) {
    const item = section[i].children;
    for (let i = 0; i < item.length; i++) {
      item[i].classList.replace("mystyle-visible", "mystyle-invisible");
    }
  }
  //////////???/////////
  for (let i = 0; i < section.length; i++) {
    const item = section[i].children;
    for (let i = 0; i < item.length; i++) {
      item[0].classList.remove("mystyle-invisible");
    }
  }
  //////////////////////////

  section.forEach((item) => {
    item.classList.remove("mystyle-invisible", "mystyle-visible");
  });
  sectionParent.forEach((item) => {
    item.classList.remove("mystyle-invisible", "mystyle-visible");
  });
  kwedSection.forEach((item) => {
    item.classList.replace("mystyle-visible", "mystyle-invisible");
  });
}
