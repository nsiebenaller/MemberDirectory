import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'

// style overrides placed here
const customTheme = {
  overrides: {
    MuiTab: {
      root: {
        color: '#ffffffb3',
      },
      textColorInherit: {
        color: '#ffffffb3',
      },
      selected: {
        color: 'white',
      },
    },
    MuiButton: {
      colorInherit: {
        color: '#FFF',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 14,
        marginBottom: 10,
      },
    },
    MuiInput: {
      root: {
        fontSize: 18,
      },
      input: {
        fontSize: 16,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 16,
      },
    },
    MuiOutlinedInput: {
      root: {
        fontSize: 16,
        height: 45,
      },
      inputMarginDense: {
        padding: 13,
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
  palette: {
    primary: {
      light: '#14b4fc',
      main: '#03a9f4',
      dark: '#0398db',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#ef2e63',
      main: '#ed1651',
      dark: '#d91148',
      contrastText: '#FFFFFF',
    },
    error: {
      light: '#ef2e63',
      main: '#ed1651',
      dark: '#d91148',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontSize: 16,
    useNextVariants: true,
    fontFamily: [
      'Roboto',
    ],
  },
}

const theme = createMuiTheme(customTheme)
export default theme
