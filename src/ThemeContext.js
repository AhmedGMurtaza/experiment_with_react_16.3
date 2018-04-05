const defaultTheme = {theme:'light', supported: ['light', 'dark']};

const ThemeContext = React.createContext(defaultTheme);

export {
    data: defaultTheme,
    context: ThemeContext
};
// class ThemeProvider extends React.Component {
//     state = {data:defaultTheme};

//     render() {
//         return <ThemeContext.Provider value={this.state.data}>
//             {this.props.children}
//         </ThemeContext.Provider>
//     }
// }

