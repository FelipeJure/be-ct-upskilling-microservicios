const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");
const morgan = require('morgan')
require('dotenv').config()

const app = express();

app.use(morgan('dev'))

const [ PORT, CHARACTER_PORT, FILM_PORT, PLANET_PORT ] = [8000, 8001, 8002, 8003]

app.use("/characters", createProxyMiddleware({
	target:`http://characters:${CHARACTER_PORT}`,
	changeOrigin:true
}))

app.use("/characters/:id", createProxyMiddleware({
	target:`http://characters/:id:${CHARACTER_PORT}`,
	changeOrigin:true
}))

app.use("/films", createProxyMiddleware({
	target:`http://films:${FILM_PORT}`,
	changeOrigin:true
}))

app.use("/films/:id", createProxyMiddleware({
	target:`http://films/:id:${FILM_PORT}`,
	changeOrigin:true
}))

app.use("/planets", createProxyMiddleware({
	target:`http://planets:${PLANET_PORT}`,
	changeOrigin:true
}))

app.use("/planets/:id", createProxyMiddleware({
	target:`http://planets/:id:${PLANET_PORT}`,
	changeOrigin:true
}))

const main = async () => {
	await app.listen(PORT)
	console.log(`Gateway server running on port ${PORT}`);
}

main()