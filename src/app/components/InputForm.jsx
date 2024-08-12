import React, { useState } from 'react';

const InputForm = (props) => {
    const value = props.value;
    const handleChange = props.handleChange;
    const icon = props.icon ? props.icon : 'carteira';
    const type = props.type ? props.type : 'text';
    const name = props.name ? props.name : 'name';
    const svghw = props.svghw ? props.svghw : 'w-6 h-6';

    function getIcon(icon) {
        let icone = {
            carteira: `<path fillRule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clipRule="evenodd" />`,
        }

        return (
            <svg className={`${svghw} text-gray-500 dark:gray-400`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: icone[icon] }} ></svg>
        )
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.substring(1);
    }

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {getIcon(icon)}
                </div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={capitalizeFirstLetter(name)}
                />
            </div>
        </div>
    );
};

export default InputForm;
