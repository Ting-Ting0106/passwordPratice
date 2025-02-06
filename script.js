//密碼檢驗程式
// var password = 123456;
// var enter_count = 0;
// var enter_limit = 5;
// var enter_remaining = enter_limit;
// var out_limit = false;
var passwordInput = document.getElementById("password");
var errorMessage = document.getElementById("error-message");
var submitBtn = document.getElementById("submit-btn");
var submitBtnLimit = false;
var enter_count = 0;
var enter_limit = 5;
var enter_remaining = enter_limit;
var passwordCurrent = "123456";
passwordInput.addEventListener("input", function () {
    var password = passwordInput.value;
    if (password.length < 6) {
        errorMessage.textContent = "密碼長度至少為6個字元";
        submitBtn.disabled = true;
    }
    else {
        errorMessage.textContent = "";
        submitBtn.disabled = false;
        if (password === passwordCurrent) {
            submitBtnLimit = true;
        }
        else {
            submitBtnLimit = false;
        }
    }
});
submitBtn.addEventListener("click", function () {
    enter_count++;
    enter_remaining--;
    if (submitBtnLimit) {
        alert("登入成功");
    }
    else {
        alert("\u767B\u5165\u5931\u6557\uFF0C\u9A57\u8B49\u6B21\u6578\u5269\u9918 ".concat(enter_remaining));
    }
    if (enter_remaining === 0) {
        submitBtn.disabled = true;
    }
});
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
