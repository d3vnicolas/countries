import React, { useState, useEffect } from 'react';
import { Master, Wrapper, Left, Right, Infos } from './country';
import NavBtn from '../NavBtn';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import countries from '../../API/country';

const Country = () => {

    let { name } = useParams();
    const [country, setCountry] = useState([]);

    const fetchData = async () => {
        const response = await countries.fullName(name);
        setCountry(response[0]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Master>
            <div className="container">
                <NavBtn icon={<BsArrowLeft />} title="Back" />
                {country.length !== 0 &&
                    <Wrapper>
                        <Left>
                            <img src={country.flags.svg} />
                        </Left>
                        <Right>
                            <h2>{country.name.common}</h2>
                            <Infos>
                                <div className="left">
                                    <p><b>Population:</b> {(country.population).toLocaleString('pt-BR')} </p>
                                    <p><b>Region:</b> {country.region} </p>
                                    {country.subregion &&
                                        <p><b>Sub region:</b> {country.subregion} </p>
                                    }
                                    {country.capital &&
                                        <p><b>Capital:</b> {country.capital[0]} </p>
                                    }
                                </div>
                                <div className="right">
                                    <p><b>Top Level Domain:</b> {country.tld} </p>
                                    
                                    {country.currencies &&
                                        <p><b>Currencies:</b> {
                                            Object.entries(country.currencies).map(el => (
                                                el.map((curr, key) => (
                                                    <span key={key}> {curr.name} </span>
                                                ))
                                            ))
                                        } </p>
                                    }

                                    {country.languages &&
                                        <p><b>Languages:</b> {
                                            Object.keys(country.languages).map((lang, key) => (
                                                <span key={key} className="lang">{country.languages[lang]}</span>
                                            ))
                                        } </p>
                                    }
                                </div>
                                {country.borders &&
                                    <div className="bottom">
                                        <div className="wrapper_borders">
                                            <p>Border countries: </p>
                                            {country.borders.map((bord, key) => (
                                                <span key={key} className="borders">{bord}</span>
                                            ))}
                                        </div>
                                    </div>
                                }
                            </Infos>
                        </Right>
                    </Wrapper>
                }
            </div>
        </Master>
    );
}

export default Country;