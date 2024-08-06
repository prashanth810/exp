import React, { useState } from 'react';

const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "kolkata", "Jaipur", "Pune", "Ahmabad"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong", "Gazipur", "Khulna", "Narayanganj", "Rangpur", "Rajshahi"] }
];

const Secondlarge = () => {
    const [country, setCountry] = useState('');

    const handleChange = (e) => {
        setCountry(e.target.value);
    }

    return (
        <div className='container'>
            <select value={country} onChange={handleChange}>
                <option>-- Select -- </option>
                {countries.map((val, i) => {
                    return (
                        <option key={i} value={i}>{val.name}</option>
                    )
                })}
            </select>

            <select>
                <option> -- Selct -- </option>
                {country !== '' && countries[country].cities.map((val, i) => {
                    return (
                        <option>{val}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default Secondlarge;
