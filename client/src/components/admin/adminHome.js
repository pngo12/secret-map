import React, { Component } from 'react';
import Logo from '../dashboard/logo';
import ZoomPan from '../../components/dashboard/zoomPan';
import Search from '../dashboard/search';
import AdminCRUD from './crud';

class AdminPage extends Component {

    render() { 
        return ( 
            <div>
                <Logo />
                <ZoomPan />
                <AdminCRUD />
                <Search />
            </div>
         );
    }
}


 
export default AdminPage;