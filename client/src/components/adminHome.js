import React, { Component } from 'react';
import Logo from './logo';
import ZoomPan from '../components/pages/zoomPan';
import Search from '../components/search';
import AdminCRUD from './admin/crud';

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