const app = require('./config/server')
const rotaHome = require('./app/routes/home')
const rotaNoticias = require('./app/routes/noticias')
const rotaformularioInclusao = require('./app/routes/formulario_inclusao_noticia')

rotaHome(app)
rotaNoticias(app)
rotaformularioInclusao(app)

app.listen(3000, function(){
    console.log('🚀 Server Runing')
})