import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ZvuiModal from '../../lib/ZvuiModal';
import { DelayRenderFactory } from 'react-teleport-me/lib/Teleport';

const NO_CONTENT = null;

const LOADED_CONTENT = (
    <div>
        <ZvuiModal.Header
            closeButton
            outside>
            <ZvuiModal.Title
                className={"f3 f2-m f1-l fw2 black-90 mv3"}>
                Title Text
            </ZvuiModal.Title>
        </ZvuiModal.Header>
        <ZvuiModal.Body>
            <h2
                className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                This is the subtitle where additional information can go if you really need it.
            </h2>
            <p
                className="measure lh-copy">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </ZvuiModal.Body>
    </div>
);

class App extends Component {

    static propTypes = {
        enableLoading: PropTypes.bool,
    };

    static defaultProps = {
        enableLoading: true,
    };

    state = {
        open: false,
        openStatic: false,
        openDynamic: false,
        loaded: false,
        content: NO_CONTENT,
    };

    close = () => {
        this.setState({
            open: false,
            openStatic: false,
            openDynamic: false,
            loaded: false,
        }, () => {
            setTimeout(() => {
                this.setState({
                    content: NO_CONTENT,
                });
            }, 100);
        })
    };

    openStatic = () => {
        this.setState({
            openStatic: true,
            content: LOADED_CONTENT,
        });
    };

    openDynamic = () => {
        this.setState({
            openDynamic: true,
            content: null,
        }, () => {
            if (this.props.enableLoading) {
                setTimeout(() => {
                    this.setState({
                        loaded: true,
                        content: LOADED_CONTENT,
                    });
                }, 2000);
            }
        });
    };

    render = () => {
        return (
            <section
                className="app">
                <ZvuiModal
                    active={this.state.openStatic}
                    onHide={this.close}>
                    {this.state.content}
                </ZvuiModal>
                <ZvuiModal
                    full={false}
                    loader={this.props.enableLoading}
                    loadComplete={this.state.loaded}
                    active={this.state.openDynamic}
                    onHide={this.close}>
                    {this.state.content}
                </ZvuiModal>

                <article
                    className="mw7 center ph5 ph5-ns tc br2 pv5 bg-washed-green dark-green mv3">
                    <h1
                        className="fw6 f3 f2-ns lh-title mt0 mb3">
                        This is a example component.
                    </h1>
                    <h2
                        className="fw2 f4 lh-copy mt0 mb3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </h2>
                    <p
                        className="fw1 f5 mt0 mb3">
                        Stet clita kasd gubergren, no sea takimata sanctus.
                    </p>
                    <div>
                        <a
                            className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mv3 pointer mr3"
                            onClick={this.openStatic}>
                            Open Modal
                        </a>
                        <a
                            className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib mv3 pointer"
                            onClick={this.openDynamic}>
                            Open Modal W/ Loading
                        </a>
                    </div>
                </article>
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
