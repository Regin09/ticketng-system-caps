import React, { Fragment, useState } from 'react';
import axios from 'axios';
export function ToggleTickets (){
  const [listTicket, setListTicket] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    document.title = 'Edit FAQ';
    getApiHandler();
   
  }, [isLoading]);

  const getApiHandler = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://6447ce4e7bb84f5a3e498767.mockapi.io/users',
      });
      setIsLoading(false)
      console.log('Response GET');
      console.log(res);
      if (!isLoading) {
        setListTicket(res.data)
      }
      
      console.log(listTicket);
    } catch (error) {
      if (error.response.status === 404) {
        
      }
      console.log(error);
    }
  };
  return (
    <Fragment>
    {/* <h1>{listTicket?listTicket[0].name : null}</h1> */}
    </Fragment>
  )
}
