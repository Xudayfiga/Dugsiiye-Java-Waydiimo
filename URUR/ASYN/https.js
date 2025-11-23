async function user() {
    console.log("start")
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')

        console.log(res)

        if (!res.ok) {
            throw new Error(`fetching data failed status ${res.status}`)
         
        }
           const succeess = await res.json()
            console.log(succeess)
    } catch (err) {

        console.log(err)
    }
}



user()

// throw new Error xaggii laga soo saari lahaa error qalalan kan qofka waxay u shegegaysaa cilladu xagga ay ka jirto, sidoo kale code-ka way joojin, markaa wa in catchka loo sheegaa oo error lagu qoraa. 



// 



// status ${response.status} intaa ma fahmin