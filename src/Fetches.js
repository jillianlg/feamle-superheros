import request from 'superagent';

export async function fetchFemales() {
    try {
        const response = await request.get(`https://dry-badlands-56059.herokuapp.com/females`)
    
    return response.body;
    } catch(err) {
        throw err;
    }
}


export async function fetchFemaleId(femaleId) {
    try {
        const response = await request.get(`https://dry-badlands-56059.herokuapp.com/females/${femaleId}`);
    
    return response.body;
    } catch(err) {
        throw err;
    }
}
export async function fetchPublishers() {
    try {
        const response = await request.get('https://dry-badlands-56059.herokuapp.com/publishers');
    
    return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createFemale(newFemaleHero) {
    try {
        
        await request 
        .post('https://dry-badlands-56059.herokuapp.com/females')
        .send(newFemaleHero);

    return;
    } catch(err) {
        throw err;
    }
}