
import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets'



const fetchTickets = async () =>{
  const res = await fetch('/Ticket.json');
  const data = await res.json();
  return data;
}
const fetchPromises = fetchTickets();

function App() {

  const [selectTickets, setSelectTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

 
  
  return (
    <>
      <Navbar></Navbar>
      <Banner selectTickets={selectTickets}  resolvedTickets={resolvedTickets} ></Banner>
      <Suspense>
        <Tickets fetchPromises={fetchPromises} setSelectTickets={setSelectTickets} selectTickets={selectTickets} resolvedTickets={resolvedTickets} setResolvedTickets={setResolvedTickets}></Tickets>
      </Suspense>
      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
