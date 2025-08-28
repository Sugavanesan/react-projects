import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RouteNavName } from '../../routers/constants/RouteNavName';

const MatchesPage = () => {
    const navigate = useNavigate();
    const Array = [
        { id: 1, name: "abc", email: "abc", phone: "abc", address: "abc" },
        { id: 2, name: "abc", email: "abc", phone: "abc", address: "abc" },
        { id: 3, name: "abc", email: "abc", phone: "abc", address: "abc" },
        { id: 4, name: "abc", email: "abc", phone: "abc", address: "abc" },
        { id: 5, name: "abc", email: "abc", phone: "abc", address: "abc" },
        { id: 6, name: "abc", email: "abc", phone: "abc", address: "abc" },
    ]

    const buildURL = (user: any) => {
        const encoded = encodeURIComponent(JSON.stringify(user));
        return `/details?data=${encoded}`;
    }; 

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {
                Array.map((item) => {
                    return (
                        <a
                            key={item.id}
                            href={buildURL(item)} // for right-click/new-tab behavior
                            onClick={(e) => {
                                e.preventDefault(); // stop default <a> behavior
                                navigate(`/details`, { state: item }); // left-click: use state only
                            }}
                            style={{
                                // textDecoration: 'none',
                                // color: 'inherit',
                                'all': 'unset',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ border: '1px solid black' }} className='d-flex justify-content-between align-items-center' key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                                <p>{item.address}</p>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    );
}

export default MatchesPage;
