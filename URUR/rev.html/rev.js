// function user(){
// return new Promise((resolve, reject) => {
//     setTimeout (()=>{
//         const succeess = true

//         if (succeess){
//             resolve({id : 2})
//         } else (
//             reject("noooooo")
//         )
//     }, 3000)
    
// })
// }
// user()
// .then (data => console.log(data))
// .catch(err => console.log(err))

function userd(){
    return new Promise(function(resolve, reject) {

    setTimeout(function(){
        const success = true
if (success){
    resolve({id:13}) 
} else (reject('nooooo'))
        
    }, 1000);
})
}

async function user(){
    try {
        const mg = await userd()
         console.log(mg)
    } catch (error) {
        console.log(error)
        
    }
}

user()

// 

function guul(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const fb = false
            if(fb){
                resolve({id : 1})
            } else(reject('noooooooo'))
        }, 1000)
        
    })
}

async function laba() {

    try {
        const lb = await guul()
        console.log(lb)
    } catch (error) {
        console.log('errrr')
    }
    
}



laba()