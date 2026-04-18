import React from 'react'
import Button from './Button'

function TrainCard(props) {
    return (
        <div className='bg-white shadow-md p-4 rounded-xl 
                        hover:shadow-xl overflow-hidden '>
            <img
                src="https://i.pinimg.com/736x/c5/6e/ad/c56eadfcdabbc17a3527e533c694592b.jpg"
                alt="train"  className='w-full h-60 object-cover rounded-md mb-2 '
            />
            <h2 className='font-bold'>{props.name}</h2>
            <p className='text-gray-600'>Status : {props.status}</p>

            <Button label ="Book Now" onBook={props.onBook}  />
        </div>
    )
}

export default TrainCard