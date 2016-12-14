import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import cn from 'classnames';

import ZvuiModalDismiss from './ZvuiModalDismiss'; // eslint-disable-line no-unused-vars

class ZvuiModalHeader extends Component {
    static propType = {
        closeButton: PropTypes.bool,
        modalPrefix: PropTypes.string,
    };

    static defaultProps = {
        closeButton: false,
    };

    static contextTypes = {
        onModalHide: PropTypes.func,
        getDefaultPrefix: PropTypes.func,
    }

    render = () => {
        const {
            modalPrefix,
            closeButton,
            children,
            className,
            ...props
        } = this.props;

        const prefix = modalPrefix || this.context.getDefaultPrefix();

        return (
            <div
                {...props}
                className={cn(className, `${prefix}-header`)}
            >
                {
                    closeButton &&
                    <ZvuiModalDismiss
                        className={cn(`${prefix}-close`, {
                            'outside': !children || props.outside,
                        })}
                    >
                        <span>&times;</span>
                    </ZvuiModalDismiss>
                }
                {children}
            </div>
        );
    };
}

export default ZvuiModalHeader;
