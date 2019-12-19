angular.module('projeto').controller('cadastroCtrl', function ($scope) {
    $scope.usuario = {}

    $scope.confirmPassword = (senha1, senha2) => {
        if (senha1 === senha2) {
            return true
        } else {
            return false
        }
    }
})