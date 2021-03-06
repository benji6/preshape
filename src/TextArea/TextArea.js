import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InputLabel from '../InputLabel/InputLabel';
import Text from '../Text/Text';
import './TextArea.css';

export default class TextArea extends Component {
  static propTypes = {
    /** A styled disabled state that disables all interactions */
    disabled: PropTypes.bool,
    /** A label that gives describes what the input is for */
    label: PropTypes.string,
    /** SKIP */
    margin: PropTypes.string,
    /** SKIP */
    padding: PropTypes.string,
    /** SKIP */
    paddingHorizontal: PropTypes.string,
    /** SKIP */
    paddingVertical: PropTypes.string,
  };

  static defaultProps = {
    paddingHorizontal: 'x3',
    paddingVertical: 'x2',
  };

  render() {
    const {
      disabled,
      label,
      margin,
      padding,
      paddingHorizontal,
      paddingVertical,
      ...rest
    } = this.props;

    return (
      <InputLabel
          disabled={ disabled }
          label={ label }
          margin={ margin }
          paddingHorizontal={ padding || paddingHorizontal }
          paddingVertical={ padding || paddingVertical }>
        <Text { ...rest }
            Component="textarea"
            className="TextArea"
            disabled={ disabled }
            paddingHorizontal={ padding || paddingHorizontal }
            paddingVertical={ padding || paddingVertical }
            size="small"
            strong />
      </InputLabel>
    );
  }
}
