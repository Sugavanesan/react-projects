import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { registerFormSliceActions } from '../../redux/reducers/RegisterFormSlice';
import { useRegisterContext } from '../../contexts/RegisterFormContexts';
import { useOutletContext } from 'react-router-dom';

const PersonalDetail = () => {
    const values = useSelector((state: RootState) => state.registerForm)
    const dispatch = useDispatch()
    const val = useRegisterContext()
    const [degree, setDegree] = React.useState(val.data.degree ?? '');
    const { handleSubmit }: { handleSubmit: () => void } = useOutletContext()
    return (
        <div className='p-3'>
            <h6>Educational detail</h6>
            <Form onSubmit={(e) => { e.preventDefault();console.log('form validation'); handleSubmit() }}>
                <Form.Label>Father Name</Form.Label>
                <Form.Control autoFocus type="text" value={degree} placeholder="Enter First Name" onChange={(e) => {
                    dispatch(registerFormSliceActions.setDegree(e.target.value))
                    setDegree(e.target.value)
                    val.setData({ ...val.data, degree: e.target.value })
                }} />
            </Form>
        </div>
    );
}

export default PersonalDetail;
