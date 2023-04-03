import { Route, Routes } from 'react-router-dom';
import Choose from '../../pages/choose/Choose';
import Overview from '../../pages/overview/Overview';
import Tickets from '../../pages/tickets/Tickets';
import Members from '../../pages/members/Members';
import Login from '../../pages/login/Login';
import Clients from '../../pages/clients/Clients';
import UserProfile from '../../pages/userProfile/UserProfile';
import Feedback from '../../pages/Feedback/Feedback';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';

function AdminRouter() {
  return (
        <Routes>
      {/* Router Admin */} 
            <Route path= "/" element={<Choose />} />
            <Route path="login" element={<Login />} />
            <Route element={<DashboardLayout />} >
                <Route path="overview" element={<Overview />} />
                <Route path="userProfile" element={<UserProfile />} />
                <Route path="tickets" element={<Tickets/>} />
                <Route path="tickets/createTickets" element={<Overview/>} />
                <Route path="tickets/detailTickets" element={<Overview/>} />
                    <Route path="tickets/detailTickets/editTickets" element={<Overview/>} />
                <Route path="members" element={<Members />} />
                <Route path="members/createAccount" element={<Overview/>} />
                <Route path="members/userPerformance" element={<Overview/>} />
                <Route path="clients" element={<Clients />} />
                <Route path="clients/createClient" element={<Overview/>} />
                <Route path="clients/clientAnalysis" element={<Overview/>} />
                <Route path="clients/editClient" element={<Overview/>} />
                <Route path="clients/detailClient" element={<Overview/>} />
                <Route path="feedbacks" element={<Feedback/>} />
                <Route path="feedbacks/detailFeedback" element={<Feedback/>} />
            </Route>
            
        </Routes>
  );
}


export default AdminRouter;
