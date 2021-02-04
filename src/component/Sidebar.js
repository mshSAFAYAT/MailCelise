import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarB = () => (
        <Sidebar
            as={Menu}
            //animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='100'
            color="gray"

        >
            <Menu.Item as='a'>
                <Icon name='mail' />
    Mail
  </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='star' />
    Imposrtant
  </Menu.Item>
        </Sidebar>

)

export default SidebarB