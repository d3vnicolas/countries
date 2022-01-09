import React from 'react';
import { Master, Search, Input, Cards, Message } from './main';
import { BsSearch } from 'react-icons/bs';
import Card from '../Card';
import countries from '../../API/country';
import { useGlobal } from '../../Context/global';
import Loading from '../Loading';
import { useEffect } from 'react/cjs/react.development';


const Main = () => {

    const { all, setAll } = useGlobal();
    const { search, setSearch } = useGlobal();
    const { region, setRegion } = useGlobal();

    const handleChangeSearch = async ({ target }) => {
        setSearch(target.value);
        setRegion('default');
        if (target.value !== '') {
            let filter = await countries.search(target.value);
            setAll(filter);
        } else {
            setAll(await countries.all());
        }
    }

    const handleRegion = async ({ target }) => {
        setRegion(target.value);
        setAll([]);
        if (target.value === 'all') {
            setAll(await countries.all());
        } else {
            let req = await countries.region(target.value);
            setAll(req);
        }
    }

    const handleRenderStatus = () => {
        if (all.status) {
            return (
                <Message>
                    <p>Not found.</p>
                </Message>
            );
        } else {
            return (
                <Loading />
            );
        }
    }

    return (
        <Master>
            <div className="container">
                <Search>
                    <Input >
                        <BsSearch />
                        <input onChange={handleChangeSearch} value={search} type="text" className="input" placeholder="Search for a country" />
                    </Input>
                    <select onChange={handleRegion} value={region} id="region" name="region" className="input">
                        <option value="default" style={{ display: 'none' }} >Filter by region</option>
                        <option value="africa"> Africa </option>
                        <option value="americas"> Americas </option>
                        <option value="asia"> Asia </option>
                        <option value="europe"> Europe </option>
                        <option value="oceania"> Oceania </option>
                        <option value="all"> All </option>
                    </select>
                </Search>
                {all.length > 0 ?
                    <Cards>
                        {all.map((country, index) => (
                            <Card
                                key={index}
                                name={country.name.common}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flags.png}
                            />
                        ))}
                    </Cards>
                    :
                    handleRenderStatus()
                }
            </div>
        </Master>
    );
}

export default Main;