import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ text = "Lets Chats" }) => {
    return (
        <>
            <button onClick={() => { Tawk_API.toggle(); }} className='bg-button hover:bg-[#68217Ae0] text-white rounded-3xl px-5 py-2.5 flex items-center gap-2'>
                <LuMessagesSquare /> {text}
            </button>
        </>
    )
}

export default Button
