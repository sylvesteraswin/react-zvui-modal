import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ZvuiModal from '../../lib/ZvuiModal';

class App extends Component {

    state = {
        open: false,
    };

    close = () => {
        this.setState({
            open: false,
        })
    };

    open = () => {
        this.setState({
            open: true,
        })
    };

    render = () => {
        return (
            <section
                className="app">
                <ZvuiModal
                    medium
                    show={this.state.open}
                    onHide={this.close}>
                    <ZvuiModal.Header closeButton outside>
                        <ZvuiModal.Title>
                            Hello There
                        </ZvuiModal.Title>
                    </ZvuiModal.Header>
                    <ZvuiModal.Body>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                        <p>I am here and doing awesome</p>
                    </ZvuiModal.Body>
                </ZvuiModal>

                <button
                  className='f6 link dim br3 ph3 pv2 mb2 dib white bg-black'
                  onClick={this.open}
                >
                  Open Modal
                </button>
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
