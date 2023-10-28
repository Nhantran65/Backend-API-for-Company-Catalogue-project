import React from 'react'

import { stories } from '../constants/constants';
import { companies } from '../constants/constants';

const Story = (props) => {
  return (
    <>
    <div className="bg-white shadow-xl rounded-lg overflow-hidden mt-4">
        <div className="flex justify-between items-center p-6 space-x-6">
            <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold truncate">{props.title}</h3>
            </div>
                <p className="mt-1 text-gray-5000">{props.content}</p>
                <p className="mt-2 text-sm text-gray-400">Status: {props.status}</p>
                <p className="mt-1 text-sm text-gray-400">
                  Published: {props.date}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Story