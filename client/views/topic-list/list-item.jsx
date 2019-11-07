import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/core/styles'

import {
  topicPrimaryStyle,
  topicSecondaryStyle,
} from './styles'

const Primary = ({ classes, topic }) => {
  return (
    <div className={classes.root}>
      <span className={classes.tab}>{topic.tab}</span>
      <span className={classes.title}>{topic.title}</span>
    </div>
  )
}

Primary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const Secondary = ({ classes, topic }) => (
  <span className={classes.root}>
    <span className={classes.userName}>{topic.username}</span>
    <span>
      <span className={classes.accentColor}>{topic.reply_count}</span>
      <span>/</span>
      <span className={classes.count}>{topic.visit_count}</span>
    </span>
    <span>创建时间：{topic.create_at}</span>
  </span>
)

Secondary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const StyledTopicPrimary = withStyles(topicPrimaryStyle)(Primary)
const StyledTopicSecondary = withStyles(topicSecondaryStyle)(Secondary)

const TopicListItem = ({ onClick, topic }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      {/* <Avatar src={topic.image} /> */}
      <HomeIcon />
    </ListItemAvatar>
    <ListItemText
      primary={<StyledTopicPrimary topic={topic} />}
      secondary={<StyledTopicSecondary topic={topic} />}
    />
  </ListItem>
)

TopicListItem.propTypes = {
  onClick: PropTypes.func,
  topic: PropTypes.object.isRequired,
}

export default TopicListItem