import React from 'react';
import { Master, Search, Input, Cards } from './main';
import { BsSearch } from 'react-icons/bs';
import Card from '../Card';



const Main = () => {
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
                        <option value="america"> America </option>
                        <option value="asia"> Asia </option>
                        <option value="europe"> Europe </option>
                        <option value="Oceania"> Oceania </option>
                    </select>
                </Search>
                <Cards>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Cards>
            </div>
        </Master>
    );
}
 
export default Main;