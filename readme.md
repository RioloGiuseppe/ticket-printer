# Ticket generator for 80mm printer

How to make sample ticket

```sh
git clone https://github.com/RioloGiuseppe/ticket-printer.git
cd titicket-printer
npm i   # Install dependencies
tsc     # You need typescript installed (npm i typescript)

node build/index.js # Run the demo. It will create a file 'ticket.pdf'
```