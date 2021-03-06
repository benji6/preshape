import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';
import Text from '../Text/Text';
import './Link.css';

export default class Link extends Component {
  static propTypes = {
    /** Retained active state, indicated with styling */
    active: PropTypes.bool,
    /**
     * React Router "to" prop, when applied the Component given to Text
     * is that of a RouterLink (from React Router DOM). Otherwise an
     * anchor tag is used.
     */
    to: PropTypes.string,
  };

  render() {
    const { active, to, ...rest } = this.props;
    const classes = classnames('Link', {
      'Link--active': active,
    });

    return (
      <Text color target={ to ? undefined : '_blank' } { ...rest }
          Component={ to ? RouterLink : 'a' }
          className={ classes }
          strong
          to={ to } />
    );
  }
}
