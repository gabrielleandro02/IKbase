angular.module("projeto").factory("comentariosAPI", ($http, config)=>{

    let getComentarioByTopico=(idTopico)=>{
        return $http.get(config.baseURL+"/dbcomentarios?idtopico"+idTopico) 
    }

    return{getComentarioByTopico}
})