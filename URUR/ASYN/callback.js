// more callbacks


function operate (a,b,callback){
    return callback(a,b)

}

function add(k, b){
    return k+b
}


function sub(a, b){
    return a-b
}


console.log('add', operate(5,3,sub))

// Way adkayd qaybtan waa su'aashan
