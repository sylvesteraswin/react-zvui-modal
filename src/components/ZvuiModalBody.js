import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import cn from 'classnames';

class ZvuiModalBody extends Component {
  static propTypes = {
    modalPrefix: PropTypes.string,
  };

  static contextTypes = {
    getDefaultPrefix: PropTypes.func,
  };

  render = () => {
    const { modalPrefix, className, children, ...props } = this.props;

    const prefix = modalPrefix || this.context.getDefaultPrefix();

    return (
      <div {...props} className={cn(className, `${prefix}-body`)}>
        {children}
      </div>
    );
  };
}

ZvuiModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default ZvuiModalBody;
