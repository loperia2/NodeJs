const EventsEmitter = require('events')

customEmitter = new EventsEmitter()

customEmitter.on('res', (str) => {
  console.log('Buraya Girer', str)
})

customEmitter.emit('res', 'deneme')