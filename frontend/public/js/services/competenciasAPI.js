angular.module("projeto").factory("competenciasAPI", ($http, config)=>{

    let getCompetencias=()=>{
        return $http.get(config.baseURL+"/dbcompetencias") 
    }

    return{getCompetencias}
})