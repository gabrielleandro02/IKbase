angular.module("projeto").factory("usuarioAPI",function($http, config){

    let getUserByLogin = (usuario) => {
        return $http.post(config.baseURL+"/dbusuarioByLogin", usuario) 
    }
    
    let getUserById = (id)=>{
        return $http.post(config.baseURL+"/dbusuarioById", {id})
    }

    let cadastrar=(usuario)=>{
        return $http.post(config.baseURL+"/dbcadastroUsuario", usuario)
    }

    let getUsers=()=>{
        return $http.get(config.baseURL+"/dbgetUsuarios")    
    }

    return{
        getUserByLogin, getUserById, cadastrar, getUsers, cadastrar
    }
})