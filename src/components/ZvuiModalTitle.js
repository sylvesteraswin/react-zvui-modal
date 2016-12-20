import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import cn from 'classnames';

class ZvuiModalTitle extends Component {
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
            ...props
        } = this.props;

        const prefix = modalPrefix || this.context.getDefaultPrefix();

        return (
            <h1
                {...props}
                className={cn(className, `${prefix}-title`)} />
        );
    };
}

export default ZvuiModalTitle;
