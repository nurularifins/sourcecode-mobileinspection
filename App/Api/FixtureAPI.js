export default {
	// Functions return fixtures
	userAuth: () => {
		return {
			ok: true,
			data: {
				responseType: 'SUCCESS',
				responseCode: '1001',
				responseDesc: 'Process successed',
				userName: 'delivman',
				userID: '029kdn',
				empID: 'nsda23',
				empNIK: '121239103910210',
				empHondaID: '2410',
				empDealerID: 'bdg-001',
				empName: 'Nadiv',
				empPosition: 'DELIVMAN',
				empEmail: 'nadiv@gmail.com',
				empHpNumber: '130381220239',
				empPhotoURL: '/home/ddms/app/masterdata/upload/nsda23.jpg'
			}
		};
	},

	getAllFinco: () => {
		return {
			ok: true,
			data: require('../Fixtures/finco.json')
		};
	}
};
