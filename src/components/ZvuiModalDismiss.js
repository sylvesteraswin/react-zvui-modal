import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const chain = (a, b) => (...args) => {
  a && a(...args);
  b && b(...args);
};

class ZvuiModalDismiss extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    component: 'button',
  };

  static contextTypes = {
    onModalHide: PropTypes.func,
  };

  render = () => {
    const {
      component: Tag, // eslint-disable-line no-unused-vars
      children,
      ...props
    } = this.props;

    return (
      <Tag {...props} onClick={chain(props.onClick, this.context.onModalHide)}>
        {children}
      </Tag>
    );
  };
}

ZvuiModalDismiss.propTypes = {
  children: PropTypes.any,
};

export default ZvuiModalDismiss;
