const formatNumber = num => {
    // if (typeof num !== 'number') {
    //     return num;
    // }

    // METHOD 0NE
    // Convert the number to a string and split it into an array of characters
    num = num.toString().split(""); // [1, 2, 3, 4]

    const ano = [];
    let decimalholder;

    // Check if the number contains a decimal point
    if (num.includes(".")) {
        // If it does, remove the decimal point and store it separately
        decimalholder = num.splice(num.indexOf(".")).join("");
    }

    let lennum = num.length;

    while (lennum > 0) {
        if (lennum % 3 === 0) {
            // If the remaining digits are a multiple of 3, group them with a comma
            ano.push(num.splice(0, 3).join(""));
            lennum -= 3;
        } else {
            // If not, add the next digit to the last group
            !ano[0] ? ano.unshift(num[0]) : (ano[0] += num[0]);
            num.splice(0, 1);
            lennum -= 1;
        }
    }

    // Add the decimal part back to the last group if it exists
    ano[ano.length - 1] += decimalholder;

    // Join the groups with commas and return the formatted number as a string
    return ano.join(",");

}    


export const formatNumber2 = num => {
    // METHOD 2
    if (typeof num !== 'number') {
        return;
    }

    let stringNum = num.toString().split("");
    // Check if the number contains a decimal point
    let decimalhold;
    if (stringNum.includes(".")) {
        // If it does, remove the decimal point and store it separately
        decimalhold = stringNum.splice(stringNum.indexOf(".")).join("");
    }
    
    
    stringNum = stringNum.join("");        
    if (stringNum > 3) {

        result = [];
        idx = stringNum.length;
        //12345678
        while(idx > 0) {
            sliceidx = Math.max(0, idx - 3);
            result.unshift(stringNum.slice(sliceidx, idx));
            idx-=3;
        }
        
        result[result.length -1] += decimalhold;
        return result.join(",")

    }
};

export default formatNumber;