import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import Transition from '../base/Transition'; //eslint-disable-line no-unused-vars

const ZvuiModalFade = (props) => (
    <Transition
        {...props}
        className={'fade'}
        enteredClassName={'in'}
        enteringClassName={'in'}
    />
);

export default ZvuiModalFade;
