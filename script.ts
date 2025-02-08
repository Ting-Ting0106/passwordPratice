//密碼檢驗程式


// var password = 123456;
// var enter_count = 0;
// var enter_limit = 5;
// var enter_remaining = enter_limit;
// var out_limit = false;

const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

var submitBtnLimit = false;
var enter_count = 0;
var enter_limit = 5;
var enter_remaining = enter_limit;
var passwordCurrent = `123456`;
const lockTime:number = 10;

passwordInput.addEventListener("input",() => {
    const password : string = passwordInput.value;
    if(password.length < 6){
        errorMessage.textContent = "密碼長度至少為6個字";
        submitBtn.disabled = true;
    }
    else{
        errorMessage.textContent = "";
        submitBtn.disabled = false;
    }
});

submitBtn.addEventListener("click",() => {
    const password : string = passwordInput.value;
    if(password === passwordCurrent){
        alert("登入成功");
        enter_count = 0;
        localStorage.setItem("authenticated","true");
        window.location.href = "home.html";
    }
    else{
        enter_count++;
        alert(`登入失敗，驗證次數剩餘 ${enter_remaining-enter_count}`);
    
        if(enter_count >= enter_limit){
            lockInput();
        }
    }


})

function lockInput(){
    submitBtn.disabled = true;
    passwordInput.disabled = true;

    let countdown = lockTime;
    errorMessage.textContent =`嘗試次數過多，請過${countdown}秒再試!`;

    const timer = setInterval(() => {
        countdown--;
        errorMessage.textContent =`嘗試次數過多，請過${countdown}秒再試!`;

        if(countdown <= 0){
            clearInterval(timer);
            unlockInput();
        }
    },1000)
}

function unlockInput(){
    enter_count = 0;
    passwordInput.disabled = false;
    submitBtn.disabled = false;
    errorMessage.textContent = "";
}


//export{};


// while(password != input && !out_limit){
//     enter_count++;
//     if(enter_count <= enter_limit){
//         input = (`請輸入密碼，驗證次數剩餘:${enter_remaining}`)
//         enter_remaining--;
//     }
//     else{
//         out_limit = true;
//     }
// }

// if(password==input){
//     alert("登入成功");
// }
// else{
//     alert("登入失敗");
// }
