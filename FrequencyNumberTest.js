/**
 * Created by XAQ on 2017/4/19.
 */
//分解字符串
function splitString(string){
    if(string === "" || string === " ")
        return [];
    return string.split(" ");
}
function main(string){
    return splitString(string);
}

module.exports=main;