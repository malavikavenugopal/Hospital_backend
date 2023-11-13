const jsonServer = require('json-server')




const hospitalserver = jsonServer.create()




const router = jsonServer.router('db.json')



const middleware = jsonServer.defaults()


hospitalserver.use(middleware)
hospitalserver.use(router)



const port = 5001 || port.env.port



hospitalserver.listen(port,()=>{
    console.log(`Hospitalserver started at ${port} and waiting for the request `)
})