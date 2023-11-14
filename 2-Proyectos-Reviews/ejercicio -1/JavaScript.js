const reviews = [
{
  id: 1,
  location: "programmer job",
  Specifications: "programmer job",
  img: "./Oficina-1.jpg",
  tex: "",
},

{
  id: 2,
  location: "programmer job",
  Specifications: "programmer job",
  img: "./Oficina-2.jpg",
  tex: "",
},

{
  id: 3,
  location: "programmer job",
  Specifications: "programmer job",
  img: "./Oficina-3.jpg",
  tex: "",
},

{
  id: 4,
  location: "programmer job",
  Specifications: "programmer job",
  img: "./Oficina-4.jpg",
  tex: "",
},

];
const img = document.getElementById("Oficina-1.jpg");
const location = document.getElementById("location");
const Specifications = document.getElementById("Specifications");
const info = document.getElementById("info");

const prevBtn = document.querySelector("prev-btn");
const nexBtn = document.querySelector("nexBtn");
const randomBtn = document.querySelector("randomBtn");

let currentItem = 0;

window.addEventListener("DOMcontenLoaded",function(){
  showOficina1[currentItem];
  
});

function showOficina1(Oficina1){
  const item = reviews[Oficina1];
  img.src = item.img;
  location.textContent = item.programmersoffice;
  Specifications.textContent =item.programmerjob;
  info.textContent = item.tex;
}

nexBtn.addEventListener("clik",function(){
  currentItem++
  if(currentItem >reviews.length-1){
    currentItem = 0;
  }
  showOficina1(currentItem);
});