const baseUrl = `http://localhost:5000`;
const api = {

    async get(route, params) {
        const url = baseUrl.concat(route)
        try {
            const response = await fetch(url, {
                method: 'GET',
                params,
                cors: "cors",
            });
            const data = await response.json();
            // console.log(`metodo: get ${route} with params: ${JSON.stringify(params)}`);
            // console.log(`Response: ${data}`);
            return data;
        } catch (error) {
            console.error(`Error GET ${route} with params: ${JSON.stringify(params)}`);
            console.error(error);
            return null;
        }
    },
}
export default api;