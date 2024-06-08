import { MainScreen } from "./screens";
import { Header, Footer } from "./components";

export const App = () => {
  console.log("MODE -> " + import.meta.env.MODE);
  console.log("BASE_URL -> " + import.meta.env.BASE_URL);
  console.log("PROD -> " + import.meta.env.PROD);
  console.log("DEV -> " + import.meta.env.DEV);
  console.log("SSR -> " + import.meta.env.SSR);

  return (
    <>
      <Header />
      <MainScreen />
      <Footer />
    </>
  );
};
