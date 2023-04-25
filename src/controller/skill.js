const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
	create: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Skill)
			const add = await data.save(req.body)
			res.send("Created")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while creating")
		}
	},

	read: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Skill)
			const wilders = await data.find()
			res.send(wilders)
		}
		catch (err)  {
			console.log(err)
			res.send("Error while reading")
		}
	},
	update: async (req, res) => {
		try {
			const modify = await dataSource.createQueryBuilder()
								.update(Skill)
								.set(req.body)
								.where("id = :id", {id: req.body.id})
								.execute()
			res.send("Succesfully updated")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while updating")
		}

	},
	delete: async (req, res) => {

		try {
			const remove = await dataSource.createQueryBuilder()
								.delete()
								.from(Skill)
								.where("id = :id", {id: req.body.id})
								.execute()
			res.send("Succesfully deleted")
		}
		catch (err) {
			console.log(err)
			res.send("Error while deleting")
		}
	}

}