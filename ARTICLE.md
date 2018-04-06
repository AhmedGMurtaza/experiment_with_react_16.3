# How to build your own React-Router with new React Context Api


React Context is not something new for react.js developers, but it was something that was always used by the most courageous (React-Redux, React-Router, ...), even in the documentation was itself discounted. However this has changed with the release of the new version of React 16.3 which came with an official version of a new API to work with context.

First I would like to apologize for this unpretentious article, it was written based on my latest experiments on the new version of React and the code you found here was extracted from it. React-Router is much more than what I'm presenting it, but this example will explain how you can develop something similar using the new context api.



## Contexts


Contexts are a way to pass states from top to bottom (parent to grandchildren) without having to propagate these states to intermediate components (children).


## New React Context API 

The new React Context API has three main parts:

_From [dailyjs](https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b)_:

- "React.createContext which is passed the initial value (and optionally a fancy opt-out function that uses a bitmask). This returns an object with a Provider and a Consumer"
- "The Provider component is used higher in the tree and accepts a prop called value (which can be anything)."
- "The Consumer component is used anywhere below the provider in the tree and accepts a prop called “children” which must be a function that accepts the value and must return a react element (JSX)."



## Building your own React-Router

The code of the example that I will demonstrate has a little more than 40 lines.

## What we want?

We will want our application to show components when a given route matches the url.

Something like this:

```
<Route path="/"><DashboardContainer /></Route>
<Route path="/users"><UserContainer /></Route>
<Route path="/products"><ProductContainer /></Route>
```

And, of course, we want to be able to navigate to a certains url:

```
<Link path="/users">Users</Link>
```


## Dependencies


I will not reinvent the wheel and we will use most the same dependencies as the React-Router itself.

To deal with pushstate we'll use [browser-history] (https://www.npmjs.com/package/browser-history) instead of [history] (https://www.npmjs.com/package/history)

```
yarn add browser-history 
```

To address the routes we will use [pathToRegexp] (https://www.npmjs.com/package/path-to-regexp)

```
yarn add path-to-regexp
```


## Create a Router context container


First all, we need create a Context Container file where we will management the router state and create the actions to navegate between urls.


In Router.js file we will put the code:

```
import React, { createContext } from 'react';
import history from 'browser-history';

const initialState = {
    url: window.location.pathname
};

const Context = createContext()
const {Provider, Consumer} = Context;
```

The first 9 lines import necessary libs, initialize state, create a context object and extract Provider and Consumer from a Context.

We will use the Provider to keep the context and export the Consumer to be used by App to have access to the state and actions.


The Router class could be this way:

```
class Router extends React.Component{
    state = initialState;

    action = {
        go: (url) => this.setState(
                state => ({...state, url}),
                () => history(url)
            )
    };

    componentDidMount() {
        history((e, url) => this.setState(state=>({...state, url})));
    }

    render() {
        return <Provider value={{state: this.state, action:this.action}}>{this.props.children}</Provider>;
    }
}

export { Router as default, Consumer,  };
```


## Using Router Context Provider


In your app you could be have something like this, and start use the Router:

```
import Router from './Router';
//... import react, you toolbar and your content component
class App extends React.Component {
  render() {
    return (
      <Router>
        <Toobar />
        <Content />
      </Router>
    );
  }
}

export default App;
```

Now you can use Route and Link components, but first let's implement this two first.


## Route Component

Create a Route.js file with this content.

```
import React from 'react';
import pathToRegexp from 'path-to-regexp';

import { Consumer } from './Router';

export default function Route(props) {
    return (<Consumer>
        {({state})=> {
            const re = pathToRegexp(props.path);
            if (re.test(state.url)) return props.children;
        }}
    </Consumer>);
}
```

## Using your Route Component

For example, in your Content Component, you could have this code:

```
//...
import { Consumer } from './Router';
import Route from './Route';

export default function Content(props) {
    return <Paper style={{padding:20, margin: 20}}>
        <Consumer>
            {({state, action}) => {
                return <React.Fragment>
                    <Route path="/"><div>main</div></Route>
                    <Route path="/users"><UserContainer /></Route>
                    <Route path="/products"><ProductContainer /></Route>
                </React.Fragment>
            }}
        </Consumer>
    </Paper>;
}
```

As you see in the implementation of Route component 'path' will be tested to see if match with current state of Router Context Provider.


# Link Component

To navegate between urls you can do this using actions expose by Router Consumer directly:

```
import { Consumer } from './Router';
//...
<Consumer>
    {({action}) => <React.Fragment>
        <Button color="inherit" onClick={()=>action.go('/users')}>Users</Button>
        <Button color="inherit" onClick={()=>action.go('/products')}>Products</Button>
    </React.Fragment>}
</Consumer>
```

Or you can implement your own Link Component like this:


```
import React from 'react';
import { Consumer } from './Router';
export default function Link({path, ...props}) {
    return (<Consumer>
        {({action})=> <a {...props} onClick={()=>action.go(path)} />}
    </Consumer>);
}
```

This kind implementations, using context, it's not new, they exists in a lot of famous libs, but I hope help you to demostrate a litle bit how you can use the New React Context API and how easy it's to use in your own projects. 


You will find this code in my repository:

https://github.com/stvkoch/experiment_with_react_16.3

