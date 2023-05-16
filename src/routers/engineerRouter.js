import { Fragment } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";
// import ChooseEngineer from "../choose/Choose";
import OverviewEngineer from "../engineerPage/pages/overview/Overview";
import TicketsEngineer from "../engineerPage/pages/tickets/Tickets";
import MembersEngineer from "../engineerPage/pages/members/Members";
import LoginEngineer from "../engineerPage/pages/login/Login";
import ClientsEngineer from "../engineerPage/pages/clients/Clients";
import UserProfileEngineer from "../engineerPage/pages/userProfile/UserProfile";
import FeedbackEngineer from "../engineerPage/pages/Feedback/Feedback";
import DashboardLayout from "../components/DashboardLayout3/DashboardLayout3";
import CreateTicketsEngineer from "../engineerPage/pages/tickets/CreateTickets/CreateTickets";
import DetailTicketsEngineer from "../engineerPage/pages/tickets/DetailTickets/DetailTickets";
import DetailEngineerPerformanceEngineer from "../engineerPage/pages/members/DetailEngineerPerformance/DetailEngineerPerformance";
import CreateClientEngineer from "../engineerPage/pages/clients/CreateClient/CreateClient";
import ClientAnalysisEngineer from "../engineerPage/pages/clients/ClientAnalysis/ClientAnalysis";
import EditClientEngineer from "../engineerPage/pages/clients/EditClient/EditClient";
import DetailFeedbackEngineer from "../engineerPage/pages/Feedback/DetailFeedback/DetailFeedback";
import EditTicketsEngineer from "../engineerPage/pages/tickets/DetailTickets/EditTickets/EditTickets";
import DetailClientEngineer from "../engineerPage/pages/clients/DetailClient/DetailClient";
import Choose from "../choose/Choose";

const ProtectedEngineeringRoute = () => {
  if (
    localStorage.getItem("access_token") &&
    localStorage.getItem("role") === "engineer"
  ) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

function EngineerRouter() {
  return (
    <Routes>
      {/* Router Engineer */}
      {/* <Route path="/" element={<Choose />} /> */}
      <Route path="engineer-login" element={<LoginEngineer />} />
      <Route element={<ProtectedEngineeringRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="overview-Engineer" element={<OverviewEngineer />} />
          <Route
            path="userProfile-Engineer"
            element={<UserProfileEngineer />}
          />
          <Route path="tickets-Engineer" element={<TicketsEngineer />} />
          <Route
            path="tickets-Engineer/createTickets"
            element={<CreateTicketsEngineer />}
          />
          <Route
            path="tickets-Engineer/detailTickets"
            element={<DetailTicketsEngineer />}
          />
          <Route
            path="tickets-Engineer/detailTickets/editTickets"
            element={<EditTicketsEngineer />}
          />
          <Route path="members-Engineer" element={<MembersEngineer />} />
          <Route
            path="members-Engineer/userPerformance"
            element={<DetailEngineerPerformanceEngineer />}
          />
          <Route path="clients-engineer" element={<ClientsEngineer />} />
          <Route
            path="clients-engineer/createClient"
            element={<CreateClientEngineer />}
          />
          <Route
            path="clients-engineer/clientAnalysis"
            element={<ClientAnalysisEngineer />}
          />
          <Route
            path="clients-engineer/editClient"
            element={<EditClientEngineer />}
          />
          <Route
            path="clients-engineer/detailClient"
            element={<DetailClientEngineer />}
          />
          <Route path="feedbacks-engineer" element={<FeedbackEngineer />} />
          <Route
            path="feedbacks-engineer/detailFeedback"
            element={<DetailFeedbackEngineer />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default EngineerRouter;
