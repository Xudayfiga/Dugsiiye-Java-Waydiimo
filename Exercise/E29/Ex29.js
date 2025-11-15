async function first() {
    console.log('Bilaaw')
    const sooQaado = await fetch('./Ex29.json')
    const akhri = await sooQaado.json()
    console.log(akhri)
    
}

first()


async function sec()
{
    console.log('Online')
    const onlineQaad =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const OnlineAAkhri = await onlineQaad.json()
    console.log(OnlineAAkhri)
}
sec()

