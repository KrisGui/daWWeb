import { Transport } from 'tone'

export const toggleTransport = () => {
  switch (Transport.state) {
    case ('started'):
      Transport.pause()
      console.log(Transport.state)
      break
    default:
      Transport.start()
      console.log(Transport.state)
  }
}

export const stopTransport = () => {
  Transport.stop()
  console.log(Transport.state)
}