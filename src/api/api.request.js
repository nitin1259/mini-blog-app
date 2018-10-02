export const getRequest = async (url) => {

    return await fetch(url).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(res);
        }
    });
}


export const postRequest = async (url, payload) => {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload)
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res);
            }
        });
}