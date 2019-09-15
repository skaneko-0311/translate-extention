var firstFlg = true;
const API_URL = 'https://reqres.in/api/users?page=2'

var callAPI = function (){
    $.ajax({
        dataType: "json",
        url: API_URL,
        success: function (res) {
            console.log(res);
        }
      });
}

var getSelectedText = function() {
    let text = window.getSelection().toString();
    if(firstFlg && text){
        callAPI();
        console.log(text);
        firstFlg = false;
    } else if(!firstFlg && !text){
        firstFlg = true;
    }
};

$(document).ready(function(){
    const timer = setInterval(getSelectedText,300);
});