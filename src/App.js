import React  from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import UserInfo from './components/UserInfo';
import Welcome from './components/Welcome';

function App() {

 

  return (
    <div>

      <BrowserRouter>

            <Routes>
              <Route path='/' element={<UserInfo/>}></Route>
              <Route path='welcome' element={<Welcome/>}></Route>
            </Routes>
      </BrowserRouter>
         </div>
  );
}

export default App;
