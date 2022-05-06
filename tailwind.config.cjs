const Colors = {
  "black": "#252A36",
  "darkgray": "#4C6D93",
  "gray": "#7C7F86",
  "lightgray": "#E5EBF2",
  "whitesmoke": "#F6F7F7",
  "whitesmoke-200": "#C5C6C6",
  "whitesmoke-300": "#ACADAD",
  "yellow": "#FABC06",
  "lightyellow": "#FCD76A",
  "active-yellow": "#BC8D04",
  "orange": "#FE7621",
  "lightorange": "#FFB78A",
  "active-orange": "#CA5004",
  "red": "#FC4059",
  "lightred": "#FFA4B0",
  "active-red": "#D3223A",
  "purple": "#BA46DF",
  "lightpurple": "#F4BFFF",
  "active-purple": "#8502AF",
  "blue": "#1286F6",
  "lightblue": "#CDF2FF",
  "active-blue": "#0062C0",
  "green": "#2AB52E",
  "lightgreen": "#C3FFC5",
  "active-green": "#029F07",
  "grayblue": "#4C6D93",
  "lightgrayblue": "#5F82AB",
};

const ThemeColors = {
  "primary": Colors.blue,
  "primary-focus": Colors.purple,
  "primary-content": Colors.whitesmoke,

  "secondary": Colors.green,
  "secondary-focus": Colors.purple,
  "secondary-content": Colors.whitesmoke,

  "accent": Colors.yellow,
  "accent-focus": Colors.purple,
  "accent-content": Colors.whitesmoke,

  "neutral": Colors.lightgrayblue,
  "neutral-focus": Colors.grayblue,
  "neutral-content": Colors.whitesmoke,

  "base-100": Colors.whitesmoke,
  "base-200": Colors["whitesmoke-200"],
  "base-300": Colors["whitesmoke-300"],
  "base-content": Colors.black,

  "info": Colors.blue,
  "info-content": Colors.whitesmoke,

  "success": Colors.green,
  "success-content": Colors.whitesmoke,

  "warning": Colors.orange,
  "warning-content": Colors.whitesmoke,

  "error": Colors.red,
  "error-content": Colors.whitesmoke,
};

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px'
      },
      borderRadius: {
        'large': '12px'
      },
      fontFamily: {
        'mono': ['PT Mono'],
        'space': ['Space Grotesk']
      },
      fontSize: {
        '1.5xl': ['18px', '34.47px'],
        '3xl': ['21px', '33.6px'],
        '4xl': ['32px', '36.32px'],
        '5xl': ['48px', '54.48px'],
        '8xl': ['76px', '82.5px']
      },
      colors: {
        'black': '#252A36',
        'darkgray': '#51555E',
        'gray': '#7C7F86',
        'lightgray': '#C6CAD3',
        'whitesmoke': '#F6F7F7',
        'yellow': '#FABC06',
        'lightyellow': '#FCD76A',
        'active-yellow': '#BC8D04',
        'orange': '#FE7621',
        'lightorange': '#FFB78A',
        'active-orange': '#CA5004',
        'red': '#FC4059',
        'lightred': '#FFA4B0',
        'active-red': '#D3223A',
        'purple': '#BA46DF',
        'lightpurple': '#F4BFFF',
        'active-purple': '#8502AF',
        'blue': '#1286F6',
        'lightblue': '#CDF2FF',
        'active-blue': '#0062C0',
        'green': '#2AB52E',
        'lightgreen': '#C3FFC5',
        'active-green': '#029F07'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        hyper: {
          ...ThemeColors
        }
      }
    ]
  }
};
