const expect = require('chai').expect;

var bpm_ref = require("./bpm");
var spo2_ref = require("./spo2.js");
var respRate_ref = require("./respRate.js");

 function vitalsAreOk(bpm,spo2,respRate)
{
    var b1;
    var s1;
    var r1;
    b1 = bpm_ref.vital_bpm(bpm);
    s1 =spo2_ref.vital_spo2(spo2);
    r1 = respRate_ref.vital_respRate(respRate);
    if(b1 = s1 = r1 = true)
        return true;
    else 
        return false;
    
    
}

(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log("Finished Checking");