// Write your cade below:
function ifNumber(output) {
    var count = 0;
    output.forEach(item=>{
        if(typeof (item) == 'number'){
            count++;
        }
    });
    return count;
}
function inObject(collection) {
    var information = [];
    collection.forEach((item,index)=>{
        information.push({"item":item,"index":index});
    });
    return information;
}
function judge(input,output) {
    var elementNumber = 0;
    var positionNumber = 0;
    input.forEach(inputItem=>{
        output.forEach(outputItem=>{
            if(inputItem.item == outputItem.item&&inputItem.index == outputItem.index){
                positionNumber++;
            }
            else if(inputItem.item == outputItem.item){
                elementNumber++;
            }
        });
    });
    return positionNumber+'A'+elementNumber+'B';
}
function guessNumber(input,output) {
    if(output.length == 4){
        if(ifNumber(output) == 4){
            var inputInformation = inObject(input);
            var outputInformation = inObject(output);
            var result = judge(inputInformation,outputInformation);
        }
        else {
            result = "请确认输入的元素为数字！";
        }
    }
    else {
        result = '请输入4个数字！';
    }
    return result;
}

module.exports = function main(intput,output) {
    var result = guessNumber(intput,output);
    console.log(result);
    return result;
}