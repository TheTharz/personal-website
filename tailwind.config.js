module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // lato: ['lato', 'sans-serif'],
        inter : ['inter', 'sans-serif']
      },
      colors: {
        background: '#212222',
        neutralText: '#eae3d9',
        blue: '#165aaa',
        brightWhite: '#fbf5ec',
        cardBlue : "#001933"
      },
    },
  },
  plugins: [require("daisyui")],
};
