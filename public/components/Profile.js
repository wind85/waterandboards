import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  GridList, 
  GridTile,
} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from "material-ui/RaisedButton";


class Profile extends React.Component{
  static contextTypes = {
      store: PropTypes.object
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => this.forceUpdate() )
  }

  componentWillUnmount() {
    this.unsubscribe(); 
  }

  render(){ 
    const { store } = this.context;
    const { getState } = store;
    const { AppBarReducer, LoginPageReducer, NotificationsReducer } = getState();

    return(
      <div style={formStyles.root}>
        <List style={formStyles.gridList}>
          <Subheader style={formStyles.header}>General</Subheader>
          <ListItem
            primaryText="Email"
            secondaryText="Change your primary email"
          />
          <ListItem
            primaryText="Phone Number"
            secondaryText="Change your phone number"
          />
          <ListItem
            primaryText="User Name"
            secondaryText="Change your user name"
          />
          <ListItem
            primaryText="First Name"
            secondaryText="Change your first name"
          />
          <ListItem
            primaryText="Last Name"
            secondaryText="Change your last name"
          />
          <ListItem
            primaryText="Profile photo"
            secondaryText="Change your profile photo"
          />
          </List>
        <Divider />
        <List style={formStyles.gridList}>
          <Subheader style={formStyles.header}>Notifications & Chat</Subheader>
          <ListItem
            primaryText="Show your status"
            secondaryText="Your status is visible to everyone you use with"
          />
          <ListItem
            leftCheckbox={<Toggle defaultToggled={NotificationsReducer.all}/>}
            primaryText="Notifications"
            secondaryText="Allow all notifications"
          />
          <ListItem
            leftCheckbox={<Toggle defaultToggled={NotificationsReducer.gearwatch}/>}
            primaryText="Gear watch"
            secondaryText="Allow notifications for watched gear"
          />
          <ListItem
            leftCheckbox={<Toggle defaultToggled={NotificationsReducer.chat}/>}
            primaryText="Chat messages"
            secondaryText="Allow chat messages notifications"
          />
          <ListItem
            leftCheckbox={<Toggle defaultToggled={NotificationsReducer.email}/>}
            primaryText="Emails"
            secondaryText="Allow email messages notifications"
          />
        </List>
        <Divider />
        <List style={formStyles.gridList}>
          <Subheader style={formStyles.header}>Account Operations</Subheader>
          <ListItem
            primaryText="Password"
            secondaryText="Change your password"
          />
          <ListItem
            primaryText="Password Reset"
            secondaryText="Reset your password"
          />
          <ListItem
            primaryText="Delete account"
            secondaryText="proceed to delete your account"
          />
        </List>
     </div>
    )
  }
}


const formStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    backgroundColor: "#FFFFFF",
    marginTop: 40,
    width: 480,
    height: "auto",
    overflowY: 'auto',
    marginBottom: 40,
  },
  header: {
    fontFamily: "'Architects Daughter', cursive",
    width: "90%",
    fontSize: 24,
    marginLeft: 15,
  },
}


export default Profile;