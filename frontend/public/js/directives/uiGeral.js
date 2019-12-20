angular.module("projeto").directive("uiHeader", function() {
  return {
    template: `
        <header ng-controller="deslogarCtrl">
        <nav>
            <div class="logo">
                <img src="/img/logo.png">
            </div>
            <ul class="nav-links" style="width: 30%; margin-top: 1%">
                <li style="list-style-position:inside; border: 3px solid yellow; padding: 10px; -moz-border-radius: 30%; -webkit-border-radius: 30%;"><a href="http://localhost:3000/">Inicio</a></li>
                <li style="list-style-position:inside; border: 3px solid yellow; padding: 10px; -moz-border-radius: 30%; -webkit-border-radius: 30%;"><a href="http://localhost:3000/sobre">Sobre</a></li>
                <li style="list-style-position:inside; border: 3px solid yellow; padding: 10px; -moz-border-radius: 30%; -webkit-border-radius: 30%;"><a href="http://localhost:3000/ajuda">Ajuda</a></li>
            </ul>
            <ul class="nav-links" style="width: 25%; margin-top: 1%;">
                <li style="list-style-position:inside; border: 3px solid yellow; padding: 10px; -moz-border-radius: 30%; -webkit-border-radius: 30%;" ng-show="id"><a href="http://localhost:3000/usuario">Usuario</a></li>
                <li style="list-style-position:inside; border: 3px solid yellow; padding: 10px; -moz-border-radius: 30%; -webkit-border-radius: 30%;" ng-show="id"><a href="http://localhost:3000/" ng-click="deslogar()">Deslogar</a></li>
                <li style="list-style-position:inside; border: 3px solid yellow; padding: 10px; -moz-border-radius: 30%; -webkit-border-radius: 30%;" ng-show="!id"><a href="http://localhost:3000/login">Login</a></li>
                <li style="list-style-position:inside; border: 3px solid yellow; padding: 10px; -moz-border-radius: 30%; -webkit-border-radius: 30%;" ng-show="!id"><a href="http://localhost:3000/cadastro">Cadastro</a></li>
            </ul>
        </nav>
        </header>
        `,
    replace: true
  }
})

angular.module("projeto").directive("uiFooter", function() {
  return {
    template: `
        <footer>
        <div class="footer-div-image"> 
        </div>
        <div class="footer-div-rest">
            <div class="footer-div-icons">
                <ul>
                    <li><a href="https://pt-br.facebook.com/KbaseItSolutions/"><img style="width: 3%; heigth: 3%;" src="/img/Facebook.png" alt=""></a></li>
                    <li><a href="https://www.instagram.com/kbasesoftwares/"><img style="width: 3%; heigth: 3%; margin-left: 1%" src="/img/Instagram.png" alt=""></ahref="http:"></li>
                    <li><a href="https://www.linkedin.com/company/kbasesoftwares"><img style="width: 3%; heigth: 3%; margin-left: 1%" src="/img/LinkedIn.png" alt=""></a></li>
                    <li><a href="https://github.com/kbase"><img style="width: 4%; heigth: 4%; margin-left: 0.5%" src="/img/icon.png" alt=""></a></li>
                </ul>
            </div>

            <div class="footer-div-txt">
                © Copyright 2019-Infinito Copyright.com.br - All Rights Reserved - Grupão da Tarde 
            </div>
           

        </div>
        </footer>
        `,
    replace: true
  }
})
