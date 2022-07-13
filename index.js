const express = require('express')
const uuid = require('uuid')

const app = express()
app.use(express.json())

const port = 3000

const orders = []

const checkUpOrder = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Not found!" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

const method = (request, response, next) => {
    const method = request.method
    const url = request.path
    console.log("Method:", "[", method, "]", "-", "URL:", url)

    next()
}

app.get('/order', method, (request, response) => {
    return response.status(201).json(orders)
})

app.get('/order/:id', checkUpOrder, (request, response) => {
    const index = request.orderIndex

    orderSpecific = orders[index]

    return response.json(orderSpecific)
})


app.post('/order', method, (request, response) => {
    const { products, name, price } = request.body

    const orderProducts = { id: uuid.v4(), products, name, price, status: "Em preparação!" }
    orders.push(orderProducts)

    return response.status(201).json(orderProducts)
})

app.put('/order/:id', checkUpOrder, method, (request, response) => {
    const id = request.orderId
    const { products, name, price } = request.body


    const upOrder = { id, products, name, price, status: "Em preparação!" }

    const index = request.orderIndex

    orders[index] = upOrder

    return response.json(upOrder)
})

app.delete('/order/:id', checkUpOrder, method, (request, response) => {
    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()
})

app.patch('/order/:id', checkUpOrder, method, (request, response) => {
    const index = request.orderIndex
    const { id, products, name, price } = orders[index]

    const upOrderTwo = { id, products, name, price, status: "Pronto!" }

    orders[index] = upOrderTwo

    return response.json(upOrderTwo)

})


app.listen(port, () => {
    console.log(`😎 Server started on port ${port}`)
})