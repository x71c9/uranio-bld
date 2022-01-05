/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

// import {some} from './mylib/s';

// import {MYBLL} from './custom/custom';

export const atom_book:uranio.types.Book = {
	customer:{
		plural: 'customers',
		security:{
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		properties: {
			first_name: {
				primary: true,
				type: uranio.types.BookPropertyType.TEXT,
				label: 'First name'
			},
			last_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Last name'
			}
		},
		dock:{
			url: '/customers',
			routes:{
				pippi:{
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: '/pippo',
					return: Number,
					call: async (req:uranio.types.Api.Request<'customer', 'pippi'>):Promise<number> => {
						console.log(req.route_name);
						return 899;
					}
				}
			}
		}
	},
	mykart: {
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		plural: 'mykarts',
		properties:{
			title:{
				type: uranio.types.BookPropertyType.TEXT,
				// label: `${some}-titless`
				label: `title`
			}
		},
		dock: {
			url: '/mykarts',
			auth_url: '/myauthkart'
		},
		// bll: {
		//   class: () => {
		//     console.log(some + `s`);
		//     return new MYBLL();
		//   }
		// }
	},
	product: {
		security:{
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title',
				// validation: {
				//   alphanum: true,
				//   contain_digit: false,
				//   max: 7
				// }
			},
			description: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: 'Description'
			},
			kart: {
				type: uranio.types.BookPropertyType.ATOM,
				label: 'Kart',
				atom: 'mykart',
				optional: true
			},
			users: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				label: 'Users',
				atom: 'user'
			},
			active: {
				type: uranio.types.BookPropertyType.BINARY,
				label: 'Active',
			},
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: 'Email',
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: 'Password',
			},
			type: {
				type: uranio.types.BookPropertyType.ENUM_NUMBER,
				label: 'Type Code',
				values: [1,2,3],
				optional: true,
				default: 1
			},
			type_str: {
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: 'Type String',
				values: ['Red','Green','Blue']
			},
			price: {
				type: uranio.types.BookPropertyType.FLOAT,
				label: 'Price',
				// validation: {
				//   min: 0
				// }
			},
			unit: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: 'Unit',
				// validation: {
				//   min: 0,
				//   max: 10
				// }
			},
			categories: {
				type: uranio.types.BookPropertyType.SET_NUMBER,
				label: 'Categories',
				// validation: {
				//   length: 2
				// },
				default: [1,2],
				optional: true
			},
			categories_str: {
				type: uranio.types.BookPropertyType.SET_STRING,
				label: 'Categories string',
			},
			pub_date: {
				type: uranio.types.BookPropertyType.TIME,
				label: 'Pub date',
				// validation: {
				//   min: new Date('2011-03-08')
				// }
			},
		},
		dock: {
			url: '/products',
			auth_url: '/proauths',
			routes: {
				myroute: {
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: '/myroute',
					call: async (api_request:uranio.types.Api.Request<'product','myroute'>):Promise<number> => {
						console.log(api_request);
						return 8;
					}
				}
			}
		}
	}
};
