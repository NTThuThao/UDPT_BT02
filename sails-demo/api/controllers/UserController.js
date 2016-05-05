module.exports = {
	signup: function(rep, res){
		var Password = required('machinepack-passwords');
		Passwords.encryptPassword({
			passwords: rep.param'password',
			difficulty: 10,
		}).exec({
			error: function(err){

			},
			success: function(encryptPassword){
				return res.ok();
			},
		});
	}
};