const api = 'https://restcountries.com/v3.1/';

const dataApi = async (endpoint) => {
    let request = await fetch(`${api}${endpoint}`);
    let response = await request.json();
    return response;
}

const countries = {
    all: async () => {
        return await dataApi('all?fields=name,population,region,subregion,capital,flags');
    },
    region: async (region) => {
        return await dataApi('region/'+region);
    },
    fullName: async (name) => {
        return await dataApi('name/'+name+'?fullText=true');
    },
    search: async (word) => {
        return await dataApi('/name/'+word);
    }
}

export default countries;