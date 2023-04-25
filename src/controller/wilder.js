const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
	create: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Wilder)
			const add = await data.save(req.body)
			res.send("Created")
		}
		catch {
			res.send("Error while creating")
		}
	},

	read: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Wilder)
			const wilders = await data.find()
			res.send(wilders)
		}
		catch {
			res.send("Error while reading")
		}
	},
	update: async (req, res) => {
		try {
			const modify = await dataSource.createQueryBuilder()
								.update(Wilder)
								.set(req.body)
								.where("id = :id", {id: req.body.id})
								.execute()
			res.send("Succesfully updated")
		}
		catch {
			res.send("Error while updating")
		}

	},
	delete: async (req, res) => {

		try {
			const remove = await dataSource.createQueryBuilder()
								.delete()
								.from(Wilder)
								.where("id = :id", {id: req.body.id})
								.execute()
			res.send("Succesfully deleted")
		}
		catch {
			res.send("Error while deleting")
		}
	}

}