import React from 'react';
import { Form } from 'react-bootstrap';

const BasicDetail = () => {
    const [name, setName] = React.useState('');
    return (
        <div className='p-3'>
            <h6>Basic detail</h6>
            <Form>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setName(e.target.value)} />
            </Form>
        </div>
    );
}

export default BasicDetail;
