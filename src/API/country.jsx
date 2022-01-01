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
    africa: async () => {
        return await dataApi('region/africa');
    },
    americas: async () => {
        return await dataApi('region/americas');
    },
    asia: async () => {
        return await dataApi('region/asia');
    },
    europe: async () => {
        return await dataApi('region/europe');
    },
    oceania: async () => {
        return await dataApi('region/oceania');
    },
    fullName: async (name) => {
        return await dataApi('name/'+name+'?fullText=true');
    }
}

export default countries;