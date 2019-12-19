
function esconde_topicos(){
  var topico = document.getElementById('topicos')
  var form = document.getElementById('editar-formulario')
  var select = document.getElementById('tags')
  var competencias = document.getElementById('competencias')
  var sobre = document.getElementById('sobre')

    if (topico.style.display === "none") {
        topico.style.display = "block"
        competencias.style.display = "block"
        form.style.display = "none"
      } else {
        topico.style.display = "none"
        competencias.style.display = "none"
        form.style.display = "block"
        select.style.display = "block"
      }
}
