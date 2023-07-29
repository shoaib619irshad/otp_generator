function otpGenerate(){

    let otpShow=document.getElementById("otp");
    let digits=[0,1,2,3,4,5,6,7,8,9];
    let otp="";

    let form=document.forms[0];
    let limit=(form.elements.limits.value);

    for(let i=1; i<=limit; i++){
        otp +=digits[Math.floor(Math.random()*10)];

    }

    otpShow.innerHTML="<span></span>";


    setTimeout(()=>{
        otpShow.innerHTML=otp;
    },1000);
}