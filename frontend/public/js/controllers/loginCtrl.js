angular.module('projeto').controller('loginCtrl', function($scope, usuarioAPI){
	$scope.usuario={}

	$scope.logar = () => {
		const {email, senha} = $scope.usuario
		usuarioAPI.getUserByLogin({email, senha}).then((result) => {
			localStorage.setItem('meuusuario', result.data.id)
		}).catch((err) => {
			$scope.error='não foi possivel carregar os dados'
            $scope.error2=err
		})
	}


})