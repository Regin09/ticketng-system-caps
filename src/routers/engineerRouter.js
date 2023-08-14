import { Fragment } from "react";
import { Route, Routes, Outlet, Navigate, useLocation } from "react-router-dom";
// import ChooseEngineer from "../choose/Choose";
import OverviewEngineer from "../engineerPage/pages/overview/Overview";
import TicketsEngineer from "../engineerPage/pages/tickets/Tickets";
import MembersEngineer from "../engineerPage/pages/members/Members";
import LoginEngineer from "../engineerPage/pages/login/Login";
import ClientsEngineer from "../engineerPage/pages/clients/Clients";
import UserProfileEngineer from "../engineerPage/pages/userProfile/UserProfile";
import FeedbackEngineer from "../engineerPage/pages/Feedback/Feedback";
import DashboardLayoutEngineer from "../components/DashboardLayout3/DashboardLayout3";
import CreateTicketsEngineer from "../engineerPage/pages/tickets/CreateTickets/CreateTickets";
import DetailTicketsEngineer from "../engineerPage/pages/tickets/DetailTickets/DetailTickets";
import DetailEngineerPerformanceEngineer from "../engineerPage/pages/members/DetailEngineerPerformance/DetailEngineerPerformance";
import CreateClientEngineer from "../engineerPage/pages/clients/CreateClient/CreateClient";
import ClientAnalysisEngineer from "../engineerPage/pages/clients/ClientAnalysis/ClientAnalysis";
import EditClientEngineer from "../engineerPage/pages/clients/EditClient/EditClient";
import DetailFeedbackEngineer from "../engineerPage/pages/Feedback/DetailFeedback/DetailFeedback";
import EditTicketsEngineer from "../engineerPage/pages/tickets/DetailTickets/EditTickets/EditTickets";
import DetailClientEngineer from "../engineerPage/pages/clients/DetailClient/DetailClient";
import DetailEngineerAnalyticsEngineer from "../engineerPage/pages/members/DetailEngineerPerformance/DetailEngineerAnalytics/DetailEngineerAnalytics";
import Choose from "../choose/Choose";

const ProtectedEngineeringRoute = () => {
  if (
    !localStorage.getItem("access_token") ||
    localStorage.getItem("role") !== "engineer"
  ) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
  // return <DashboardLayout />;
};

const HandleLoginSuccessfully = () => {
  const accessToken = localStorage.getItem("access_token");
  const role = localStorage.getItem("role");

  if (accessToken && role === "engineer") {
    // return <Navigate to={-1} replace />;
    return <Navigate to="overview-Engineer" replace />;
  }
  return <Outlet />;
};

// const HandleLoginSuccessfully = () => {
//   if (localStorage.getItem("access_token")) {
//     return <Navigate to={-1} replace />;
//   }
//   return <Outlet />;
// };

function EngineerRouter({ chooseElement }) {
  return (
    <Routes>
      {/* Router Engineer */}
      <Route element={<HandleLoginSuccessfully />}>
        <Route path="/" element={chooseElement} />
        <Route path="engineer-login" element={<LoginEngineer />} />
      </Route>
      <Route element={<ProtectedEngineeringRoute />}>
        <Route element={<DashboardLayoutEngineer />}>
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
            path="tickets-Engineer/detailTickets/:id"
            element={<DetailTicketsEngineer />}
          />
          <Route
            path="tickets-Engineer/detailTickets/editTickets/:id"
            element={<EditTicketsEngineer />}
          />
          <Route path="members-Engineer" element={<MembersEngineer />} />
          <Route
            path="members-Engineer/userPerformance/:username"
            element={<DetailEngineerPerformanceEngineer />}
          />
          <Route
            path="members-Engineer/userPerformance/:username/engineerAnalytics"
            element={<DetailEngineerAnalyticsEngineer />}
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
            path="clients-engineer/editClient/:code"
            element={<EditClientEngineer />}
          />
          <Route
            path="clients-engineer/detailClient/:code"
            element={<DetailClientEngineer />}
          />
          <Route path="feedbacks-engineer" element={<FeedbackEngineer />} />
          <Route
            path="feedbacks-engineer/detailFeedback/:id"
            element={<DetailFeedbackEngineer />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default EngineerRouter;
