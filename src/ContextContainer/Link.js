import React from 'react';
import { Consumer } from './Router';
function buttonHtml(props) {
    return (<button {...props} />);
}
export default function Link({path, component, ...props}) {
    const Bnt = component || buttonHtml;
    return (<Consumer>
        {({action})=> <Bnt {...props} onClick={() => action.go(path)} />}
    </Consumer>);
}
