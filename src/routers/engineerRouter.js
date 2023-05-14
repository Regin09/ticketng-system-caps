import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseEngineer from "../choose/Choose";
import OverviewEngineer from "../engineerPage/pages/overview/Overview";
import TicketsEngineer from "../engineerPage/pages/tickets/Tickets";
import MembersEngineer from "../engineerPage/pages/members/Members";
import LoginEngineer from "../engineerPage/pages/login/Login";
import ClientsEngineer from "../engineerPage/pages/clients/Clients";
import UserProfileEngineer from "../engineerPage/pages/userProfile/UserProfile";
import FeedbackEngineer from "../engineerPage/pages/Feedback/Feedback";
import DashboardLayout from "../components/DashboardLayout1/DashboardLayout1";
import CreateTicketsEngineer from "../engineerPage/pages/tickets/CreateTickets/CreateTickets";
import DetailTicketsEngineer from "../engineerPage/pages/tickets/DetailTickets/DetailTickets";
import DetailEngineerPerformanceEngineer from "../engineerPage/pages/members/DetailEngineerPerformance/DetailEngineerPerformance";
import CreateClientEngineer from "../engineerPage/pages/clients/CreateClient/CreateClient";
import ClientAnalysisEngineer from "../engineerPage/pages/clients/ClientAnalysis/ClientAnalysis";
import EditClientEngineer from "../engineerPage/pages/clients/EditClient/EditClient";
import DetailFeedbackEngineer from "../engineerPage/pages/Feedback/DetailFeedback/DetailFeedback";
import EditTicketsEngineer from "../engineerPage/pages/tickets/DetailTickets/EditTickets/EditTickets";
import DetailClientEngineer from "../engineerPage/pages/clients/DetailClient/DetailClient";

function EngineerRouter() {
  return (
    <Routes>
      {/* Router Engineer */}
      <Route path="/" element={<ChooseEngineer />} />
      <Route path="engineer-login" element={<LoginEngineer />} />
      <Route element={<DashboardLayout />}>
        <Route path="overviewEng" element={<OverviewEngineer />} />
        <Route path="userProfile" element={<UserProfileEngineer />} />
        <Route path="tickets" element={<TicketsEngineer />} />
        <Route
          path="tickets/createTickets"
          element={<CreateTicketsEngineer />}
        />
        <Route
          path="tickets/detailTickets"
          element={<DetailTicketsEngineer />}
        />
        <Route
          path="tickets/detailTickets/editTickets"
          element={<EditTicketsEngineer />}
        />
        <Route path="members" element={<MembersEngineer />} />
        <Route
          path="members/userPerformance"
          element={<DetailEngineerPerformanceEngineer />}
        />
        <Route path="clients" element={<ClientsEngineer />} />
        <Route path="clients/createClient" element={<CreateClientEngineer />} />
        <Route
          path="clients/clientAnalysis"
          element={<ClientAnalysisEngineer />}
        />
        <Route path="clients/editClient" element={<EditClientEngineer />} />
        <Route path="clients/detailClient" element={<DetailClientEngineer />} />
        <Route path="feedbacks" element={<FeedbackEngineer />} />
        <Route
          path="feedbacks/detailFeedback"
          element={<DetailFeedbackEngineer />}
        />
      </Route>
    </Routes>
  );
}

export default EngineerRouter;
