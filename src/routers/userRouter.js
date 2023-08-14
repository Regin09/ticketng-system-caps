import { Fragment } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
  useLocation
} from "react-router-dom";
import ChooseUser from "../choose/Choose";
import Choose from "../choose/Choose";
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
    !localStorage.getItem("access_token") ||
    localStorage.getItem("role") !== "user"
  ) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
  // return <DashboardLayoutUser />;
};

const HandleLoginSuccessfully = () => {
  const accessToken = localStorage.getItem("access_token");
  const role = localStorage.getItem("role");

  if (accessToken && role === "user") {
    return <Navigate to="overview-user/:clientCode" replace />;
  }
  return <Outlet />;
};



function UserRouter({ chooseElement }) {
  return (
    <Routes>
      {/* Router user */}
      {/* <Route path="/" element={<ChooseUser />} /> */}
      <Route element={<HandleLoginSuccessfully />}>
        <Route path="/" element={chooseElement} />
        <Route path="user-login" element={<LoginUser />} />
      </Route>
      <Route element={<ProtectedUserRoute />}>
        <Route element={<DashboardLayoutUser />}>
          <Route path="overview-user/:clientCode" element={<OverviewUser />} />
          <Route path="userProfile-user" element={<UserProfileUser />} />
          <Route path="tickets-user/:clientCode" element={<TicketsUser />} />
          <Route
            path="tickets-user/createTickets"
            element={<CreateTicketsUser />}
          />
          <Route
            path="tickets-user/detailTickets/:id"
            element={<DetailTicketsUser />}
          />
          <Route
            path="tickets-user/detailTickets/editTickets/:id"
            element={<EditTicketsUser />}
          />
          <Route path="feedbacks-user" element={<FeedbackUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default UserRouter;
