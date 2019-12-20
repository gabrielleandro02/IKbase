
function esconde_topicos(){
  var topico = document.getElementById('topicos')
  var form = document.getElementById('formeditar')
  var select = document.getElementById('tags')
  var competencia = document.getElementById('competencias')
    if(form.style.display ==="none"){
      topico.style.display = "none"
      form.style.display = "block"
      select.style.display = "block"
      competencia.style.display = "none"
    }else
    if (topico.style.display === "none") {
        topico.style.display = "block"
        form.style.display = "none"
        competencia.style.display = "none"
      } else {
        topico.style.display = "none"
        form.style.display = "block"
        select.style.display = "block"
        competencia.style.display = "none"
      }
}

function mostra_skills(){
  var topico = document.getElementById('topicos')
  var form = document.getElementById('formeditar')
  var select = document.getElementById('tags')
  var competencia = document.getElementById('competencias')
  var sobre = document.getElementById('sobre')
  var skills = document.getElementById('skills')
  if(competencia.style.display === "none"){
    sobre.style.position = "relative";
    skills.style.marginLeft= "0%"
    competencia.style.display = "block"
    topico.style.display = "none"
    form.style.display = "none"
    select.style.display = "none"
  }else{
    sobre.style.position = "fixed";
    competencia.style.display = "none"
    topico.style.display = "block"
    form.style.display = "none"
    select.style.display = "none"
    skills.style.marginLeft= "21%"
  }
}