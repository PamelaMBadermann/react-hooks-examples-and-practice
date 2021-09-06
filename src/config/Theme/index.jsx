import { createTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import 'typeface-montserrat';

export default createTheme(
  {
    pallete: {
      primary: {
        main: '#120A8F',
        light: '#517adb'
      },
      secondary: {
        main: '191919',
        light: '#707070'
      },
      background: {
        paper: '#fff',
        login: 'linear-gradient(45deg, #120A8F 40%, #517adb 100%)'
      }
    },
    typography: {
      fontFamily: 'Montserrat',
      fontSize: 12
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'html, body': {
            WebkitFontSmoothing: 'auto',
            padding: 0,
            margin: 0,
            backgroundColor: '#fff'
          }
        }
      },
      MuiTableCell: {
        head: {
          backgroundColor: '#F57F45',
          color: 'white'
        },
        body: {
          fontSize: 14
        }
      },
      MuiTableRow: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#fafafa'
          }
        }
      },
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          background: '#F57F45',
          borderRadius: 3,
          border: 0,
          color: 'white !important',
          height: 48,
          padding: '0 30px',
          '&:hover': {
            border: '1px solid #f15b0f',
            color: '#F57F45 !important'
          }
        },
        outlined: {
          border: '1px solid #f15b0f',
          borderRadius: 3,
          height: 48,
          color: '#F57F45',
          padding: '0 30px',
          '&:hover': {
            border: 0,
            color: 'white',
            background: '#e99a72'
          }
        }
      },
      MuiListItem: {
        '&$selected, &$selected:hover': {
          backgroundColor: '#F57F45',
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: '#fff'
          }
        }
      }
    }
  },
  ptBR
);