import { Suspense } from "react";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import BackgroundBeams from "./components/backgroundbeams/BackgroundBeams";
import { Outlet } from "react-router-dom";
import { FooterWithLogo, MainLoader, NavbarDefault } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <Suspense fallback={<MainLoader />}>
        <QueryClientProvider client={queryClient}>
          <BackgroundBeams />
          <main className="px-5">
            <NavbarDefault />
            <Outlet />
          </main>
          <ToastContainer />
          <FooterWithLogo />
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </Suspense>
    </>
  );
};

export default App;
