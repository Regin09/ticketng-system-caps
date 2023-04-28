import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRouter from './routers/adminRouter';
// import EngineerRouter from './routers/engineerRouter/engineerRouter';
// import UserRouter from './routers/userRouter/userRouter';

function App() {
  return (
    <Fragment>
      <BrowserRouter>      
        <AdminRouter />
        {/* <EngineerRouter />
        <UserRouter /> */}
      </BrowserRouter>
    </Fragment>
  );
}


export default App;
