import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { GridList } from 'material-ui/GridList'
import ButtonLink from './ButtonLink'
import FontAwesome from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css'


class Login extends React.Component{

  render(){
    return(
      <div style={formStyles.root}>
        <GridList cellHeight='auto' cols={1} style={formStyles.gridList} >
          <div style={formStyles.paper}>
            <form>
              <TextField 
                  name="email" 
                  style={formStyles.textFirst} 
                  hintText="Email..." 
                  type="email"
              />
              {
                  this.props.register ?
                  <div>
                    <TextField 
                      name="fname" 
                      style={formStyles.input} 
                      hintText="First name..." 
                    />
                    <TextField 
                      name="lname" 
                      style={formStyles.input} 
                      hintText="Last name..." 
                    /> 
                    <TextField 
                      name="password1" 
                      style={formStyles.input} 
                      hintText="Password..." 
                      type="password"
                    /> 
                  </div> : null
              }
              <TextField 
                name="password2" 
                style={formStyles.input} 
                hintText="Password..." 
                type="password"
              /> 
              <RaisedButton 
                backgroundColor={"#C0C0C0"} 
                style={formStyles.button}
                labelColor={"#FFF"}
                label={this.props.register? "Register" : "Login"}
              >
              </RaisedButton>
              <ResetLink />
              <Divider />
              <RaisedButton 
                children={
                  <FontAwesome 
                    name="google" 
                    size="lg" 
                    title="share it on google"
                    inverse={true}
                  />
                }
                backgroundColor={"#4285F4"} 
                style={formStyles.buttonGoogle}
                labelColor={"#FFF"}
                label={this.props.register? "Register with Google" : "Login with Google"}
              >
              </RaisedButton>
              <RaisedButton 
                children={
                  <FontAwesome 
                    name="facebook" 
                    size="lg" 
                    title="share it on facebook"
                    inverse={true}
                  />
                }
                backgroundColor={"#3B5998"} 
                style={formStyles.buttonFacebook}
                labelColor={"#FFF"}
                label={this.props.register? "Register with Facebook" : "Login with Facebook"}
              >
              </RaisedButton>
            </form>
          </div>
          <div style={formStyles.gridTile}>
            { !this.props.register ? 
                <RegisterLink hRegister={this.props.hRegister} />:
                <LoginLink hLogin={this.props.hLogin} />
            }
          </div>
        </GridList> 
      </div>
      )
    }    
}

Login.propTypes = {
  register: PropTypes.bool,
  hRegister: PropTypes.func.isRequired,
  hLogin: PropTypes.func.isRequired,
}

Login.defaultProps = {
  register: false,
}


const ResetLink = () => {
  return(
    <div style={formStyles.resetLink}>
      Don't remember your password? 
      <ButtonLink decoration="underline" text="Reset it" to="/" />
    </div>
  )
}

const LoginLink = ({ hLogin  }) => {
  return(
    <div style={formStyles.inputClick}> 
      Have an account? <a onClick={hLogin} href="#"> Login </a> 
    </div>
  )
}

const RegisterLink = ({ hRegister  }) => {
  return(
    <div style={formStyles.inputClick}> 
      Don't have an account? <a onClick={hRegister} href="#"> Register </a> 
    </div> 
  )
}


const formStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  input: {
    marginLeft: 107,
  },
  inputClick: {
    textAlign: "center",
    paddingTop: 10,
  },
  paper: {
    borderRadius: 5,
    backgroundColor: "#FFF"
  },
  gridTile: {
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  gridList: {
    width: 480,
    height: "auto",
    overflowY: 'auto',
    marginTop: 120,
  },
  textFirst: {
    marginTop: 20,
    marginLeft: 107,
  },
  resetLink:{
    marginTop: 15,
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    width: "70%",
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 70,
  },
  buttonGoogle: {
    width: "70%",
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 70,
    fontFamily: 'Roboto, sans-serif',
  },
  buttonFacebook: {
    width: "70%",
    marginTop: 0,
    marginBottom: 30,
    marginLeft: 70,
  },
}


export default Login
