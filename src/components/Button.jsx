import React from 'react'

function Button({label,onBook}) {
    return (
        <button className='bg-slate-800 w-full py-2 px-4 text-white rounded mr-2 hover:bg-slate-700' onClick={onBook} >
            {label}
        </button>
    )
}

export default Button