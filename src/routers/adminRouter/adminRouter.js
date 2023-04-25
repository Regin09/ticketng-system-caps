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
import CreateTickets from '../../pages/tickets/CreateTickets/CreateTickets';
import DetailTickets from '../../pages/tickets/DetailTickets/DetailTickets';
import CreateMember from '../../pages/members/Create-Member/CreateMember';
import DetailEngineerPerformance from '../../pages/members/DetailEngineerPerformance/DetailEngineerPerformance';
import CreateClient from '../../pages/clients/CreateClient/CreateClient';
import ClientAnalysis from '../../pages/clients/ClientAnalysis/ClientAnalysis';
import EditClient from '../../pages/clients/EditClient/EditClient';
import DetailFeedback from '../../pages/Feedback/DetailFeedback/DetailFeedback';
import EditTickets from '../../pages/tickets/DetailTickets/EditTickets/EditTickets';

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
                <Route path="tickets/createTickets" element={<CreateTickets/>} />
                <Route path="tickets/detailTickets" element={<DetailTickets/>} />
                    <Route path="tickets/detailTickets/editTickets" element={<EditTickets/>} />
                <Route path="members" element={<Members />} />
                <Route path="members/createAccount" element={<CreateMember/>} />
                <Route path="members/userPerformance" element={<DetailEngineerPerformance/>} />
                <Route path="clients" element={<Clients />} />
                <Route path="clients/createClient" element={<CreateClient/>} />
                <Route path="clients/clientAnalysis" element={<ClientAnalysis/>} />
                <Route path="clients/editClient" element={<EditClient/>} />
                <Route path="clients/detailClient" element={<Overview/>} />
                <Route path="feedbacks" element={<Feedback/>} />
                <Route path="feedbacks/detailFeedback" element={<DetailFeedback/>} />
            </Route>
            
        </Routes>
  );
}


export default AdminRouter;
