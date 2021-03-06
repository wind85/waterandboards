import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Message from '../components/Message.js'
import * as Actions from '../actions'


const LogoutContainer = ({ actions, showLogout }) => {
  const handleOk = (e) => {
    actions.loginState({
      logged: false,
    })

    actions.toggleSideBar({
      opened: false,
    })

    actions.LogoutContainerSideBar({
      LogoutContainerShow: false,
    })
  }

  const handleCancel = (e) => {
    actions.toggleSideBar({
      opened: false,
    })

    actions.LogoutContainerSideBar({
      LogoutContainerShow: false,
    })

  }

  return(
    <Message 
      hOk={handleOk}
      hCancel={handleCancel}
      lButtonLabel={"Cancel"}
      showMessage={showLogout}
      rButtonLabel={"LogoutContainer"}
      title={"Are you sure you want to logout"}
    />
  )
}

const mapStateToProps = (state, props) => {
  return {
    showLogout: state.SideBarRdx.showLogout,
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

/**
 * Connect the component to
 * the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)
