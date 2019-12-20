angular.module("projeto").factory("comentariosAPI", ($http, config)=>{

    let getComentariosByTopico=(id)=>{
        return $http.get(config.baseURL+"/dbcomentarios/"+id) 
    }

    let inserirComentario=(texto, idusuario, idtopico)=>{
        let comentario={texto, idusuario, idtopico}
        return $http.post(config.baseURL+"/dbinserirComentario", comentario)
    }

    return{getComentariosByTopico, inserirComentario}
})