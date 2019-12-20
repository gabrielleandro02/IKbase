angular.module('projeto').controller('loginCtrl', function($scope, usuarioAPI){
	$scope.usuario={}

	$scope.logar = () => {
		const {email, senha} = $scope.usuario
		usuarioAPI.getUserByLogin({email, senha}).then((result) => {
			if(result.data.id){
				localStorage.setItem('meuusuario', result.data.id)
				window.location.replace("http://localhost:3000/")
			}else{
				window.alert('Usuario Inexistente')
			}
		}).catch((err) => {
			$scope.error='não foi possivel carregar os dados'
            $scope.error2=err
		})
	}


})