import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullPageLoader } from "./components/FullPageLoader";
import { Banner } from "./sections/Banner";
import { Trajetoria } from "./sections/Trajetoria";
import { Vereador } from "./sections/Vereador";
import { Representante } from "./sections/Representante";
import { useImagePreloader } from "./hooks/useImagePreloader";
import background from "./assets/banner/background.webp";
import bannerMobile from "./assets/banner/banner_mobile.webp";
import marcosBoth from "./assets/banner/marcos_both.webp";
import marcosBothLogo from "./assets/banner/marcos_both_logo.webp";
import meioOeste from "./assets/banner/meio_oeste.webp";
import propagandaEleitoral from "./assets/banner/propaganda_eleitoral.webp";

const criticalImages = [
  background,
  bannerMobile,
  marcosBoth,
  marcosBothLogo,
  meioOeste,
  propagandaEleitoral,
];

function App() {
  const imagesReady = useImagePreloader(criticalImages);
  const [loaderRemoved, setLoaderRemoved] = useState(false);

  return (
    <>
      {!loaderRemoved && (
        <FullPageLoader
          fadeOut={imagesReady}
          onTransitionEnd={() => setLoaderRemoved(true)}
        />
      )}

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
