import fetch from 'node-fetch'

async function apiConFetch(){
    
    const arr = []

    for(let i = 0; i < 15; i++){
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const dat = await res.json()
        const {item} = await { item: {'id' : dat.id,'value': dat.value, 'url': dat.url}}
        arr.push(item)
    }
    console.log(arr)
}

apiConFetch()