import React from 'react';
import { Button } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { RouteNavName } from '../../routers/constants/RouteNavName';

const RegistrationForm = () => {

    const navigate = useNavigate();
    const locate=useLocation()


    return (
        <div>
            <div className='text-center' >
                <span>Registration Form</span>
            </div>
            <Outlet />
            <div className='text-center' >
                <Button variant='primary' onClick={() => {
                    switch (locate.pathname) {
                        case RouteNavName.registrationForm:
                            navigate(RouteNavName.familyDetailsForm);
                            break;
                        case RouteNavName.familyDetailsForm:
                            navigate(RouteNavName.personalForm);
                            break
                        default:
                            navigate(RouteNavName.home)
                            break;
                    }
                }}>Submit</Button>
            </div>
        </div>
    );
}

export default RegistrationForm;
