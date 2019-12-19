angular.module("projeto").factory("usuarioAPI",function($http, config){

    let getUserByLogin = (usuario) => {
        return $http.post(config.baseURL+"/dbusuarioByLogin", usuario) 
    }
    
    let getUserById=(id)=>{
        return $http.post(config.baseURL+"/dbusuarioById", id)
    }
    return{
        getUserByLogin, getUserById
    }
})