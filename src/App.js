import React, { useState } from 'react'
import Headbar from './component/HeadBar'
import SidebarB from './component/Sidebar'
import mailList from './component/MailList'
const App = () => {
  return (
    <div>
        <Headbar/>
        <SidebarB/>
        <mailList/>
    </div>
  );
}

export default App;