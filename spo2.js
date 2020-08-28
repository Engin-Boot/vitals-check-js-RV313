const {vital_alert} = require('./Alert.js'); 
function vital_spo2(spo2){
    if(spo2<90){
            console.log("Patient has abnormal spo2 ");
            vital_alert();
            return false;
        }
    else{
            console.log("Patient has normal spo2");
            return true;
        }
}

module.exports = {vital_spo2 : vital_spo2};
