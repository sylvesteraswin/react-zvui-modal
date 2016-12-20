# react-zvui-modal

This inspired from a jQuery library [jschr's bootstrap modal](http://jschr.github.io/bootstrap-modal/). A equivalent to Twitter Bootstrap's Modal component in a React friendly way.

Forked some of the basic implementations from the original [Bootstrap team](https://github.com/react-bootstrap/react-overlays/blob/master/src/Modal.js).

## Features
- Stackable.
- Loading Animation.
- Switchable content while enabling modal.
- Easy props configuration.

## Use

```js
import ZvuiModal from 'react-zvui-modal';
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
```

`` Styling
You are free to use whatever styles you want inside the modal.

But for basic styles of the modal and wrappers please include the library css like so

```js
import 'react-zvui-modal/build/react-zvui-modal.css';
```

```less
import (less) './react-zvui-modal/build/react-zvui-modal.css';
```

## Component
### Props
* `show`: Boolean, default `false`.
* `small`, `sm`, `large`, `lg`, `full`: Boolean , default `false`.
* `backdrop`: Boolean or String, default `true`.
* `loader`: Boolean, should the modal show a loader. default `false`.
* `loadComplete`: If `loader` is `true` then this needs to set to `true` for the Modal to show the content. default `false`.
* `keyboard`: Boolean. default `true`.
* `animate`: Boolean. default `true`.
* `transition`: componentOrElement. default `true`.
* `container`: componentOrElement or Function. default `window`.
* `onShow`: Function. default `null`.
* `onHide`: Function. default `null`.
* `onEnter`: Function. default `null`.
* `onEntering`: Function. default `null`.
* `onEntered`: Function. default `null`.
* `onExit`: Function. default `null`.
* `onExiting`: Function. default `null`.
* `onExited`: Function. default `null`.
* `modalPrefix`: String. default `null`.
* `dialogClassName`: String. default `null`.

### ZvuiModal.Title
This is a modal title component.

### ZvuiModal.Body
This is a modal body component.
