module.exports = {
  purge: {
    // enabled: true,
    content: [
    ],
    css: [
        './src/assets/styles/custom.css'
    ],
    options: {
      safelist: [
      ],
      safelistPatterns: [
      ],
      keyframes: true,
      fontFace: true,
    },
    extract: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  },
  important: true,
  theme: {
    screens: { // specifying screens is mandatory in every tailwind.config file
      xs: "480px",   //min-width 480px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px",
    },
    colors: {
      transparent: "transparent",
      current: 'currentColor',
      white: {
        50 : '#FFFFFF',
        100:"#0000000F",
        150:"#E0E0E0",
        200:"#F7FAFE",
        250:"#EAFOF7",
        300:"#D0D0D0",
        350:"#F7F7F7",
        400:"#f3f5f9"

      },
      
      darkGrey: {
        50: "#333333",
        100:"#585858",
        150:"#5C758E",
        200:"#9398A2",
      },
      darkBrown:{
        50:"#585858",
        100:"#0E1D2C",
        150:"#212F3D",
        200:"#959595"

      },

      darkBlue : {
        50:"#0FC2E9",
        100:"#789CBF",
        150:"#016dd9",
        200:"#0E1D2C",
        250:"#7fb5ec"

      },
      red:{
        50:"#d90101"

      },
    },

    fontSize: { // `[fontSize, { letterSpacing, lineHeight }]`

      'ft1': ['20px', { //Poppins Regular
        letterSpacing: '0em', // for SGR
        lineHeight: '26px',
      }],
      'ft2': ['18px', { //for H2
        letterSpacing: '0em',
        lineHeight: '27px',
      }],
      'ft3': ['22px', {
        letterSpacing: '0em',
        lineHeight: '33px', // for H1
      }],
      'ft4': ['16px', {
        letterSpacing: '0em',
        lineHeight: '25px', // for H3
      }],
      'ft5': ['14px', {
        letterSpacing: '0em',
        lineHeight: '21px', // Body filled and body active and body-unfilled
      }],
      'ft6': ['16px', {
        letterSpacing: '0em',
        lineHeight: '25px', // poopins,medium
      }],
      'ft7': ['12px', {
        letterSpacing: '0em',
        lineHeight: '18px', // subtext 
      }],
      'ft8': ['29px', {
        letterSpacing: '0em',
        lineHeight: '33px', // whiskey girl
      }],
      'ft9': ['18px', { //H3
        letterSpacing: '0em',
        lineHeight: '24px', // menu active
      }],
      'ft10': ['14px', {
        letterSpacing: '0em',
        lineHeight: '19px', //sub menu active and submenu deactive
      }],
      'ft11': ['18px', {
        letterSpacing: '0em',
        lineHeight: '24px', // menu deactive and open sans semibold
      }],
      'ft12': ['14px', {
        letterSpacing: '0em',
        lineHeight: '21px', // poppins regular and poppins semibold
      }],
    },


    fontFamily: {
      PoppinsBold: [
        "Poppins-Bold", 'sans-serif'
      ],
      PoppinsSemiBold: [
        "Poppins-SemiBold", 'sans-serif'
      ],
      PoppinsRegular: [
        "Poppins-Regular", 'sans-serif'
      ],
      PoppinsMedium: [
        "Poppins-Medium", 'sans-serif'
      ],
      SpaceGroteskRegular:[
        "SpaceGrotesk-Regular",'sans-serif'
      ],
      whiskeygirlscond:[
        "whiskeygirlscond",'sans-serif'
      ],
    },


    boxShadow: {
      // none: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
      xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
      DEFAULT: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      '2xl': "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)",
      lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
      md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
      outline: "0px 0px 0px 3px rgba(0, 0, 0, 0.5)"
    },

    backgroundImage: theme => ({
      'dummy': "url('/public/images/Mask-Group-3.png')", //tailwind class => bg-dummy
    }),

    extend: { //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: { //common for width, height, padding, margin
        4.7: "19px",         //p-4.5 , m-4.5 , w-4.5, h-4.5
        8.6: "34.5px",
        2.7:"11px",
        9.5: "38px",
        11: "44px", //divide the required value by 4 to get the key name (46/4 = 11.5)
        57.5: "230px",
        61: "244px",
        65: "260px",
        480:"1920px",
        17.5:"70px",
        393.2:"1573px",
        7.8:"31.5px",
        66.2:"265px",
        348:"1392px",
        22.5:"90px",
        3.5:"14px",
        59.2:"237px",
        15.2:"61px",
        5.5:"22px",
        5:"20px",
        4.2:"17px",
        4.5:"18px",
        5.2:"21px",
        10.2:"41px",
        2.3:"9.5px",
        8.2:"33px",
        19:"76px",
        123.2:"493px",
        58:"232px",
        17.6:"70.7px",
        12.3:"49.5px",
        18.2:"73px",
        43.2:"173px",
        70.7:"283px",
        14.5:"58px",
        103.7:"415px",
        64.5:"258px",
        55:"220px",
        380.5:"1522px",
        27.5:"110px",
        19.5:"78px",
        87.2:"349px",
        198.7:"795px",
        28.7:"115px",
        13.2:"53px",
        54.7:"219px",
        12.5:"50px",
        50:"200px",
        102.5:"410px",
        94.2:"377px",
        240:"960px",
        2.2:"9px",
        75.5:"302px",
        122:"488px",
        7.5:"30px",
        298.5:"1194px",
        167.5:"670px",
        65.5:"262px",
        177.2:"709px",
        29:"116px",
        10.5:"42px",
        131.5:"526px"


  
        







        

      },
      borderWidth: {

      },
      borderRadius: { //same as border width
        '5-5xl': "34px",
      },
    },
  },

  variants: { //there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
    width: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
    transform: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "group-hover"],
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      grayscale: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
  darkMode: 'class'
}
