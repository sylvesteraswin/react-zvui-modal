import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import cn from 'classnames';

class ZvuiModalBody extends Component {
    static propTypes = {
        modalPrefix: PropTypes.string,
    };

    static contextTypes = {
        getDefaultPrefix: PropTypes.func,
    };

    render = () => {
        const {
            modalPrefix,
            className,
            children,
            ...props
        } = this.props;

        const prefix = modalPrefix || this.context.getDefaultPrefix();

        return (
            <div
                {...props}
                className={cn(className, `${prefix}-body`)}
            >
                {children}
            </div>
        );
    };
}

export default ZvuiModalBody;
