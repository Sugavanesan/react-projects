import React from 'react';
import { useLocation, useParams, useSearchParams } from "react-router-dom";
const DetailsPage = () => {
    const { id } = useParams();
    const state = useLocation();
    console.log('state-->', state.state)
    const [params] = useSearchParams()
    const dataParam = params.get("data");

    console.log('dataParam-->', dataParam,)
    console.log('id-->', id)

    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
}

export default DetailsPage;
