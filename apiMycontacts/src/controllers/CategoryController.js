const categories = require('../mocks/categories');

module.exports = {
  listCategories(request, response) {
    const { order } = request.query;
   
    const sortedCategories = categories.sort((a,b) => {
      if(order === 'desc'){
        return a.id < b.id ? 1 : -1;
      }else {
       return a.id > b.id ? 1 : -1;
      }
    })
    response.writeHead(200, {'Content-type' : 'application/json'});
    response.end(JSON.stringify(sortedCategories));
  },

  getCategoryById(request, response) {
    const { id } = request.params;

    const category = categories.find((category) => category.id === Number(id));

    if(!category){
      response.writeHead(404, { 'Content-type' : 'application/json'});
      response.end(JSON.stringify({ error: 'Category not found!'}));
      return
    }

    response.writeHead(200, { 'Content-type' : 'application/json'});
    response.end(JSON.stringify(category));

  }
}