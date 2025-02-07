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
const lockTime:number = 10*1000;

passwordInput.addEventListener("input",() => {
    const password : string = passwordInput.value;
    if(password.length < 6){
        errorMessage.textContent = "密碼長度至少為6個字";
        submitBtn.disabled = true;
    }
    else{
        errorMessage.textContent = "";
        submitBtn.disabled = false;
        if(password === passwordCurrent){
            submitBtnLimit = true;
        }
        else{
            submitBtnLimit = false;
        } 
    }
});

submitBtn.addEventListener("click",() => {
    enter_count++
    if(submitBtnLimit){
        alert("登入成功");
        enter_count = 0;
    }
    else{
        alert(`登入失敗，驗證次數剩餘 ${enter_remaining-enter_count}`);
    }

    if(enter_count >= enter_limit){
        lockInput();
    }
})

function lockInput(){
    submitBtn.disabled = true;
    passwordInput.disabled = true;
    errorMessage.textContent =`嘗試次數過多，請過10秒再試!`;

    setTimeout(() => {
        enter_count = 0;
        submitBtn.disabled = false;
        passwordInput.disabled = false;
        errorMessage.textContent =``;
    },lockTime)

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
