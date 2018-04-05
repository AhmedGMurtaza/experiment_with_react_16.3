# Experiments with new context API

This is my explorations  using new React Context Api.

This experimentation try work with multiples context and discovery what it's best approach.

![Screenshot](https://raw.githubusercontent.com/stvkoch/experiment_with_react_16.3/master/src/screenshot.png)


## install


```
git clone this rep
yarn install
yarn start
```

WIP

## What you will see:

### app.js

Add multiple context

```
class App extends React.Component {
  render() {
    return (
      <RouterContextContainer>
        <UserContextContainer>
          <ProductContextContainer>
            <Toobar />
            <Content />
          </ProductContextContainer>
        </UserContextContainer>
      </RouterContextContainer>
    );
  }
}
```

### ContextContainer/Product.js

```
const Context = createContext()
const {Provider, Consumer} = Context;

class Product extends React.Component{
    state = initialState;
    action = {};
    render() {
        return <Provider value={createValue(this.state, this.action)}>{this.props.children}</Provider>;
    }
}

export { Product as default, Consumer };
```


### Toolbar.js

RouterConsumer expose actions to handler route

```
<RouterConsumer>
{({action}) => <React.Fragment>
    <Button color="inherit" onClick={()=>action.go('/users')}>Users</Button>
    <Button color="inherit" onClick={()=>action.go('/products')}>Products</Button>
</React.Fragment>}
</RouterConsumer>
```


### Content.js

```
import {Consumer as RouterConsumer, Route} from './ContextContainer/Router';

export default function Content(props) {
    return <Paper style={{padding:20, margin: 20}}>
        <RouterConsumer>
            {({state, action}) => {
                return <React.Fragment>
                    <Route path="/"><div>main</div></Route>
                    <Route path="/users"><UserContainer /></Route>
                    <Route path="/products"><ProductContainer /></Route>
                </React.Fragment>
            }}
        </RouterConsumer>
    </Paper>;
}
```

### Route is something like

Consumer come from Router Context

```
function Route(props) {
    return (<Consumer>
        {({state})=> {
            const re = pathToRegexp(props.path);
            if (re.test(state.url)) return props.children;
        }}
    </Consumer>);
}
```