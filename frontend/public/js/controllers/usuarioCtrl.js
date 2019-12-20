angular.module('projeto').controller('usuarioCtrl', function($scope){

    if(localStorage.getItem('meuusuario')){
        $scope.id=localStorage.getItem('meuusuario')
    }
    

})