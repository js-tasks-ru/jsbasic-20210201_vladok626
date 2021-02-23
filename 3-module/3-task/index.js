function camelize(str) {
  return str.split('-')
   .map((word, index) => index ? (word = word.split(''), word.shift().toUpperCase() + word.join('')) : word)
    .join('')
}
