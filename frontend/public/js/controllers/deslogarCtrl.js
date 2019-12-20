angular.module("projeto").controller("deslogarCtrl", function($scope){
	
	$scope.deslogar=()=>{
		localStorage.removeItem('meuusuario')
    }		

    
})
