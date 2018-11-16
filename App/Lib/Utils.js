import { isNil, isEmpty } from 'ramda';
// import API from '../Services/Api'
import DeviceInfo from 'react-native-device-info';
import { Platform, PixelRatio, Dimensions } from 'react-native';

// export function formatRp(num, fixed = 0) {
// 	num = parseFloat(num);
// 	var p = num.toFixed(fixed).split('.');
// 	return (
// 		'Rp. ' +
// 		p[0]
// 			.split('')
// 			.reverse()
// 			.reduce(function(acc, num, i, orig) {
// 				return num == '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
// 			}, '') +
// 		(isNil(p[1]) ? '' : '.' + p[1])
// 	);
// }

export function formatRp(num, fixed = 0) {
	num = parseFloat(num);
	var p = num.toFixed(fixed).split('.');
	return (
		'Rp ' +
		p[0]
			.split('')
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num == '-' ? acc : num + (i && !(i % 3) ? '.' : '') + acc;
			}, '') +
		(isNil(p[1]) ? '' : ',' + p[1])
	);
}

export function toTitleCase(str) {
	if (isNil(str) || isEmpty(str)) return '';
	let newstr = str.split('_').join(" ");
	return newstr.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

// export function uploadImage(type, to, data) {
// 	const api = API.create(type).api
// 	let urlUpload
// 	switch (to) {
// 		case "customer":
// 			urlUpload = "/customer.photo.post"
// 			break;
// 		case "ktp":
// 			urlUpload = "/customer.photo.ktp.post"
// 			break;
// 		case "npwp":
// 			urlUpload = "/customer.photo.npwp.post"
// 			break;
// 		case "kk":
// 			urlUpload = "/customer.photo.kk.post"
// 			break;
// 		case "logdeliv":
// 			urlUpload = "/deliverymanlog.photo.post.by.orderid.and.batchid"
// 			break;
// 		case "signdeliv":
// 			urlUpload = "/deliverymanlog.sign.post.by.orderid.and.batchid"
// 			break;
// 		case "order":
// 			urlUpload = "/order.photo.post"
// 			break;
// 		case "sk":
// 			urlUpload = "/order.photo.sk.post"
// 			break;

// 		default:
// 			break;
// 	}

// 	return api.post(urlUpload, data, {
// 		onUploadProgress: (e) => {
// 			const progress = e.loaded / e.total;
// 			// state({
// 			// 	progress: progress
// 			// });
// 		}
// 	})
// }

export function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function formatRpWithoutRp(num, fixed = 0) {
	const brand = DeviceInfo.getBrand() == "unknown" ? "emulator" : DeviceInfo.getBrand();
	if (brand == "Xiaomi") return num.toString();

	num = parseFloat(num);
	var p = num.toFixed(fixed).split('.');
	return (
		p[0]
			.split('')
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num == '-' ? acc : num + (i && !(i % 3) ? '.' : '') + acc;
			}, '') +
		(isNil(p[1]) ? '' : ',' + p[1])
	);
}

export function parsingPathToMessage(msg) {
	return toTitleCase(msg.split(".").join(" ").split("/").join(""));
}

export function validateTelephone(hp) {
	var re = /^((?:\+62|62)|0)[2-9]{1}[0-9]+$/;
	return re.test(hp);
};


export function debounce(callback, wait, context = this) {
	let timeout = null;
	let callbackArgs = null;

	const later = () => callback.apply(context, callbackArgs);

	return function () {
		callbackArgs = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(size))
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
	}
}

export function getFormatDate(time) {
	var day = time.getDay();
	var month = time.getMonth();
	var date = time.getDate();
	var year = time.getFullYear();
	var minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
	var clock = time.getHours() + ":" + minute

	switch (day) {
		case 0:
			day = 'Minggu';
			break;
		case 1:
			day = 'Senin';
			break;
		case 2:
			day = 'Selasa';
			break;
		case 3:
			day = 'Rabu';
			break;
		case 4:
			day = 'Kamis';
			break;
		case 5:
			day = 'Jumat';
			break;
		case 6:
			day = 'Sabtu';
			break;
		case 7:
			day = 'Minggu';
			break;
	}

	switch (month) {
		case 0:
			month = 'Januari';
			break;
		case 1:
			month = 'Februari';
			break;
		case 2:
			month = 'Maret';
			break;
		case 3:
			month = 'April';
			break;
		case 4:
			month = 'Mei';
			break;
		case 5:
			month = 'Juni';
			break;
		case 6:
			month = 'Juli';
			break;
		case 7:
			month = 'Agustus';
			break;
		case 8:
			month = 'Sepember';
			break;
		case 9:
			month = 'Oktober';
			break;
		case 10:
			month = 'November';
			break;
		case 11:
			month = 'Desember';
			break;
	}

	return `${day}, ${date} ${month} ${year}, ${clock}`
}