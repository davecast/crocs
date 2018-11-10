
async function setPost (url, data) {
    params = {
        method: 'POST',
        body: data   
    }; 
    const response = await fetch( url, params ).catch( e => e );
    const result = await response.json()
    return result;
}

async function getData(url) {
    const response = await fetch(url).catch( e => e );
    
    const data = await response.json()

    return data;
}