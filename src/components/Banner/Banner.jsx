import React from 'react';

const Banner = ({selectTickets, resolvedTickets}) => {
    return (
        <div className="max-w-[1220px]  mx-auto">

                <div className="grid grid-cols-2 gap-6 px-8 mt-6">

                <div className="rounded-lg p-8 text-white bg-gradient-to-r from-purple-500 to-indigo-500">
                    <p className="text-center opacity-80">In-Progress</p>
                    <h2 className="text-center text-4xl font-semibold mt-2">{selectTickets.length}</h2>
                </div>
                <div className="rounded-lg p-8 text-white bg-gradient-to-r from-green-400 to-teal-500">
                    <p className="text-center opacity-80">Resolved</p>
                    <h2 className="text-center text-4xl font-semibold mt-2">{resolvedTickets.length}</h2>
                </div>

                </div>
            
        </div>
    );
};

export default Banner;