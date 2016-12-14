import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars

const chain = (a, b) => (...args) => {
    a && a(...args);
    b && b(...args);
};

class ZvuiModalDismiss extends Component {
    static propTypes = {
        component: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),
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
            <Tag
                {...props}
                onClick={chain(props.onClick, this.context.onModalHide)}
            >
                {children}
            </Tag>
        );
    };
}

export default ZvuiModalDismiss;
