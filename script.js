const d = document,
$screenTitle = d.querySelector(".pantalla h2"),
$screenText = d.querySelector(".pantalla p"),
$btn= d.querySelector(".btn"),
$video= d.querySelector(".video"),
$zombieSong = d.querySelector(".zombie");

let selection = null;

d.addEventListener("click", e => {
  if(e.target === $zombieSong || e.target === d.querySelector(".zombie h3") || e.target === d.querySelector(".zombie p")){
    selection = "zombie"
    $screenTitle.textContent = "Zombie - The Cranberries";
    $screenText.textContent = '"Zombie" es una canción que no sólo rompe estereotipos de género en el rock, sino que tiene un trasfondo muy profundo acerca de la guerra civil irlandesa y el grupo terrorista IRA';
    $btn.classList.add("visible");
  }

   if(e.target === $btn) {
     window.open("https://drive.google.com/file/d/1B7t_xZ4PMewbw7LMHHQ4C48w7tRzzFhp/view?usp=sharing");
    }
});
