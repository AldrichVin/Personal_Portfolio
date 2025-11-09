module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0A66C2'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15,23,42,0.06)'
      },
      borderRadius: {
        xl: '14px'
      }
    }
  },
  plugins: []
}
