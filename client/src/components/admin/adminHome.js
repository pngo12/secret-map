import React, { Component } from 'react';
import Logo from '../dashboard/logo';
import ZoomPan from '../../components/dashboard/zoomPan';
import Search from '../dashboard/search';
import AdminCRUD from './crud';
import Footer from '../admin/footer'

class AdminPage extends Component {

    state = {
        countryName: '',
        showListing: false
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
                <Logo />
                <ZoomPan updateCountryName={this.updateCountryName}/>
                <AdminCRUD />
                <Search 
                    countryName={this.state.countryName}
                    showListing={this.state.showListing}
                    />
                <Footer/>
            </div>
         );
    }
}


 
export default AdminPage;