import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../views/Landing/Landing";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import WhatsAppIcon from "../../components/WhatsAppIcon/WhatsAppIcon";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Landing />
      <Services />
      <Footer />
      <WhatsAppIcon />
    </main>
  );
};

export default Home;
