import { reverseString } from './lib/utils'
import io from 'socket.io-client'

let s = "this is a string"

console.log(s)

s = reverseString(s)

console.log(s)

// Create WebSocket connection.
const socket = io()


// Connection opened
socket.on('open', function (event) {
    console.log("opened")
    socket.send('Hello Server!');
});

// Listen for messages
socket.on('message', function (event) {
    console.log("messaged")
    console.log('Message from server ', event.data);
});

socket.on('news', function (event) {
    console.log(event)
})