import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../views/Landing/Landing";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import WhatsAppIcon from "../../components/WhatsAppIcon/WhatsAppIcon";
import Form from "../../components/Form/Form";

const Home = () => {
    return (
        <main>
            <NavBar />
            <Landing />
            <Form />
            <Footer />
            <WhatsAppIcon />
        </main>
    );
};

export default Home;
