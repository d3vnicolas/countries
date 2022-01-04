import React, { useEffect, useState } from 'react';
import { Master, Search, Input, Cards, Message } from './main';
import { BsSearch } from 'react-icons/bs';
import Card from '../Card';
import countries from '../../API/country';


const Main = () => {

    const [all, setAll] = useState([]);

    useEffect(async () => {
        setAll(await countries.all());
    }, []);

    const handleChangeSearch = async ({ target }) => {
        if (target.value !== '') {
            let filter = await countries.search(target.value);
            setAll(filter);
        } else {
            setAll(await countries.all());
        }
    }
    return (
        <Master>
            <div className="container">
                <Search>
                    <Input>
                        <BsSearch />
                        <input onChange={handleChangeSearch} type="search" className="input" placeholder="Search for a country" />
                    </Input>
                    <select defaultValue="default" name="region" className="input">
                        <option value="default" style={{ display: 'none' }} >Filter by region</option>
                        <option value="africa"> Africa </option>
                        <option value="america"> Americas </option>
                        <option value="asia"> Asia </option>
                        <option value="europe"> Europe </option>
                        <option value="Oceania"> Oceania </option>
                    </select>
                </Search>
                {all.status &&
                    <Message>
                        <p>Not found.</p>
                    </Message>
                }
                {Array.isArray(all) &&
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
                }
            </div>
        </Master>
    );
}

export default Main;