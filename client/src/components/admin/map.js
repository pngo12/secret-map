import React, {Component} from 'react';
import ZoomPan from '../dashboard/zoomPan';
import NavBar from './navbar';

class AdminMap extends Component {

    render() { 
        return ( 
            <div>
                <NavBar/>
                <ZoomPan/>
            </div>
         );
    }
}
 
export default AdminMap;