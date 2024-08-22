const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const review_text=document.getElementById("review-text")
const rev_imgs=document.querySelectorAll(".rev-img")
menu.addEventListener('click', () => {
    nav.style.top="100%"
})
menu.addEventListener('dblclick', () => {
    nav.style.top="-5000%"
})
function reviews() {
    
    for (let i = 0; i < rev_imgs.length; i++) {
        let content = [
          {
            name: "David Dowsy",
            compant: "From Globex",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi corporis a! Id, etDolores eligendi corporis a! Id, et ",
          },
          {
            name: "Martin Jack",
            compant: "From Hooli",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi corporis a! Id, etDolores eligendi corporis a! Id, et ",
          },
          {
            name: "Jane Doris",
            compant: "From Acm",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi corporis a! Id, etDolores eligendi corporis a! Id, et ",
          },
        ];
        rev_imgs[i].addEventListener('click', () => { 
    review_text.innerHTML = `  <div class="review-text" id="review-text">
    <h3>${content[i].name}</h3>
    <span>${content[i].compant}</span>
    <q>${content[i].p}</q>
                </div>`;
        })
        
    }
}
reviews()
window.onscroll = function () {
  scrollFunction();
};
let mybutton=document.getElementById("myBtn")
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const change=document.getElementById("change");
const btn = document.getElementById("iconChange");
const color=document.getElementById("color");
btn.addEventListener("click",()=> {
  change.classList.toggle("d-none")
})
color.addEventListener("input", () => {
  document.querySelector("header").style.backgroundColor = color.value
  document.querySelector("footer").style.backgroundColor = color.value
  mybutton.style.backgroundColor = color.value;
  btn.style.backgroundColor = color.value
 })