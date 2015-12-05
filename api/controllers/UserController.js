/**
 * UserController
 * @description :: Server-side logic for manage users
 */

export default {
	list: function (req, res) {
		User.find().populate('father').exec(function(err, user){
			if (err) console.log(err);

			return res.json({
				user: user
			});
		});
	}
};
