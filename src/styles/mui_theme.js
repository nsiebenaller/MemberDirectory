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
      },
      inputMarginDense: {
      },
    },
  },
  palette: {
    primary: {
      light: '#9C27B0',
      main: '#7B1FA2',
      dark: '#4A148C',
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
