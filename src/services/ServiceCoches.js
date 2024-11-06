import Global from "../Global";

export default class ServiceCoches {
    getCoches(){
            return new Promise(function(resolve){
                let coches = [];
                let request = "api/coches";
                let url = Global.urlApiCoches+request;
                fetch(url).then(response=>{
                    if (!response.ok) {
                        console.log("Not response"+response)
                    }
                    return response.json();
                }).then(data=>{
                    console.log(data)
                    coches = data
                    resolve(coches)
                })

            })
    }

    insertCoche(coche){
        return new Promise (()=>{
            let request ="api/coches/insertCoche"
            let url = Global.urlApiCoches+request;
            fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                } ,
                body: JSON.stringify(coche)  
            })
        })
            
    }

    updateCoche(coche){
        return new Promise (()=>{
            let request ="api/coches/insertCoche"
            let url = Global.urlApiCoches+request;
            fetch(url,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                } ,
                body: JSON.stringify(coche)  
            })
        })
            
    }
    }
