import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Choose from '../choose/Choose';
import Login from '../../pages/login/Login';
import Overview from '../../pages/overview/Overview';
import Tickets from '../../pages/tickets/Tickets';
import UserProfile from '../../pages/userProfile/UserProfile';
import Feedback from '../../pages/Feedback/Feedback';

function UserRouter() {
  return (
        
          <Routes>
        {/* Router Client  */}
            <Route path= "/" element={<Choose/>} />
            <Route path="login" element={<Login/>} />
            <Route path="overview" element={<Overview />} />
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="tickets" element={<Tickets/>} />
              <Route path="tickets/createTickets" element={<Overview/>} />
              <Route path="tickets/detailTickets" element={<Overview/>} />
                <Route path="tickets/detailTickets/editTickets" element={<Overview/>} />
            <Route path="feedbacks" element={<Feedback/>} />
              <Route path="feedbacks/detailFeedback" element={<Feedback/>}/>      
           </Routes>
      
  );
}


export default UserRouter;
