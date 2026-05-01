import React, { use } from 'react';
import SingleTicket from '../SingleTicket/SingleTicket';
import { toast } from 'react-toastify';

const Tickets = ({fetchPromises, setSelectTickets, selectTickets,resolvedTickets, setResolvedTickets}) => {
  const tickets = use(fetchPromises);

  const CompletdTicekts = (ticketData) => {
    const remaining = selectTickets.filter(
        (tickets) => tickets.id !== ticketData.id
    );
    
    setSelectTickets(remaining);
    setResolvedTickets((current) => [...current, ticketData]);
    toast.success("Ticket Completed !");
    };
    
    
    return (
        <div className="max-w-[1220px]  mx-auto">
            <div className="grid grid-cols-12 gap-6 px-8 mt-6">

                        <div className="col-span-8">
                            <h2 className="font-semibold mb-4 text-gray-800">Customer Tickets</h2>

                            <div className="grid grid-cols-2 gap-4">

                            {
                               tickets.filter((ticket) => !resolvedTickets.some((r) => r.id === ticket.id))
                                    .map((ticket) => (
                                        <SingleTicket
                                        ticket={ticket}
                                        key={ticket.id}
                                        setSelectTickets={setSelectTickets}
                                        selectTickets={selectTickets}
                                        />
                                    ))
                             }

                            </div>
                        </div>

                        <div className="col-span-4 space-y-4 ">

                            <div className="bg-white border rounded-lg p-4 ">
                            <h3 className="font-semibold mb-2 text-gray-800">Task Status</h3>
                               {
                                selectTickets.length === 0 ? (
                                    <div className="text-center py-6">
                                        <p className="text-gray-500 font-medium">
                                        No Task in Progress
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                        Click the New Task
                                        </p>
                                    </div>
                                    ) 
                                :(
                                    selectTickets.map((tickets, index) => (
                                    <div key={index} className='mb-2 overflow-hidden border-1 border-emerald-300 rounded-sm p-2'>
                                        <p className="text-sm text-black-500 font-semibold mb-2">
                                            {tickets.title}
                                        </p>
                                        <button className='btn btn-success btn btn-sm w-full text-center'  onClick= {() => CompletdTicekts(tickets)}>Complete</button>
                                     </div>
                                    )) 
                                )
                                }
                               
                            </div>

                            {/* <!-- Resolved --> */}
                            <div className="bg-white border rounded-lg p-4">
                            <h3 className="font-semibold mb-2 text-gray-800">Resolved Task</h3>

                            <div className=" text-gray-600 space-y-1">
                                {
                                 resolvedTickets.length === 0 ? (
                                    <div className="text-center py-6">
                                        <p className="text-gray-500 font-medium">
                                            No Task in Completed
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                             Please Complete The Task First.
                                        </p>
                                    </div>
                                 ):
                                 (
                                    resolvedTickets.map((resolved, index) => (
                                    <div key={index} className='mb-2 overflow-hidden border-1 border-emerald-300 rounded-md p-2'>
                                        <p className="text-sm text-black-500 font-semibold mb-1">{resolved.title}</p>
                                        <p className='text-sm'> Completed</p>
                                    </div>
                                  ))  
                                 )
                                }
                                
                            </div>
                            </div>

                        </div>

                        </div>
        </div>
    );
};

export default Tickets;