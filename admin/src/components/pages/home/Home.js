import logo from './logo.svg';
import {ThemeToggle} from "../../common";
import './home.css';
import { useState } from 'react'
import { Checkbox, Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

export const Home = () => {

    const panelcss = "flex flex-col min-h-screen items-center justify-center dark:bg-gray-800 dark:text-white";
    const labelcss = "items-center justify-center dark:bg-gray-800 dark:text-white mb-6";
    const buttoncss = "text-lg bg-gray-200 dark:bg-gray-700 rounded-xl px-8 py-4";
    const [visible, setVisible] = useState(false);
    const [activeSidebarLink, setActiveSidebarLink] = useState("Home");
    const handleSidebarLinkClick = (linkName) => {
      setActiveSidebarLink(linkName);
    };

    return (

        <Grid columns={1} className={panelcss}>

        <Grid.Column>
            <Grid.Row>
                <Checkbox icon
                    checked={visible}
                    label={{ children: <div className={labelcss}> Menu <Icon name='sidebar' /> </div> }}
                    onChange={(e, data) => setVisible(data.checked)}
                />
                <ThemeToggle />
            </Grid.Row>
        </Grid.Column>
  
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='thin'
            >
              <Menu.Item as='a' onClick={() => handleSidebarLinkClick("Home")}>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a' onClick={() => handleSidebarLinkClick("Clients")}>
                <Icon name='users' />
                Clients
              </Menu.Item>
              <Menu.Item as='a' onClick={() => handleSidebarLinkClick("Payments")}>
                <Icon name='payment' />
                Payments
              </Menu.Item>
              <Menu.Item as='a' onClick={() => handleSidebarLinkClick("Trainers")}>
                <Icon name='user' />
                Trainers
              </Menu.Item>
              <Menu.Item as='a' onClick={() => handleSidebarLinkClick("Equipment")}>
                <Icon name='wrench' />
                Gym Equipment
              </Menu.Item>
              <Menu.Item as='a' onClick={() => handleSidebarLinkClick("Maintenance")}>
                <Icon name='cogs' />
                Maintenance
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='sign out alternate' />
                Log Out
              </Menu.Item>
            </Sidebar> 
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>

              <div className={panelcss}>
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="text-2xl mb-6">The Administrator Panel</h1>
                  <a href={'http://localhost:3000/'} target={'_blank'} rel={'noreferrer'} className={buttoncss}>Go to client homepage</a>
                  <ThemeToggle />
              </div>
            
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </Grid.Column>
    </Grid>

    )
}