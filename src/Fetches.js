import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://dry-badlands-56059.herokuapp.com/';

export async function fetchFemales() {
    try {
        const response = await request.get(`${URL}/females`)
    
    return response.body;
    } catch(err) {
        throw err;
    }
}


export async function fetchFemaleId(femaleId) {
    try {
        const response = await request.get(`${URL}/females/${femaleId}`);
    
    return response.body;
    } catch(err) {
        throw err;
    }
}
export async function fetchPublishers() {
    try {
        const response = await request.get(`${URL}/publishers`);
    
    return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createFemale(newFemaleHero) {
    try {
        
        await request 
        .post(`${URL}/females`)
        .send(newFemaleHero);

    return;
    } catch(err) {
        throw err;
    }
}

export async function updateFemale(femaleId, newFemaleHero) {
    try {
        
        await request 
        .put(`${URL}/females/${femaleId}`)
        .send(newFemaleHero);

    return;
    } catch(err) {
        throw err;
    }
}

export async function deleteFemale(femaleId) {
    try {
        
        await request 
        .delete(`${URL}/females/${femaleId}`);

    return;
    } catch(err) {
        throw err;
    }
}