import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { registerFormSliceActions } from '../../redux/reducers/RegisterFormSlice';
import { useRegisterContext } from '../../contexts/RegisterFormContexts';

const FamilyDetails = () => {
    const values = useSelector((state: RootState) => state.registerForm)
    const dispatch = useDispatch()
    const val = useRegisterContext()
    // const [fatherName, setFatherName] = React.useState(values.fatherName ?? '');
    const [fatherName, setFatherName] = React.useState(val.data.fatherName ?? '');

    return (
        <div className='p-3'>
            <h6>Family detail</h6>
            <Form onSubmit={(e) => { e.preventDefault(); }}>
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" value={fatherName} placeholder="Enter First Name" onChange={(e) => {
                    dispatch(registerFormSliceActions.setFatherName(e.target.value))
                    setFatherName(e.target.value)
                    val.setData({...val.data,fatherName:e.target.value})
                }} />
            </Form>
        </div>
    );
}

export default FamilyDetails;
