import { Route, Routes } from "react-router-dom";
import Choose from "../choose/Choose";
import Overview from "../adminPage/pages/overview/Overview";
import Tickets from "../adminPage/pages/tickets/Tickets";
import Members from "../adminPage/pages/members/Members";
import Login from "../adminPage/pages/login/Login";
import Clients from "../adminPage/pages/clients/Clients";
import UserProfile from "../adminPage/pages/userProfile/UserProfile";
import Feedback from "../adminPage/pages/Feedback/Feedback";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import CreateTickets from "../adminPage/pages/tickets/CreateTickets/CreateTickets";
import DetailTickets from "../adminPage/pages/tickets/DetailTickets/DetailTickets";
import CreateMember from "../adminPage/pages/members/Create-Member/CreateMember";
import DetailEngineerPerformance from "../adminPage/pages/members/DetailEngineerPerformance/DetailEngineerPerformance";
import CreateClient from "../adminPage/pages/clients/CreateClient/CreateClient";
import ClientAnalysis from "../adminPage/pages/clients/ClientAnalysis/ClientAnalysis";
import EditClient from "../adminPage/pages/clients/EditClient/EditClient";
import DetailFeedback from "../adminPage/pages/Feedback/DetailFeedback/DetailFeedback";
import EditTickets from "../adminPage/pages/tickets/DetailTickets/EditTickets/EditTickets";
import DetailClient from "../adminPage/pages/clients/DetailClient/DetailClient";

function AdminRouter() {
  return (
    <Routes>
      {/* Router Admin */}
      <Route path="/" element={<Choose />} />
      <Route path="admin-login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="userProfile" element={<UserProfile />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="tickets/createTickets" element={<CreateTickets />} />
        <Route path="tickets/detailTickets" element={<DetailTickets />} />
        <Route
          path="tickets/detailTickets/editTickets"
          element={<EditTickets />}
        />
        <Route path="members" element={<Members />} />
        <Route path="members/createAccount" element={<CreateMember />} />
        <Route
          path="members/userPerformance"
          element={<DetailEngineerPerformance />}
        />
        <Route path="clients" element={<Clients />} />
        <Route path="clients/createClient" element={<CreateClient />} />
        <Route path="clients/clientAnalysis" element={<ClientAnalysis />} />
        <Route path="clients/editClient" element={<EditClient />} />
        <Route path="clients/detailClient" element={<DetailClient />} />
        <Route path="feedbacks" element={<Feedback />} />
        <Route path="feedbacks/detailFeedback" element={<DetailFeedback />} />
      </Route>
    </Routes>
  );
}

export default AdminRouter;
