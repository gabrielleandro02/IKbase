angular.module("projeto").factory("tagsAPI", ($http, config)=>{

    let getTags=()=>{
        return $http.get(config.baseURL+"/dbtags") 
    }

    return{getTags}
})