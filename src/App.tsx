import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SectionOne } from "./sections/SectionOne";
import { SectionTwo } from "./sections/SectionTwo";
import { SectionThree } from "./sections/SectionThree";
import { SectionFour } from "./sections/SectionFour";

function App() {
  return (
    <>
      <Header />

      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>

      <Footer />
    </>
  );
}

export default App;
