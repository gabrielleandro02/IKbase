angular.module('projeto').controller('topicoCtrl', function($scope, topicosAPI, comentariosAPI){
    $scope.topico={}
    $scope.comentarios=[]
    $scope.idTopico=localStorage.getItem('idtopico')

	const getTopico=(id)=>{
        topicosAPI.topicoPorId(id).then((result)=>{
            $scope.topico=result.data
            console.log($scope.topico)
        }).catch((err)=>{
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        })

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


    if($scope.idTopico){
        getTopico($scope.idTopico)
        getComentarios($scope.idTopico)
    }
})