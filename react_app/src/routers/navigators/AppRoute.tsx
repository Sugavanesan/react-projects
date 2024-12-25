import { Route, Routes } from 'react-router-dom';
import Home from '../../components/pages/Homepage';
import About from '../../components/pages/AboutPage';
import Contact from '../../components/pages/Contactpage';
import RegistrationForm from '../../components/pages/RegistrationForm';

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<RegistrationForm />} />
        </Routes>
    );
}

export default AppRoute;
