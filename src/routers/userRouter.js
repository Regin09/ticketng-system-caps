import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseUser from "../choose/Choose";
import OverviewUser from "../userPage/pages/overview/Overview";
import TicketsUser from "../userPage/pages/tickets/Tickets";
import LoginUser from "../userPage/pages/login/Login";
import UserProfileUser from "../userPage/pages/userProfile/UserProfile";
import FeedbackUser from "../userPage/pages/Feedback/Feedback";
import DashboardLayoutUser from "../components/DashboardLayout2/DashboardLayout2";
import CreateTicketsUser from "../userPage/pages/tickets/CreateTickets/CreateTickets";
import DetailTicketsUser from "../userPage/pages/tickets/DetailTickets/DetailTickets";
import EditTicketsUser from "../userPage/pages/tickets/DetailTickets/EditTickets/EditTickets";
import DetailFeedbackUser from "../userPage/pages/Feedback/DetailFeedback/DetailFeedback";

function UserRouter() {
  return (
        
    <Routes>
    {/* Router user */}
    <Route path="/" element={<ChooseUser />} />
    <Route path="user-login" element={<LoginUser />} />
    <Route element={<DashboardLayoutUser />}>
      <Route path="overview" element={<OverviewUser />} />
      <Route path="userProfile" element={<UserProfileUser />} />
      <Route path="tickets" element={<TicketsUser />} />
      <Route
        path="tickets/createTickets"
        element={<CreateTicketsUser />}
      />
      <Route
        path="tickets/:id"
        element={<DetailTicketsUser />}
      />
      <Route
        path="tickets/detailTickets/editTickets"
        element={<EditTicketsUser />}
      />
      <Route path="feedbacks" element={<FeedbackUser />} />
      <Route
        path="feedbacks/detailFeedback"
        element={<DetailFeedbackUser />}
      />
    </Route>
  </Routes>
      
  );
}


export default UserRouter;
