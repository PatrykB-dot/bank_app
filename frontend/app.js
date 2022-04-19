//async function postFormDataAsJson({ url, formData }) {
//	const plainFormData = Object.fromEntries(formData.entries());
//	const formDataJsonString = JSON.stringify(plainFormData);
//
//	//const fetchOptions = {
//	//	method: "POST",
//	//	headers: {
//	//		"Content-Type": "application/json",
//	//		Accept: "application/json",
//	//	},
//	//	body: formDataJsonString,
//	//};
////
//	//const response = await fetch(url, fetchOptions);
//
//	//if (!response.ok) {
//	//	const errorMessage = await response.text();
//	//	throw new Error(errorMessage);
//	//}
//	console.log(formDataJsonString)
//	//return response.json();
//}
//async function handleSubmit(event) {
//	event.preventDefault();
//
//	const form = event.currentTarget;
//	const url = form.action;
//
//	try {
//		const formData = new FormData(form);
//		//const responseData = await postFormDataAsJson({ url, formData });
//
//		console.log({ responseData });
//	} catch (error) {
//		console.error(error);
//	}
//}

const loginForm = document.getElementById("loginForm");


const postForm = async (e) => {
	//const plainFormData = Object.fromEntries(loginForm.entries());
	//const formDataJsonString = JSON.stringify(plainFormData);
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target).entries());
	const formDataJsonString = JSON.stringify(data);

	const fetchOptions = {
		method: "POST",
		headers: {
				"Content-Type": "application/json",
			},
			body: formDataJsonString,
		};
	const url = loginForm.action;
	const response = await fetch(url, fetchOptions);
	if (!response.ok) {
	const errorMessage = await response.text();
		throw new Error(errorMessage);
	}
	//console.log(response.json())
	return response.json();
	
}
loginForm.addEventListener("submit", postForm);