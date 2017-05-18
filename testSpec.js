/**
 * Created by XAQ on 2017/4/19.
 */
var mainTest=require("./FrequencyNumberTest.js");
describe('countWords test',function(){
    it('count test1',function(){
        expect(mainTest("")).toEqual(null);
    });

    it('count test2',function(){
        expect(mainTest(" ")).toEqual(null);
    });

    it('count test3',function(){
        expect(mainTest("hi")).toEqual("hi 1\r\n");
    });

    it('count test4',function(){
        expect(mainTest("hi a")).toEqual("hi 1\r\na 1\r\n");
    });

    it('count test5',function(){
        expect(mainTest("hi a a")).toEqual("a 2\r\nhi 1\r\n");
    });

    it('count test6',function(){
        expect(mainTest("hi a hi one one two")).toEqual("hi 2\r\none 2\r\na 1\r\ntwo 1\r\n");
    });
});
