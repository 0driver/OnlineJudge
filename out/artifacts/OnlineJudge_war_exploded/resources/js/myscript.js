function randomOrder(obj) {
    let len = obj.length;
    for (let i = len - 1; i >= 0; i--) {
        let ind = randomNum(0, i);
        let temp = obj[ind];
        obj[ind] = obj[i];
        obj[i] = temp;
    }
}

function randomNum(minNum, maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random() * minNum + 1, 10); 
        case 2: 
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10); 
        default: 
            return 0; 
    } 
} 