const color = c => c.toString().replace(/\#/, '')

const colors = {
  red: { background: 'red', foreground: 'ffffff' },
  green: { background: 'green', foreground: 'ffffff' },
  blue: { background: 'blue', foreground: 'ffffff' },
  grey: { background: 'grey', foreground: color(grey[600]) },
  teal: { background: 'teal', foreground: 'ffffff' },
  orange: { background: 'orange', foreground: 'ffffff' },
  purple: { background: 'purple', foreground: 'ffffff' },
  black: { background: 'grey', foreground: 'ffffff' },
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
