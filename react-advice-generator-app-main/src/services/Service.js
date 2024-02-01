const url = 'https://api.adviceslip.com/advice';

const fetchData = async()=>{
    console.log("bob")
    const response= await fetch(url);
    const result =  await response.json()
    console.log("responcl",result.slip)

    return result.slip;
}
export default fetchData