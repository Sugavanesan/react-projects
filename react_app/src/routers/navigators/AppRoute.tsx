import { Route, Routes } from 'react-router-dom';
import Home from '../../components/pages/Homepage';
import About from '../../components/pages/AboutPage';
import Contact from '../../components/pages/Contactpage';
import RegistrationForm from '../../components/pages/RegistrationForm';
import BasicDetail from '../../components/forms/BasicDetail';
import FamilyDetails from '../../components/forms/FamilyDetails';
import PersonalDetail from '../../components/forms/PersonalDetail';
import { RouteNavName } from '../constants/RouteNavName';
import RegisterProvider from '../../contexts/RegisterFormContexts';

const AppRoute = () => {
    return (
        <Routes>
            <Route path={RouteNavName.home} element={<Home />} />
            <Route path={RouteNavName.about} element={<About />} />
            <Route path={RouteNavName.contact} element={<Contact />} />
            {
                RegistrationRoute()
            }
        </Routes>
    );
}

const RegistrationRoute = () => {
    return (
        <Route path={RouteNavName.registrationForm} element={
            <RegisterProvider>
                <RegistrationForm />
            </RegisterProvider>
        } >
            <Route index element={<BasicDetail />} />
            <Route path={RouteNavName.familyDetailsForm} element={<FamilyDetails />} />
            <Route path={RouteNavName.personalForm} element={<PersonalDetail />} />
        </Route>
    )
}

export default AppRoute;
