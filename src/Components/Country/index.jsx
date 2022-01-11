import React, { useState, useEffect } from 'react';
import { Master, Wrapper, Left, Right, Infos } from './country';
import NavBtn from '../NavBtn';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import countries from '../../API/country';
import Loading from '../Loading';
import LoadingCircle from '../LoadingCircle';

const Country = () => {

    const { name } = useParams();
    const [country, setCountry] = useState([]);
    const [borders, setBorders] = useState([]);

    const handleShowBorders = () => {
        if (!borders) {
            return false;
        } else {
            if (borders.length > 0) {
                return (
                    <div className="bottom">
                        <div className="wrapper_borders">
                            <p>Border countries: </p>
                            {borders.map((bord, key) => (
                                <Link to={`/${bord.name.common}`} className="borders" key={key}> {bord.name.common} </Link>
                            ))}

                        </div>
                    </div>
                );
            } else {
                return (
                    <LoadingCircle scale="64px" />
                );
            }
        }
    }

    useEffect(() => {
        setBorders([]);
        setCountry([]);

        const fetchData = async () => {
            const response = await countries.fullName(name);
            setCountry(response[0]);
            const borders = await countries.borders(name);
            setBorders(borders);
        }

        fetchData();
    }, [name, setCountry, setBorders]);

    return (
        <Master>
            <div className="container">
                <NavBtn icon={<BsArrowLeft />} title="Back" />
                {country.length !== 0 ?
                    <Wrapper>
                        <Left>
                            <img src={country.flags.svg} alt={`flag of ${country.name.common}`} />
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
                                
                                {handleShowBorders()}

                            </Infos>
                        </Right>
                    </Wrapper>
                    :
                    <Loading />
                }
            </div>
        </Master>
    );
}

export default Country;