function vital_respRate(respRate){
    if(respRate<30 ){
           console.log("Patient has low respRate Attention is required");
            return false;
        }
    else if(respRate>95){
            console.log("Patient has high respRate Attention is required");
            return false;
        }
    
    else{
        console.log("Patient has normal respRate");
        return true;
    }
}


module.exports = {vital_respRate : vital_respRate};
