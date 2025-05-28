import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ModeToggle } from "../ModeToggle";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col light:bg-[url('/src/assets/images/whitebackgroundtexture.jpg')] light:bg-repeat">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Layout;
