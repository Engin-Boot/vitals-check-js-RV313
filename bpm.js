const {vital_alert} = require('./Alert.js'); 
function vital_bpm(bpm){
    if(bpm<70){
            console.log("Patient has low bpm ");
            vital_alert();
            return false;
        }
    else if(bpm>150){
            console.log("Patient has high bpm")
            vital_alert();
            return false;
        }
    else{
            console.log("Patient has normal bpm");
            return true;
        }
} 


module.exports = {vital_bpm : vital_bpm};
