// to control our site
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 




app.use(express.static('public'))
app.get('/', (req, res) =>  {
  res.redirect('/home')
})



app.get('/home', (req, res) =>  {
  res.render('index')
}
)



//if pge is not found
app.get('*', (req, res) =>  {
    res.send('Page not found')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})