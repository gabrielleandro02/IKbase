angular.module('projeto').controller('usuarioCtrl', function($scope){

    $scope.setIdStorage=(id)=>{
        localStorage.setItem('idtopico', id)
    }
    if(localStorage.getItem('meuusuario')){
        $scope.id=localStorage.getItem('meuusuario')
    }
    

})