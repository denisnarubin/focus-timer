import { Outlet } from "react-router-dom";
import FloatingMenu from "./FloatingMenu/FloatingMenu";

function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    
      
      <FloatingMenu />
    </>

  );
}

export default Layout;