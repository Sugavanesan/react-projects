import React, { useEffect, useState } from 'react';
import BasicDetail from '../forms/BasicDetail';
import FamilyDetails from '../forms/FamilyDetails';
import PersonalDetail from '../forms/PersonalDetail';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

    const [form, setForm] = useState<{ type: '1' | '2' | '3' }>({ type: '1' });
    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            console.log('hii')
            // if (form?.type === '2' || form?.type === '3') {
            //     console.log('byee')
            //     event.preventDefault();
            //     event.returnValue = '';
            // }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
            <div className='text-center' >
                <span>Registration Form</span>
            </div>
            {
                form?.type === '1' && <BasicDetail />
            }
            {
                form?.type === '2' && <FamilyDetails />
            }
            {
                form?.type === '3' && <PersonalDetail />
            }
            <div className='text-center' >
                <Button variant='primary' onClick={() => {
                    if(form?.type === '1'){
                        setForm({ type: '2' });
                    }else if(form?.type === '2'){
                        setForm({ type: '3' });
                    }
                 }}>Submit</Button>
            </div>
        </div>
    );
}

export default RegistrationForm;
