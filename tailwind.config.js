module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // backgroundColor: {
      //   skin: {
      //     base: 'var(--color-bg-base)'
      //   }
      // }
    }
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('children', '& > *')
    }
  ]
}
