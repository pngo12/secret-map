import React, { Component } from 'react';
import NavBar from '../admin/navbar';
import ZoomPan from '../../components/dashboard/zoomPan';
import Search from '../dashboard/search';
import AdminCRUD from './crud';
import AdminProducts from './products'

class AdminPage extends Component {

    state = {
        countryName: '',
        showListing: false,
    }

    updateCountryName = countryName => {
        this.setState({
            countryName,
            showListing: true
        });
    }

    render() { 
        return ( 
            <div>
                <NavBar />
                <AdminProducts/>
                {/* <ZoomPan updateCountryName={this.updateCountryName}/> */}
                {/* <AdminCRUD /> */}
                {/* <Search 
                    countryName={this.state.countryName}
                    showListing={this.state.showListing}
                    /> */}
            </div>
         );
    }
}


 
export default AdminPage;