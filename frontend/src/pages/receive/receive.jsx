import * as React from 'react';
import Sidebar from '../../components/sidebar';
const Receive=()=>{
    
    return(
        <div>
            <Sidebar optionsList={['Add New Recipient','View Existing Recipient','View Recipient Matches']} tab={'receive'}/>
        </div>
    );
}

export default Receive;