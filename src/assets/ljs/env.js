let baseUrl

if(process.env.NODE_ENV == 'production') {
	//run build 
	baseUrl = "."
} else {
	//run dev
	baseUrl = "http://localhost:3000";
}

export {baseUrl};