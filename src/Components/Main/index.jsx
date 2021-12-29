import React, { useEffect, useState } from 'react';
import { Master, Search, Input, Cards } from './main';
import { BsSearch } from 'react-icons/bs';
import Card from '../Card';
import countries from '../../API/country';


const Main = () => {

    const [all, setAll] = useState([]);
    
    useEffect(() => {
        const loadAll = async () => {
            
            let list = await countries.asia();

            setAll(list);
        }

        loadAll();
    }, []);
    console.log(all[9])
    return (
        <Master>
            <div className="container">
                <Search>
                    <Input>
                        <BsSearch />
                        <input type="search" className="input" placeholder="Search for a country"/>
                    </Input>
                    <select defaultValue={'default'} name="region" className="input">
                        <option value="default" style={{display: 'none'}} >Filter by region</option>
                        <option value="africa"> Africa </option>
                        <option value="america"> Americas </option>
                        <option value="asia"> Asia </option>
                        <option value="europe"> Europe </option>
                        <option value="Oceania"> Oceania </option>
                    </select>
                </Search>
                <Cards>
                    {all.map((country, index) => (
                        <Card 
                            key={index}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flags.png}
                        />
                    ))}
                </Cards>
            </div>
        </Master>
    );
}
 
export default Main;