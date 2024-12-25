import React from 'react';
import { Form } from 'react-bootstrap';

const PersonalDetail = () => {
    const [degree, setDegree] = React.useState('');
    return (
        <div className='p-3'>
            <h6>Educational detail</h6>
            <Form>
                <Form.Label>Father Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setDegree(e.target.value)} />
            </Form>
        </div>
    );
}

export default PersonalDetail;
