angular.module("projeto").filter("name", function(){
    return(input)=>{
        let palavras=input.split(' ')
        let listaNomes=palavras.map((palavra)=>{
            if(palavra.length<4){
                return palavra.toLowerCase()
            }else{
                return palavra.charAt(0).toUpperCase()+palavra.substring(1).toLowerCase()
            }
        })
        return listaNomes.join(' ')
    }
})

