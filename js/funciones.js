$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 540){
            $('.barradenavegacion').addClass("barrapegada");
        }else{
            $('.barradenavegacion').removeClass("barrapegada");
            }
    })
});
    //Funcion para que se aparezca el menu al ser responsivo//
    $('.menu-btn').click(function(){
        $('.barradenavegacion .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
});

const skill = document.getElementById('habilidades');

const progreso = document.querySelectorAll('.skill-per');

function showProgress(){
  progreso.forEach(progreso => {
    const value = progreso.dataset.progress;
    progreso.style.opacity = 1; 
    progreso.style.width = `${value}%`;
  });
}
function hideProgress(){
  progreso.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener('scroll',() => {
  const sectionPos = skill.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;
  
  if(sectionPos < screenPos){
    showProgress();
  }
  else{
    hideProgress();
  }
});
