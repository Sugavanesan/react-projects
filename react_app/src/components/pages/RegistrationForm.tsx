import React from 'react';
import { Button } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { RouteNavName } from '../../routers/constants/RouteNavName';

const RegistrationForm = () => {

    const navigate = useNavigate();
    const locate=useLocation()
    console.log('regiter render')
    const handleSubmit=()=>{
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
    }

    return (
        <div>
            <div className='text-center' >
                <span>Registration Form</span>
            </div>
            <Outlet context={{handleSubmit}} />
            <div className='text-center' >
                <Button variant='primary' type='submit' onClick={() => {
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
