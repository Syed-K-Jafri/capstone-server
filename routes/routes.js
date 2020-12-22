const Users = require('../controllers/users_controller');
const Categories = require('../controllers/categories_controller');
const Question = require('../controllers/questions_controller');
const Answer = require('../controllers/answers_controller');

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.send("********");
  });

  //user Crud
  app.post('/api/user/create', Users.userRegister());
  app.post('/api/user/signin', Users.userLogin());
  app.post('/api/validate/token', Users.validateToken());

  //Category Crud
  app.post('/api/category/create', Categories.createCategory());
  app.get('/api/category/list', Categories.listCategories());
  app.get('/api/category/find/:id', Categories.specificCategory());
  app.delete('/api/category/delete', Categories.deleteCategories());
  
  //Question Crud
  app.get('/api/category/:category_id/question/find/:id', Question.specificQuestion());
  app.post('/api/question/create', Question.createQuestion());
  
  //Answer Crud
  app.post('/api/answer/create', Answer.createAnswer());
  
};