angular.module('projeto').controller('topicoCtrl', function($scope, topicosAPI, comentariosAPI){
    $scope.topico={}
    $scope.comentarios=[]
    $scope.comentario

    if(localStorage.getItem('idtopico')){
        $scope.idTopico=localStorage.getItem('idtopico')
    }
    if(localStorage.getItem('meuusuario')){
        $scope.id=localStorage.getItem('meuusuario')
    }

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

    $scope.inserirComentario=()=>{
        comentariosAPI.inserirComentario($scope.comentario, $scope.id, $scope.idTopico)
            .then(response => {
                window.location.replace("http://localhost:3000/topico")  
            })
    }

    if($scope.idTopico){
        getTopico($scope.idTopico)
        getComentarios($scope.idTopico)
    }
})