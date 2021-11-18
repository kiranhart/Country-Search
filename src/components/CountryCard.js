import React from 'react';

const CountryCard = ({name, code, flag, population, region, captial}) => {
    return (
        <a className="w-3/4 mx-auto flex flex-col font-nunito rounded-md drop-shadow-md text-[#111517] h-auto cursor-pointer">
            <img src={flag} alt={name} className="rounded-t-md" />
            <div className="bg-white px-8 pt-5 pb-9 flex flex-col rounded-b-md">
                <h2 className="text-xl font-bold">{name}</h2>
                <br />
                <p><span className="font-semibold text-lg">Population</span>: {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                <p><span className="font-semibold text-lg">Region</span>: {region}</p>
                <p><span className="font-semibold text-lg">Captial</span>: {captial}</p>
            </div>
        </a>
    );
};

export default CountryCard;
