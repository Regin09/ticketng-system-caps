import { Fragment } from 'react';
import { BrowserRouter, Outlet, Navigate } from 'react-router-dom';
import AdminRouter from './routers/adminRouter';
import EngineerRouter from './routers/engineerRouter';
import UserRouter from './routers/userRouter';

 const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("access_token")) {
        return <Navigate to={-1} replace />
    }
    return <Outlet />;
  }

  const ProtectedAdminRoute = () => {
    if (localStorage.getItem("access_token") && localStorage.getItem("role") === 'admin') {
      return <Outlet/>
    }
    return alert("Kamu bukan Admin!");
  }

  const ProtectedEngineeringRoute = () => {
    if (localStorage.getItem("access_token") && localStorage.getItem("role") === 'engineer') {
      return <Outlet/>
    }
    return <Navigate to="/" replace /> ;
  }

  const ProtectedUserRoute = () => {
    if (localStorage.getItem("access_token") && localStorage.getItem("role") === 'user') {
      return <Outlet/>
    }
    return <Navigate to="/" replace /> ;
  }

  const AllRoleCanAccess = () => {
    if (localStorage.getItem("access_token")) {
      return <Outlet/>
    }
    return <Navigate to="/login" replace /> ;
  }

function App() {
  return (
    <Fragment>
      <BrowserRouter>      
        <AdminRouter />
        <EngineerRouter/>
        <UserRouter />
      </BrowserRouter>
    </Fragment>
  );
}


export default App;
