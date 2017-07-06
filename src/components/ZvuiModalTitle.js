import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import cn from 'classnames';

class ZvuiModalTitle extends Component {
  static propTypes = {
    modalPrefix: PropTypes.string,
  };

  static contextTypes = {
    getDefaultPrefix: PropTypes.func,
  };

  render = () => {
    const { modalPrefix, className, ...props } = this.props;

    const prefix = modalPrefix || this.context.getDefaultPrefix();

    return <h1 {...props} className={cn(className, `${prefix}-title`)} />;
  };
}

ZvuiModalTitle.propTypes = {
  className: PropTypes.string,
};

export default ZvuiModalTitle;
