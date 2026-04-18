import React from 'react'

function Notification({message, type }) {
    if (!message) return null;

 const bgCol = {
        success: "bg-green-400 ",
        error: "bg-red-400",
        warning: "bg-yellow-400",
        info: "bg-blue-400"
    };

    const bg = bgCol[type] || "bg-blue-500";
    return (

        <div className={`fixed top-5 right-5   p-4 text-white font-bold rounded shadow-lg ${bg}`}>
            {message}
        </div>


    );
}

export default Notification