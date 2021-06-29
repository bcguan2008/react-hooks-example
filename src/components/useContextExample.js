import React, { useState, useContext } from 'react';

const initialState = { count: 0 }

const themes = {
    light: {
        foreground: "#000000",
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};

const ThemeContext = React.createContext({
    theme: themes.light,
    toggle: () => { }
});


const useReducerExample = function () {

    const [theme, setTheme] = useState(themes.light);

    return (<div className='title'>
        <p>Demo4 - useContext</p>
        <div className='action'>
            <ThemeContext.Provider value={{
                theme,
                toggle: () => {
                    setTheme(theme === themes.dark ? themes.light : themes.dark);
                }
            }}>
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    </div>)
}

const Toolbar = () => {
    return <Operation />
}

const Operation = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (<div>
        <button
            style={{
                background: theme.background,
                color: theme.foreground
            }}
            onClick={() => {
                toggle()
            }}>light
        </button>

        <button
            style={{
                background: theme.background,
                color: theme.foreground
            }}
            onClick={() => {
                toggle()
            }}>dark
        </button>
    </div>)
}


export default useReducerExample;