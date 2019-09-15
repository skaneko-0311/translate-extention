var firstFlg = true;
const awsAccessKey = 'xxx'
const awsSecretAccessKey = 'yyy'
AWS.config.credentials = new AWS.Credentials(awsAccessKey, awsSecretAccessKey);
const Translate = new AWS.Translate({region: 'zzz'});

function translate(text) {
    return new Promise(((resolve, reject) => {
        let params = {
            Text: text,
            SourceLanguageCode: 'en',
            TargetLanguageCode: 'ja',
        }
        Translate.translateText(params, function(err,data){
            if (err) {
                console.log(err);
                reject();
            } else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    }));
};

var callAPI = function (text){
    translate(text).then(function (result) {
            console.log(result);
    });
}

var getSelectedText = function() {
    let text = window.getSelection().toString();
    if(firstFlg && text){
        callAPI(text);
        console.log(text);
        firstFlg = false;
    } else if(!firstFlg && !text){
        firstFlg = true;
    }
};

$(document).ready(function(){
    const timer = setInterval(getSelectedText,300);
});