import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema(
	{
		service: {
			type: String,
			required: true,
		},
		options: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		telephoneNumber: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('Order', OrderSchema)
