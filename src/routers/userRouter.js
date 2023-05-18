import { Fragment } from "react";
import { BrowserRouter, Route, Routes,Outlet, Navigate } from "react-router-dom";
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

 const ProtectedUserRoute = () => {
   if (
     localStorage.getItem("access_token") &&
     localStorage.getItem("role") === "user"
   ) {
     return <Outlet />;
   }
   return <Navigate to="/" replace />;
 };

function UserRouter() {
  return (
    <Routes>
      {/* Router user */}
      {/* <Route path="/" element={<ChooseUser />} /> */}
      <Route path="user-login" element={<LoginUser />} />
      <Route element={<ProtectedUserRoute />}>
        <Route element={<DashboardLayoutUser />}>
          <Route path="overview-user" element={<OverviewUser />} />
          <Route path="userProfile-user" element={<UserProfileUser />} />
          <Route path="tickets-user" element={<TicketsUser />} />
          <Route
            path="tickets-user/createTickets"
            element={<CreateTicketsUser />}
          />
          <Route path="tickets-user/:id" element={<DetailTicketsUser />} />
          <Route
            path="tickets-user/detailTickets/editTickets"
            element={<EditTicketsUser />}
          />
          <Route path="feedbacks-user" element={<FeedbackUser />} />
          
        </Route>
      </Route>
    </Routes>
  );
}


export default UserRouter;
