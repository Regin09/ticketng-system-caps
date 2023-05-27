import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Choose from "../choose/Choose";
import Overview from "../adminPage/pages/overview/Overview";
import Tickets from "../adminPage/pages/tickets/Tickets";
import Members from "../adminPage/pages/members/Members";
import Login from "../adminPage/pages/login/Login";
import Clients from "../adminPage/pages/clients/Clients";
import UserProfile from "../adminPage/pages/userProfile/UserProfile";
import Feedback from "../adminPage/pages/Feedback/Feedback";
import DashboardLayout from "../components/DashboardLayout1/DashboardLayout1";
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
import { ToggleTickets } from "../components/toggle-button/ToggleTickets";
import SearchTicket from "../adminPage/pages/searching/SearchTicket";

const ProtectedAdminRoute = () => {
  if (
    !localStorage.getItem("access_token") &&
    !localStorage.getItem("role") === "admin"
  ) {
    return <Navigate to="/" replace />;
  }
  return <DashboardLayout/>
};

const HandleLoginSuccessfully = () => {
  if (localStorage.getItem("access_token")) {
    return <Navigate to={-1} replace />;
  }
  return <Outlet />;
};
function AdminRouter() {
  return (
    <Routes>
      {/* Router Admin */}
      <Route element={<HandleLoginSuccessfully />}>
        <Route path="/" element={<Choose />} />
        <Route path="admin-login" element={<Login />} />
      </Route>
      <Route element={<ProtectedAdminRoute />}>
          <Route path="searching-admin/:key" element={<SearchTicket />}/>
          <Route path="overview-admin" element={<Overview />} />
          <Route path="userProfile-admin" element={<UserProfile />} />
          <Route path="tickets-admin" element={<Tickets />} />
          <Route
            path="tickets-admin/createTickets"
            element={<CreateTickets />}
          />
          <Route path="tickets-admin/detailTickets/:id" element={<DetailTickets />} />
          <Route
            path="tickets-admin/detailTickets/editTickets/:id"
            element={<EditTickets />}
          />
          <Route path="members-admin" element={<Members />} />
          <Route
            path="members-admin/createAccount"
            element={<CreateMember />}
          />
          <Route
            path="members-admin/userPerformance"
            element={<DetailEngineerPerformance />}
          />
          <Route path="clients-admin" element={<Clients />} />
          <Route path="clients-admin/createClient" element={<CreateClient />} />
          <Route
            path="clients-admin/clientAnalysis"
            element={<ClientAnalysis />}
          />
          <Route path="clients-admin/editClient" element={<EditClient />} />
          <Route path="clients-admin/detailClient" element={<DetailClient />} />
          <Route path="feedbacks-admin" element={<Feedback />} />
          <Route
            path="feedbacks-admin/detailFeedback"
            element={<DetailFeedback />}
          />
        </Route>
    </Routes>
  );
}

export default AdminRouter;
