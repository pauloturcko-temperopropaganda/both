import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./sections/Banner";
import { Trajetoria } from "./sections/Trajetoria";
import { Vereador } from "./sections/Vereador";
import { Representante } from "./sections/Representante";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <Trajetoria />
        <Vereador />
        <Representante />
      </main>

      <Footer />
    </>
  );
}

export default App;
