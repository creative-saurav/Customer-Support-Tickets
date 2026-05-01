import React from 'react';

const Navbar = () => {
    return (
        
            <div className="bg-white ">
                <div className="">
                     <div className="px-8 py-3 flex justify-between items-center navbar max-w-[1220px]  mx-auto">
                        <h1 className="font-semibold text-lg">CS — Ticket System</h1>

                        <div className="flex items-center gap-5 text-gray-600">
                            <a className="hover:text-black">Home</a>
                            <a className="hover:text-black">FAQ</a>
                            <a className="hover:text-black">Changelog</a>
                            <a className="hover:text-black">Blog</a>
                            <a className="hover:text-black">Download</a>
                            <a className="hover:text-black">Contact</a>

                            <button className="btn btn-sm bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white border-none hover:bg-purple-700">
                            + New Ticket
                            </button>
                        </div>
                     </div>
                </div>
            </div>
    );
};

export default Navbar;