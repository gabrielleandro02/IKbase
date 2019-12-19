angular.module("projeto").factory("topicosAPI", ($http, config)=>{

    let topicosPorData=()=>{
        return $http.get(config.baseURL+"/dbtopicos") 
    }

    let topicosPorTitulo=(titulo)=>{
        let title=titulo.replace(" ", "%20")
        return $http.post(config.baseURL+"/dbtopicos/"+title)
    }

    let topicosPorTag=(tecnologia)=>{
        let tech=tecnologia.replace(" ","%20")
        return $http.post(config.baseURL+"/dbtopicos?tag="+tech)
    }

    let topicoPorId=(id)=>{
        return $http.get(config.baseURL+"/dbtopicoById/"+id)
    }

    return{topicosPorData, topicosPorTitulo, topicosPorTag, topicoPorId}
})