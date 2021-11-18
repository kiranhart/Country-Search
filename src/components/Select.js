import React from 'react';

const Select = ({name = 'FilterByRegion', options = []}) => {
    return (
        <select name={name} className="bg-white text-[#111517] cursor-pointer outline-none focus:outline-none px-7 py-4 text-sm font-semibold drop-shadow-md rounded-md font-nunito appearance-none mt-4">
            {options.map((option) => {
                return <option key={option.value} value={option.value} className="bg-white text-left text-sm">{option.label}</option>;
            }) }
        </select>
    );
};

export default Select;
