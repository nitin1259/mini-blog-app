export const getRequest = async (url) => {

    return await fetch(url).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(res);
        }
    });
}