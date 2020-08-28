function vital_bpm(bpm){
    if(bpm<70 || bpm>150){
            console.log("Patient has abnormal bpm");
            console.log("Attention required");
            return false;
        }
    else{
        console.log("Patient has normal bpm");
        return true;
    }
} 


module.exports = {vital_bpm : vital_bpm};
