import React from 'react';

const Input = (props) => {
    return <input type="text" placeholder={props.placeholder} className={`bg-white font-nunito placeholder-shown:text-sm placeholder-gray-400 tracking-wide text-sm w-full drop-shadow-md p-5 rounded-md outline-none focus:outline-none ${props.styles}`} />;
};

export default Input;
