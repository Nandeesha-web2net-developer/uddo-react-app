import React, { useEffect, useRef, useState } from 'react';

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const inputRef = useRef([]);
    const [otp, setOtp] = useState(new Array(length).fill(""));

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }, []);  // Add empty dependency array to run only once after the initial render

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) {
            onOtpSubmit(combinedOtp);
        }

        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRef.current[index - 1].focus();
        }
    };

    return (
        <div>
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="focus:outline-blue text-center rounded w-[50px] h-[50px] mr-4 border-[1px] border-login py-[8.5px]"
                    ref={(input) => (inputRef.current[index] = input)}
                    maxLength={1}  // Limit input to one character
                />
            ))}
        </div>
    );
};

export default OtpInput;
