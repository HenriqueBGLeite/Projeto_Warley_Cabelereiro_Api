const { uuid } = require('uuidv4');

module.exports = {

  create (request, response) {
    const users = [];
    const { name, number, password, confirmPassword } = request.body;
  
    if ( password === confirmPassword ) {
  
      let user = {
        id: uuid(),
        name: name, 
        number: number,
        password: password
      }
  
      users.push(user); //adicionar no banco de dados
  
      return response.status(201).json(user);
    }
    else
      return response.status(400).json({ error: 'Cê é burro.' })  
  }

}