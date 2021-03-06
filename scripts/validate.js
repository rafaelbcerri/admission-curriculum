const parse = require('./parse')

parse(
  [
    { type: 'topic', id: `admission-es`, locale: 'es-ES' },
    { type: 'topic', id: `admission-pt`, locale: 'pt-BR' }
  ],
  true
)
  .then(results => {
    const hasErrors = results.reduce(
      (memo, { result }) => memo || result instanceof Error,
      false
    )
    process.exit(hasErrors ? 1 : 0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
