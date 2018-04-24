const main = require('../main/main');
var guessNumber = require('../main/main.js');
describe('main()', () => {

    var input;
    var output1,output2,output3,output4,output5,output6,output7

    beforeEach(()=>{
        input = [1,2,3,4];
        output1 = [5,1,3,4];
        output2 = [1,2,3,4];
        output3 = [5,6,7,8];
        output4 = [4,3,2,1];
        output5 = [6,3,2,1];
        output6 = [3,4,5,6,7];
        output7 = [1,2,3,'a'];
    });

    it("first guess number",() => {
        spyOn(console,"log");
        guessNumber(input,output1);
        expect(console.log).toHaveBeenCalledWith("2A1B");
    });
    it("second guess number",() => {
        spyOn(console,"log");
        guessNumber(input,output2);
        expect(console.log).toHaveBeenCalledWith("4A0B");
    });
    it("third guess number",() => {
        spyOn(console,"log");
        guessNumber(input,output3);
        expect(console.log).toHaveBeenCalledWith("0A0B");
    });
    it("fourth guess number",() => {
        spyOn(console,"log");
        guessNumber(input,output4);
        expect(console.log).toHaveBeenCalledWith("0A4B");
    });
    it("fifth guess number",() => {
        spyOn(console,"log");
        guessNumber(input,output5);
        expect(console.log).toHaveBeenCalledWith("0A3B");
    });
    it("sixth guess number",() => {
        spyOn(console,"log");
        guessNumber(input,output6);
        expect(console.log).toHaveBeenCalledWith("请输入4个数字！");
    });
    it("seventh guess number",() => {
        spyOn(console,"log");
        guessNumber(input,output7);
        expect(console.log).toHaveBeenCalledWith("请确认输入的元素为数字！");
    });
});