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
        return await dataApi('region/' + region);
    },
    fullName: async (name) => {
        return await dataApi('name/' + name + '?fullText=true');
    },
    search: async (word) => {
        return await dataApi('name/' + word);
    },
    borders: async (name) => {
        const response = await dataApi(`name/${name}?fields=borders`);
        if (response[0].borders.length) {
            let borders = response[0].borders.toString();
            const codes = await dataApi(`alpha?codes=${borders}`);
            return codes;
        }else {
            return false;
        }
    }
}

export default countries;