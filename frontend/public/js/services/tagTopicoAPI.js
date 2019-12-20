angular.module('projeto').factory('tagTopicoAPI', function($http,  config){

    let getTagTopico=()=>{
        return $http.get(config.baseURL+"/dbtagTopico/")
    }

    return{getTagTopico}
})