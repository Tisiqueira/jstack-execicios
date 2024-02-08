const ContactController = require("./src/controllers/ContactController");
const CategoryController = require("./src/controllers/CategoryController");

module.exports = [
  {
    endpoint:'/contacts',
    method: 'GET',
    handler: ContactController.listContacts
  }, 
  {
    endpoint:'/contacts/:id',
    method: 'GET',
    handler: ContactController.getContactById,
  },
  {
    endpoint:'/categories',
    method: 'GET',
    handler: CategoryController.listCategories
  },
  {
    endpoint:'/categories/:id',
    method: 'GET',
    handler: CategoryController.getCategoryById
  },
  
  
]