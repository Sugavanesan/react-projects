import React, { ChangeEvent, useState } from 'react';
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
    const [formState, setFormState] = useState({
        selectedOption1: '',
        selectedOption2: '',
        optionsForSecondDropdown: [],
        name: '',
        dob: '',
        age: 10,
        address: '',
    });
    console.log(add(2 , 3))
    function add (a: any, b: any): string {
        return `${a} + ${b}`
    } 

    const handleSelectChange1 = (event: any) => {
        const selectedTitle = event.target.value;
        const selectedData: any = Data.find(item => item.title.name === selectedTitle)?.data || [];

        setFormState(prevState => ({
            ...prevState,
            selectedOption1: selectedTitle,
            selectedOption2: '',
            optionsForSecondDropdown: selectedData,
        }));
    };

    const handleSelectChange2 = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        setFormState(prevState => ({
            ...prevState,
            selectedOption2: selectedValue,
        }));
    };

    const data = []
    const Data = [
        {
            title: { id: 1, name: 'option1' },
            data: [
                { id: 1, name: 'optionA' },
                { id: 2, name: 'optionB' },
                { id: 3, name: 'optionC' }
            ]
        },
        {
            title: { id: 2, name: 'option2' },
            data: [
                { id: 1, name: 'optionD' },
                { id: 2, name: 'optionE' },
                { id: 3, name: 'optionF' }
            ]
        },
        {
            title: { id: 3, name: 'option3' },
            data: [
                { id: 1, name: 'optionG' },
                { id: 2, name: 'optionH' },
                { id: 3, name: 'optionI' }
            ]
        }
    ]


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
                <Form.Group controlId="formSelect1">
                    <Form.Label>Select Option 1</Form.Label>
                    <Form.Select value={formState.selectedOption1} onChange={handleSelectChange1}>
                        <option value="">Choose...</option>
                        {Data.map(item => (
                            <option key={item.title.id} value={item.title.name}>
                                {item.title.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                {/* Second Dropdown */}
                <Form.Group controlId="formSelect2">
                    <Form.Label>Select Option 2</Form.Label>
                    <Form.Select
                        value={formState.selectedOption2}
                        onChange={handleSelectChange2}
                        disabled={!formState.selectedOption1}
                    >
                        <option value="">Choose...</option>
                        {formState.optionsForSecondDropdown.map((option: any) => (
                            <option key={option.id} value={option.name}>
                                {option.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
        </Form>
    );
}

export default BasicDetail;
