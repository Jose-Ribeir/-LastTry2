async function getData(){
    // var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users'
    //
    //
    // const response = await fetch(targetUrl)
    // const data = await response.json()
    // console.log(data)
    // return data


    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://cfg-api-ultimate.herokuapp.com/users/'

    const response = await fetch(
        targetUrl)
    const data = await response.json()
    return data
}

const queryString = window.location.search;

console.log(queryString);






async function click(id) {
 

}

const queryString = window.location.search;

console.log(queryString);