import request from 'superagent';

export async function fetchFemales() {
    try {
        const response = await request.get(`https://dry-badlands-56059.herokuapp.com/females`)
    
    return response.body;
    } catch(err) {
        throw err;
    }
}