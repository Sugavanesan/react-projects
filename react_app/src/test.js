let test = "Hi Iam Saikrishna Iam a UI Developer4444 "
const findLargestName = (data) => {
    let tem = '', arr = [], testString = '';
    for (i = 0; i < data.length; i++) {
        if (data[i] == ' ') {
            arr.push(tem)
            tem = ''
            continue
        }
        tem += data[i]
    }
    for(i=0;i<arr.length;i++){
        if(arr[i].length>testString.length){
            testString=arr[i]
        }
    }
    return testString
}

console.log(findLargestName(test))