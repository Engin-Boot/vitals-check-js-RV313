function vital_spo2(spo2)
{
    if(spo2<90)
        {
            console.log("Patient has abnormal spo2");
            console.log("Attention required");
            return false;
        }
    else
    {
        console.log("Patient has normal spo2");
        return true;
    }
}

export default vital_spo2;
