import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleTicket = ({ticket, setSelectTickets}) => {
    const [status, setStatus] = useState(false);

     const collectTickets = (ticketData) =>{
            setSelectTickets((prev) => {
              const exists = prev.find(
                (ticket) => ticket.id === ticketData.id
              );
              if(exists){
                setStatus(false);
                return prev.filter((ticket) => ticket.id !== ticketData.id)
              }else{
                setStatus(true);
                return [...prev, ticketData]
              }
          });
           toast.info("Ticket in  Progress");
      }

    
    return (
        <div className="bg-white border rounded-lg p-4 cursor-pointer" onClick={() => collectTickets(ticket) }>
            <div className="flex justify-between">
            <h3 className="font-medium text-[13px] leading-5">
                {ticket.title}
            </h3>
            <span className={`badge badge-sm ${status ? "badge-success" : "badge-warning"}`}>{status?"Progress" : "Open"}</span>
            </div>

            <p className="text-gray-500 text-xs mt-1">
            {ticket.description}
            </p>

            <div className="flex justify-between mt-3 text-xs">
           <div className='flex justify-between gap-2'>
             <span className="text-dark-500 font-medium font-bold">{ticket.customer}</span>
             <span className="text-red-500 font-medium">{ticket.priority}</span>
           </div>
            <span className="text-gray-400">{ticket.createdAt}</span>
            </div>
        </div>

    );
};

export default SingleTicket;