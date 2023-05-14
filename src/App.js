import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminRouter from './routers/adminRouter';
import EngineerRouter from './routers/engineerRouter';
import UserRouter from './routers/userRouter';

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
