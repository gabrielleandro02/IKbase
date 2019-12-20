angular.module('projeto').controller('usuarioCtrl', function($scope,  usuarioAPI, topicosAPI){
    $scope.topicos=[]
    $scope.usuario={}

    if(localStorage.getItem('meuusuario')){
        $scope.id=localStorage.getItem('meuusuario')
    }


    const getUsuario=()=>{
        usuarioAPI.getUserById($scope.id).then((result) => {
            $scope.usuario=result.data
            console.log($scope.usuario)
        }).catch((err) => {
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        });
    }

    const getComentarios=(id)=>{
        comentariosAPI.getComentariosByTopico(id).then((result) => {
            $scope.comentarios=result.data
            console.log($scope.comentarios)
        }).catch((err) => {
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        })
    }


    const getTopicosByUsuario=()=>{
        topicosAPI.topicosByUsuario($scope.id).then((result) => {
            $scope.topicos=result.data
            console.log(result.data)
        }).catch((err) => {
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        })
    }

    getTopicosByUsuario()
    getUsuario()


})