angular.module('projeto').controller('cadastroCtrl', function ($scope, usuarioAPI) {
    $scope.usuario = {}

    $scope.confirmPassword = (senha1, senha2) => {
        if (senha1 === senha2) {
            return true
        } else {
            return false
        }
    }

    $scope.cadastrar=()=>{
        usuarioAPI.cadastrar($scope.usuario).then(() => {
            localStorage.setItem('meuusuario', $scope.usuario.id)
        }).catch((err) => {
            $scope.error='nao foi possivel carregar os dados'
            $scope.error2=(err)
        })
    }
})