angular.module('projeto').factory('tagTopicoAPI', ($http,  config)=>{

    let getTagTopico=()=>{
        return $http.get(config.baseURL+"/dbtagTopico/")
    }

    return{getTagTopico}
})