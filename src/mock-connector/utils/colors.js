const color = c => c.toString().replace(/\#/, '')

const colors = {
  red: { background: 'red', foreground: 'white' },
  green: { background: 'green', foreground: 'white' },
  blue: { background: 'blue', foreground: 'white' },
  grey: { background: 'grey', foreground: 'black' },
  teal: { background: 'teal', foreground: 'white' },
  orange: { background: 'orange', foreground: 'white' },
  purple: { background: 'purple', foreground: 'white' },
  black: { background: 'grey', foreground: 'white' },
}

export default colors

export function colorForId(id) {
  const keys = Object.keys(colors)
  const index = id % keys.length
  return keys[index]
}

export function indexForColor(color) {
  return Object.keys(colors).indexOf(color)
}
