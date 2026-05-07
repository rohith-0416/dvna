module.exports.calc = function (req, res) {
	if (req.body.eqn) {
		try {
			res.render('app/calc', {
				output: mathjs.parse(req.body.eqn).toString()
			})
		} catch (e) {
			res.render('app/calc', {
				output: 'Invalid math string: ' + e.message
			})
		}
	} else {
		res.render('app/calc', {
			output: 'Enter a valid math string like (3+3)*2'
		})
	}
}