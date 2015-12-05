/**
 * Father
 * @description :: Model for storing Father records
 */

export default {
  schema: true,

  attributes: {

  	name: {
  		type: 'string',
  		required: true
  	},

  	user: {
      collection: 'User',
      via: 'father'
	
  	}
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
