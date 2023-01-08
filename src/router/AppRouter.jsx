import { Route, Routes } from 'react-router';

import { HeroesRoutes } from '../heroes';
import { LoginPages } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>
    
        <Routes>
            

            <Route path="login/*" element={
              <PublicRoute>
                {/* <LoginPages /> */}
                
              <Routes>
                <Route path="/*" element={ <LoginPages/> }/>
              </Routes>
              </PublicRoute>
            } />

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />

            {/* <Route path="login" element={ <LoginPages /> }/> */}
            {/* <Route path="/*" element={ <HeroesRoutes /> }/> */}
        
        </Routes>
    </>
  )
}
