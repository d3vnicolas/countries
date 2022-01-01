import React, { useState, useEffect } from 'react';
import { Master, Wrapper, Left, Right, Infos } from './country';
import NavBtn from '../NavBtn';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import countries from '../../API/country';

const Country = () => {

    let { name } = useParams();
    const [country, setCountry] = useState([]);
    const [borders, setBorders] = useState();

    useEffect(async () => {
        let res = await countries.fullName(name);
        setCountry(res[0]);
    }, []);

    useEffect(async () => {
        if (typeof country === 'object' && !Array.isArray(country) && country !== null) {
            if (country.borders) {
                let res = await countries.borders(country.borders);
                setBorders(res);
            }
        }
    }, [country]);

    return (
        <Master>
            <div className="container">
                <NavBtn icon={<BsArrowLeft />} title="Back" />
                {country.length !== 0 &&
                    <Wrapper>
                        <Left>
                            <img src={country.flags.png} />
                        </Left>
                        <Right>
                            <h2>{country.name.common}</h2>
                            <Infos>
                                <div className="left">
                                    <p><b>Population:</b> {country.population} </p>
                                    <p><b>Region:</b> {country.region} </p>
                                    <p><b>Sub region:</b> {country.subregion} </p>
                                    <p><b>Capital:</b> {country.capital[0]} </p>
                                </div>
                                <div className="right">
                                    <p><b>Top Level Domain:</b> name </p>
                                    <p><b>Currencies:</b> name </p>
                                    <p><b>Languages:</b> name </p>
                                </div>


                                <div className="bottom">
                                    <div className="wrapper_borders">
                                            <p>Border countries: </p>
                                    </div>
                                </div>



                            </Infos>
                        </Right>
                    </Wrapper>
                }
            </div>
        </Master>
    );
}

export default Country;