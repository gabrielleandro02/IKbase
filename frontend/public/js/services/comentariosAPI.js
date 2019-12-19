angular.module("projeto").factory("comentariosAPI", ($http, config)=>{

    let getComentariosByTopico=(id)=>{
        return $http.get(config.baseURL+"/dbcomentarios/"+id) 
    }

    return{getComentariosByTopico}
})