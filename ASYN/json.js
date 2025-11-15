// to json 
// const json =JSON.stringify(SHAYGAGALI)

// TO Object
// const p = JSON.parse(shayga)

async function lama(){
    const res =  await fetch('./koow.json')
    const  n = await res.json()
    console.log(n)
 
}

lama()


//  online json place  


async function sec(){
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const  data = await res.json()
    console.log(data)
 
}

sec()