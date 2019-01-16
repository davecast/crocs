
async function setPost (url, data) {
    params = {
        method: 'POST',
        body: data   
    }; 

    var request = new Request( url, params );
 
    let respose = await fetch( request ).then( r => r.json() )
    .then( data => {
        return data
    })
    .catch( e => e );

    return respose
    
    // const response = await fetch( url, params ).catch( e => e );
 
    // const result = await response.json()
    // return result;
}

async function getData(url) {
    const response = await fetch(url).catch( e => e );
    
    const data = await response.json()

    return data;
}