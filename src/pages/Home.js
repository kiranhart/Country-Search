import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Select from '../components/Select';
import CountryCard from '../components/CountryCard';

const filterOptions = [
    { value: 'filterbyregion', label: 'Filter By Region' },
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Home = () => {
    const [countries, setCountries] = useState();

    useEffect(async () => {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
    }, []);

    return <div className="bg-[#fafafa] min-h-screen">
        <Navbar />
        <div className="px-6 py-7">
            <div className="block md:flex">
                <Input placeholder="Search for a country..." styles="md:w-2/5 md:mr-auto" />
                <Select name="country" options={filterOptions} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-y-6">
                {countries && countries.map((country) => {
                    return <CountryCard key={country.alpha3Code} name={country.name} flag={country.flags.svg} code={country.alpha3Code} region={country.region} captial={country.capital} population={country.population} />; 
                })}
            </div>
        </div>
    </div>;
};

export default Home;