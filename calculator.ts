type Operation = 'multiply' | 'add' | 'divide';
type Result = number | string;

const calculator = (a: number, b:number, op: Operation): Result => {
    if(op == 'multiply') return a * b;
    if(op === 'add') return a + b;

    if(op == 'divide'){
        if(b=== 0) return 'cant divide by 0! sorry'
        return a / b
    }

    throw new Error('Ivalid Operation')
}

try{
    console.log(1, 2, 'add')    
}catch(e){
    console.log(e)
}


calculator(1, 3, 'add')
