import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
}

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
            <IconButton color="contrast" aria-label="Menu" onClick={this.goToIndex}>
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
            <Button color="contrast" onClick={this.goToUser}>
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
  location: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
