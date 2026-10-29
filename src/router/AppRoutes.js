import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy,Suspense } from "react";

const AppRoutes = () =>{

    const Home = lazy(()=> import('../components/home/Home'));

    return(
     <Suspense fallback={()=><div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
             <Route path="/" Component={Home} />
          </Routes>
        </BrowserRouter>
     </Suspense>
    )
}

export default AppRoutes;