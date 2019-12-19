angular.module("projeto").controller("inicioCtrl", function($scope, topicosAPI, tagsAPI, usuarioAPI){
	$scope.topicos=[]
    $scope.tags=[]

    
    

    $scope.ordenarPor=(busca)=>{
        $scope.conteudo=busca
    }

    $scope.getIdTopico=(id)=>{
        localStorage.setItem('idtopico', id)
    }
   

    const topicosPorData=()=>{
        topicosAPI.topicosPorData().then((result) => {
            $scope.topicos=result.data
            console.log(result.data)
        }).catch((err) => {
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        });
    }

    const getTags=()=>{
        tagsAPI.getTags().then((result) => {
            $scope.tags=result.data
            console.log(result.data)
        }).catch((err) => {
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        })
    }

    const getUserById=()=>{
        usuarioAPI.getUserById($scope.id).then((result)=>{
            $scope.usuario=result.data
            console.log(result.data)
        }).catch((err)=>{
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        })
    }

    $scope.id=localStorage.getItem('meuusuario')
    $scope.usuario={}
    if($scope.id){
        getUserById()
    }

    console.log($scope.id)
    console.log($scope.tags)
    getTags()
    getUserById()
    //topicosPorData()
})