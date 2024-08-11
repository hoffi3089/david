import { toast } from 'vue3-toastify';

export const showToast = (html, type) => {
	toast(html, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		type,
		theme: 'colored',
	});
}
