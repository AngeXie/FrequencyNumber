/**
 * Created by XAQ on 2017/4/19.
 */
function getResult(elemArry,countArry){
    var result="";
    for(var i=0;i<elemArry.length;i++){
        result += elemArry[i] + " " + countArry[i] + "\r\n";
    }
    return result;
}
function main(string){
    if(string === "" || string === " ")
        return null;
    var stringArry=string.split(" ");
    var elemArry = new Array();
    var countArry = new Array();
    for(var i=0;i<stringArry.length;i++){
        if(i === 0){
            elemArry[i]=stringArry[i];
            countArry[i]=1;continue;
        }
        var j=0;
        for(;j<stringArry.length;j++){
            if(stringArry[i] === elemArry[j]){
                countArry[j]++;break;
            }
        }
        if(j === stringArry.length){
            elemArry[elemArry.length] = stringArry[i];
            countArry[countArry.length] = 1;
        }
    }
    return getResult(elemArry,countArry);
}

module.exports=main;