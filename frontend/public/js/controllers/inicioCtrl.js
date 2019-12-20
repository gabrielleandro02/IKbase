angular.module("projeto").controller("inicioCtrl", function($scope, topicosAPI, tagsAPI, tagTopicoAPI){
    $scope.topicos=[]
    $scope.tags=[]
    $scope.tag_topico=[]



    $scope.ordenarPor=(busca)=>{
        $scope.conteudo=busca
    }

    $scope.setIdStorage=(id)=>{
        localStorage.setItem('idtopico', id)
    }
    
    if(localStorage.getItem('meuusuario')){
        $scope.id=localStorage.getItem('meuusuario')
    }

    $scope.cadastrarTopico=()=>{
        $scope.topico["idUsuario"]=$scope.id
        console.log($scope.topico)
        topicosAPI.cadastrarTopico($scope.topico)
        topicosPorData()
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

    const getTagTopico=()=>{
        tagTopicoAPI.getTagTopico().then((result) => {
            $scope.tag_topico=result.data
            console.log(result.data)
        }).catch((err) => {
            $scope.error='não foi possivel carregar os dados'
            $scope.error2=err
        })
    }

    


    
      


    getTags()
    topicosPorData()
    getTagTopico()
    console.log($scope.id)

    
    
})