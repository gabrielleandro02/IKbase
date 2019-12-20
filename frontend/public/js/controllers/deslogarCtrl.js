angular.module("projeto").controller("deslogarCtrl", function($scope){
	
	if(localStorage.getItem('meuusuario')){
        $scope.id=localStorage.getItem('meuusuario')
	}
	
	$scope.deslogar=()=>{
		localStorage.removeItem('meuusuario')
    }		

    
})
