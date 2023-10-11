import logo from './logo.svg';
import {ThemeToggle} from "../../common";
import './home.css';
import { useState } from 'react'
import { Checkbox, Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

export const Home = () => {

    const [visible, setVisible] = useState(false)

    return (

        <Grid columns={1} className={"flex flex-col min-h-screen items-center justify-center dark:bg-gray-800 dark:text-white"}>

        <Grid.Column>
            <Grid.Row>
                <Checkbox icon
                    checked={visible}
                    label={{ children: <Icon name='sidebar' />}}
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
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='users' />
                Clients
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='payment' />
                Payments
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='user' />
                Trainers
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='wrench' />
                Gym Equipment
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='cogs' />
                Maintenance
              </Menu.Item>
            </Sidebar> 
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>

        <div className={"flex flex-col min-h-screen items-center justify-center dark:bg-gray-800 dark:text-white"}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="text-2xl mb-6">The Administrator Panel</h1>
            <a href={'http://localhost:3000/'} target={'_blank'} rel={'noreferrer'} className={'text-lg bg-gray-200 dark:bg-gray-700 rounded-xl px-8 py-4'}>Go to client homepage</a>
            <ThemeToggle />
        </div>
            
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </Grid.Column>
    </Grid>

    )
}