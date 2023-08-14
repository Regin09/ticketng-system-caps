import { Fragment } from "react";
import {
  BrowserRouter,
  Outlet,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AdminRouter from "./routers/adminRouter";
import EngineerRouter from "./routers/engineerRouter";
import UserRouter from "./routers/userRouter";
import Choose from "./choose/Choose";

const chooseElement = <Choose />;

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={chooseElement} />
        </Routes>
        <AdminRouter />
        <EngineerRouter />
        <UserRouter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
