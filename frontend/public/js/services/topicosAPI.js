angular.module("projeto").factory("topicosAPI", ($http, config)=>{

    let topicosPorData=()=>{
        return $http.get(config.baseURL+"/dbtopicos") 
    }

    let topicoPorId=(id)=>{
        return $http.get(config.baseURL+"/dbtopicoById/"+id)
    }

    let cadastrarTopico=(topico)=>{
        return $http.post(config.baseURL+"/dbcadastroTopico/", topico)
    }

    return{topicosPorData, topicoPorId, cadastrarTopico}
})