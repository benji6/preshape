import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import omit from 'lodash.omit';
import Base from '../Base/Base';
import './Text.css';

const ComponentMap = {
  small: 'p',
  body: 'p',
  heading: 'h2',
  title: 'h1',
};

const InlineComponentMap = (props) =>
  (props.strong && 'strong') ||
  (props.small && 'small') ||
  (props.emphasis && 'em') ||
  (props.subscript && 'sub') ||
  (props.superscript && 'sup') ||
  'span';

export default class Text extends Component {
  static propTypes = {
    /**
     * Component to be used as the final element, can be a custom React
     * Component or an element string. If none is provided then a suitable
     * semantic element will be determined from the props.
     */
    Component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    /** Text alignment */
    align: PropTypes.oneOf(['start', 'middle', 'end']),
    /** How the block of text should break onto new lines. */
    breakOn: PropTypes.oneOf(['all', 'none', 'word']),
    /** SKIP */
    className: PropTypes.string,
    /** Applies emphasis styling */
    emphasis: PropTypes.bool,
    /** Text default to block display, this will apply inline display. */
    inline: PropTypes.bool,
    /** Applies a monospace font family style */
    monospace: PropTypes.bool,
    /** Size of the text */
    size: PropTypes.oneOf([
      'small',
      'body',
      'heading',
      'title',
    ]),
    /** Applies strong weight styling */
    strong: PropTypes.bool,
    /** Applies subscript baseline styling */
    subscript: PropTypes.bool,
    /** Applies superscript baseline styling */
    superscript: PropTypes.bool,
    /** Applies title casing styling */
    titlecase: PropTypes.bool,
    /** Applies uppercasing styling */
    uppercase: PropTypes.bool,
    /** Applies weak weight styling */
    weak: PropTypes.bool,
  };

  render() {
    const {
      Component,
      align,
      breakOn,
      className,
      emphasis,
      inline,
      monospace,
      size,
      strong,
      subscript,
      superscript,
      titlecase,
      uppercase,
      weak,
      ...rest
    } = this.props;

    const classes = classnames(className, 'Text', {
      'Text--emphasis': emphasis,
      'Text--monospace': monospace,
      'Text--subscript': subscript,
      'Text--superscript': superscript,
      'Text--strong': strong,
      'Text--titlecase': titlecase,
      'Text--uppercase': uppercase,
      'Text--weak': weak,
      [`Text--align-${align}`]: align,
      [`Text--break-${breakOn}`]: breakOn,
      [`Text--size-${size}`]: size,
    });

    const component = Component || (inline
      ? InlineComponentMap(this.props)
      : ComponentMap[size]);

    return (
      <Base { ...omit(rest, ['emphasis', 'subscript', 'superscript']) }
          Component={ component }
          className={ classes } />
    );
  }
}
