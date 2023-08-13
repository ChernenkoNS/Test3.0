


// // const onButtonClick = () => {
// //   console.log('qweqw');

// // }
// const info = document.querySelector('.info')
// const section = document.querySelector('.section')


// // const a1 = document.getElementById("a1");
// // const a11 = document.getElementById("a11");

// // const b1 = document.getElementById("b1");
// // const b2 = document.getElementById("b2");


// a11.hidden = false;

// b11.hidden = false;

// function isHidden() {
//   a11.hidden = !a11.hidden;
// }

// function isHid() {
//   console.log('qweqw');
  
//   b11.hidden = !b11.hidden;
// }


// info.addEventListener('click', function(event) {

// if(event.target.closest('.a1')) {
//   isHidden()
// }
// })

// section.addEventListener('click', function(event) {

//   if(event.target.closest('.b1')) {
//     isHid()
//   }
//   })

// // b1.addEventListener('click', function() {
// //   b2.hidden = !b2.hidden;
// // })




// $(document).ready(function() {
//   $('.kved-page-wrapper-trigger').click(function() {
//     $(this).next('.kved-page-wrapper-content').toggle()
//   })
// })

$(document).ready(function() {
  $('.kved-page-wrapper-content-second-step-trigger').click(function() {
    $(this).next('.kved-page-wrapper-content-second-step-content').toggle()
  })
})


$(document).ready(function() {
  $('.kved-page-wrapper-content-third-step-trigger').click(function() {
    $(this).next('.kved-page-wrapper-content-third-step-content').toggle()
  })
})

$(document).ready(function() {
  $('.kved-page-wrapper-content-fourth-step-trigger').click(function() {
    $(this).next('.kved-page-wrapper-content-fourth-step-content').toggle()
  })
})




