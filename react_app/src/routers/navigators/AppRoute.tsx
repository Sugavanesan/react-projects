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
import DetailsPage from '../../components/pages/DetailsPage';
import MatchesPage from '../../components/pages/MatchesPage';

const AppRoute = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={RouteNavName.about} element={<About />} />
            <Route path={RouteNavName.contact} element={<Contact />} />

            <Route path={'/matches'} element={<MatchesPage />} />
            <Route path={"/details"} element={<DetailsPage />} />


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
