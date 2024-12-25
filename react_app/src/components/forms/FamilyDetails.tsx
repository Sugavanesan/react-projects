import React from 'react';
import { Form } from 'react-bootstrap';

const FamilyDetails = () => {
    const [fatherName, setFatherName] = React.useState('');
    return (
        <div className='p-3'>
            <h6>Family detail</h6>
            <Form>
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setFatherName(e.target.value)} />
            </Form>
        </div>
    );
}

export default FamilyDetails;
