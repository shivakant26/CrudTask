import React from 'react';
import { useNavigate } from 'react-router';
import ApplicationForm from './ApplicationForm';
// import List from './List';

function WithNavigate(props) {
    let navigate = useNavigate();
    return <ApplicationForm {...props} navigate={navigate} />
}
export default WithNavigate;