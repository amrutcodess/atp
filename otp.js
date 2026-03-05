console.log("OTP sent successfully")
let i=10
console.log(i--)
const interval=setInterval(() => {
    console.log(i--)
    
    if(i==0){
        console.log("Resend?")
        clearInterval(interval)
    }
}, 1000);
