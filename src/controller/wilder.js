const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
	create: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Wilder)
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
			const data = await dataSource.getRepository(Wilder)
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
								.update(Wilder)
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
								.from(Wilder)
								.where("id = :id", {id: req.body.id})
								.execute()
			res.send("Succesfully deleted")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while deleting")
		}
	},
	addSkill: async (req, res) => {
		try {
			const wilder = await dataSource
							.getRepository(Wilder)
							.findOneBy({id: req.body.wilderId});
			const skill = await dataSource
							.getRepository(Skill)
							.findOneBy({name: req.body.skillName});
			wilder.skills = [...wilder.skills, skill]
			
			await dataSource.getRepository(Wilder).save(wilder)
			res.send("Skill added")
		}
		catch (err) {
			console.log(err)
			res.send("Error while adding skill")
		}

	}

}