function vital_respRate(respRate)
{
    if(respRate<30 || respRate>95)
        {
            console.log("Patient has abnormal respRate");
            console.log("Attention required");
            return false;
        }
    else
    {
        console.log("Patient has normal respRate");
        return true;
    }
}

export default vital_respRate;