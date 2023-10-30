import * as React from 'react';
import Sidebar from '../../components/sidebar';
const Donate=()=>{

      
    return (
        <div>
            <Sidebar optionsList={['Add New Donor','View Existing Donor']} tab={'donate'}/>
            
        </div>
      );
}

export default Donate;