const expect = require('chai').expect;

//var bpm_ref = require('./bpm.js');
//var spo2_ref = require('./spo2.js');
//var respRate_ref = require('./respRate.js');
const { vital_bpm } = require('./bpm.js');
const { vital_spo2 } = require('./spo2.js');
const { vital_respRate } = require('./respRate.js');

    function vitalsAreOk(bpm, spo2, respRate){
     return (vital_bpm(bpm) && vital_spo2(spo2) && vital_respRate(respRate));
    }
    
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log("Finished Checking");
