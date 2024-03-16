async function fetchData(){
    try {
        const response = await fetch("http://numericinfosystem.in:3000/images/1705933564038.m3u8");
        const data=await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}