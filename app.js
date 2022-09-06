const app = require('./config/server')(app)
const rotaHome = require('./app/routes/home')(app)
const rotaNoticias = require('./app/routes/noticias')(app)
const rotaformularioInclusao = require('./app/routes/formulario_inclusao_noticia')(app)



app.listen(3000, function(){
    console.log('🚀 Server Runing')
})