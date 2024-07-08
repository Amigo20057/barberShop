import OrderModel from '../models/Order.js'

class OrderController {
	async createOrder(req, res) {
		try {
			const doc = new OrderModel({
				service: req.body.service,
				options: req.body.options,
				price: req.body.price,
				telephoneNumber: req.body.telephoneNumber,
			})
			const order = await doc.save()
			res.json(order)
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: 'failed to create order',
			})
		}
	}

	async getAllOrder(req, res) {
		try {
			const orders = await OrderModel.find()
			res.json(orders)
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: 'failed to get orders',
			})
		}
	}

	async getOneOrder(req, res) {
		try {
			const telephoneNumber = req.params.telephoneNumber
			const order = await OrderModel.findOne({ telephoneNumber })
			if (!order) {
				res.status(404).json({
					message: 'order not found',
				})
			}
			res.json(order)
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: 'failed to get order',
			})
		}
	}

	async deleteOrder(req, res) {
		try {
			const telephoneNumber = req.params.telephoneNumber
			const order = await OrderModel.findOneAndDelete({ telephoneNumber })
			if (!order) {
				res.status(404).json({
					message: 'order not found',
				})
			}
			res.json({
				success: true,
			})
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: 'error delete order',
			})
		}
	}
}

export default new OrderController()
