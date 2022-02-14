/* GET home page using 3 callbacks. */


export const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
export const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}
  
export  const cb2 = function (req, res) {
    res.render('index', { title: 'Express' });
  }
  

  