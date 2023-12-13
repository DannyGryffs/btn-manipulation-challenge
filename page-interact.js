console.log('js enterd the chat');

let button = document.querySelector('button');

document.getElementById('interact').addEventListener('click',() => {
    if(document.body.style.backgroundColor === 'pink'){
        document.body.style.backgroundColor = 'coral'
    }else{ 
        document.body.style.backgroundColor = 'pink'
    }
});

//when you hold a arrow key button down, it moves the key clicked 

// document.addEventListener('keypress', function(e) {
//     if (e.key === 40) {
//       alert('You pressed the down arrow key!');
//     }else if(e.key === 'u'){
//         alert('You pressed the u key!');
//     }
//   });
  


  document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        console.log('top')
        document.getElementById("interact").style.top = "10px";
      } else if (e.keyCode === 40) {
        document.getElementById("interact").style.top = "20px";
      } else if (e.keyCode === 37) {
        document.getElementById("interact").style.left = "10px";
      } else if (e.keyCode === 39) {
        document.getElementById("interact").style.left = "20px";
      }
  })



//   document.addEventListener('keydown', (e) => {
//     e = e || window.event;
//     if (e.keyCode === 38) {
//         alert('up arrow pressed')
//       } else if (e.keyCode === 40) {
//         alert('down arrow pressed')
//       } else if (e.keyCode === 37) {
//         alert('left arrow pressed')
//       } else if (e.keyCode === 39) {
//         alert('right arrow pressed')
//       }
//   })

// see if you can get a console.log () when you press a button



//absolute positioning.