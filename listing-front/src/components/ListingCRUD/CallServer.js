const API_URL = 'http://127.0.0.1:8000/';

export const listClass = async () => {
    return await (fetch(API_URL));
}

export const addNewClass = async (newClass) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': String(newClass.title).trim(),
        })
    })
}
