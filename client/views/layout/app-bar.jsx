import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

class MainAppBar extends Component {
  constructor() {
    super()
    this.goToIndex = this.goToIndex.bind(this)
    this.goToUser = this.goToUser.bind(this)
    this.goToCreate = this.goToCreate.bind(this)
  }

  componentDidMount() {

  }

  goToUser() {
    // const { location } = this.props
    // if (location.pathname !== '/user/login') {
    //   if (this.props.user.isLogin) {
    //     this.context.router.history.push('/user/info')
    //   } else {
    //     this.context.router.history.push({
    //       pathname: '/user/login',
    //       search: `?from=${location.pathname}`,
    //     })
    //   }
    // }
  }

  goToCreate() {
    // this.context.router.history.push('/topic/create')
  }

  goToIndex() {
    // this.context.router.history.push('/')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="primary" aria-label="Menu" onClick={this.goToIndex}>
              <HomeIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              zxhnext
            </Typography>
            {/* {
              user.isLogin ?
                <Button raised color="accent" onClick={this.goToCreate}>
                  新建话题
                </Button> :
                null
            } */}
            <Button color="primary" onClick={this.goToUser}>
              登录
              {/* {user.isLogin ? user.info.loginName : '登录'} */}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
}

export default withStyles({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
})(MainAppBar)
