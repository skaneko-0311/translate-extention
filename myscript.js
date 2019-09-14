var firstFlg = true;

var getSelectedText = function() {
    let text = window.getSelection().toString();
    if(firstFlg && text){
        console.log(text);
        firstFlg = false;
    } else if(!firstFlg && !text){
        firstFlg = true;
    }
};

$(document).ready(function(){
    const timer = setInterval(getSelectedText,300);
});