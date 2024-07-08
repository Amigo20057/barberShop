import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import orderController from './controllers/orderController.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

mongoose
	.connect(
		'mongodb+srv://admin:wwwwww@cluster0.elojd0q.mongodb.net/barbershop?retryWrites=true&w=majority&appName=Cluster0'
	)
	.then(() => {
		console.log('DB OK')
	})
	.catch(err => {
		console.log('DB ERROR', err)
	})

const app = express()
app.use(cors())
app.use(express.json())

const frontendPath = path.join(__dirname, '../frontend/pages')
app.use(express.static(frontendPath))
app.use('/styles', express.static(path.join(__dirname, '../frontend/styles')))
app.use('/script', express.static(path.join(__dirname, '../frontend/script')))
app.use('/images', express.static(path.join(__dirname, '../frontend/images')))
app.use('/icons', express.static(path.join(__dirname, '../frontend/icons')))

app.post('/order', orderController.createOrder)
app.get('/order', orderController.getAllOrder)
app.get('/order/:telephoneNumber', orderController.getOneOrder)
app.delete('/order/:telephoneNumber', orderController.deleteOrder)

app.listen(4444, err => {
	if (err) {
		console.log(err)
	}
	console.log('SERVER OK')
})
