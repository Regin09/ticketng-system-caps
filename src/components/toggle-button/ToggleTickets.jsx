import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
export function ToggleTickets (){
  const [listTicket, setListTicket] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({id:null,name:'',description:''});
  React.useEffect(() => {
    document.title = 'Edit FAQ';
    getApiHandler();
  }, []);

  const getApiHandler = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://6447ce4e7bb84f5a3e498767.mockapi.io/users',
      });
      
      console.log('Response GET');
      console.log(res);
      setListTicket(res.data)
      console.log(listTicket);
    } catch (error) {
      if (error.response.status === 404) {
        
      }
      console.log(error);
    }
  };
  const postApiHandler = async (data) => {
    try {
      
      const res = await axios({
        method: 'POST',
        url: 'https://6447ce4e7bb84f5a3e498767.mockapi.io/users',
        data: {
          name: data.name,
          description: data.description,
        },
      });
      console.log('Response POST');
      console.log(res);
      if (res.status === 201) {
        
      }
      getApiHandler();
    } catch (error) {
      

      console.log(error);
    }
  };

  const putApiHandler = async (data) => {
    try {
      
      const res = await axios({
        method: 'PUT',
        url: `https://6447ce4e7bb84f5a3e498767.mockapi.io/users/${data.id}`,
        data: {
          name: data.name,
          description: data.description,
        },
      });
      if (res.status === 200) {
        
      }
      console.log('Response DELETE');
      console.log(res);
      getApiHandler();
    } catch (error) {
     
      console.log(error);
    }
  };

  const deleteApiHandler = async (id) => {
    try {
      
      const res = await axios({
        method: 'DELETE',
        url: `https://6447ce4e7bb84f5a3e498767.mockapi.io/users/${id}`,
      });
      if (res.status === 200) {
       
      }
      getApiHandler();
      console.log(res);
    } catch (error) {

      console.log(error);
    }
  };

  return (
    <Fragment>
      <input type='text' value={formData.name} onChange={(e)=>{
        setFormData({...formData,name:e.target.value})
      }}/>
      <input type='text' value={formData.description} onChange={(e)=>{
        setFormData({...formData,description:e.target.value})
      }}/>
      <Button onClick={()=>{
       if(formData.id) {
       putApiHandler(formData)
       }
       else {
        postApiHandler(formData)
       }
       setFormData({
        id:null,name:'',description:''
      })
       
        }}>
        {formData.id?'Edit':'Tambah'}
      </Button>
    {/* <h1>{listTicket.length!==0?listTicket[0].name : null}</h1> */}
    {listTicket.length!==0?listTicket.map((ayam,index)=>{
      return (
        <>
      <h1>{index+1}. {ayam.name}</h1>
      <h1>{ayam.description}</h1>
      <Button onClick={()=>setFormData({
        id:ayam.id,name:ayam.name,description:ayam.description
      })}>
        Edit
      </Button>
      <Button onClick={()=>{
        deleteApiHandler(ayam.id)
      }
        
        }>
        Delete
      </Button>
      </>
      ) 
    }):null}
    </Fragment>
  )
}
