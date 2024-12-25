import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerFormSliceActions } from '../../redux/reducers/RegisterFormSlice';
import { RootState } from '../../redux/store';
import { useRegisterContext } from '../../contexts/RegisterFormContexts';
import { useOutletContext } from 'react-router-dom';

const BasicDetail = () => {
    const values = useSelector((state: RootState) => state.registerForm)
    const dispatch = useDispatch()
    const val = useRegisterContext()
    // const [name, setName] = React.useState(values.name??'');
    const [name, setName] = React.useState(val.data.name ?? '');

    const { handleSubmit }: { handleSubmit: () => void } = useOutletContext()
    console.log('basic detail')
    return (
        <Form onSubmit={(e) => { e.preventDefault(); console.log('form validation'); handleSubmit() }} >
            <div className='p-3'>
                <h6>Basic detail</h6>
                <Form.Label>First Name</Form.Label>
                <Form.Control autoFocus type="text" value={name} placeholder="Enter First Name" onChange={
                    (e) => {
                        setName(e.target.value);
                        dispatch(registerFormSliceActions.setName(e.target.value))
                        val.setData({ ...val.data, name: e.target.value })
                    }}
                />
            </div>
        </Form>
    );
}

export default BasicDetail;
