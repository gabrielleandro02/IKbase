angular.module('projeto').controller('topicoCtrl', function($scope, topicosAPI){
	$scope.topico={}
    $scope.idTopico=localStorage.getItem('idtopico')

	const getTopico=(id)=>{
        topicosAPI.topicoPorId(id).then((result)=>{
            $scope.topico=result.data
        }).catch((err)=>{
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        })

    }
    


    if($scope.idTopico){
        getTopico()
    }
})