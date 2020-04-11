const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const users = [];

app.post('/users', (request, response) => {
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
})

app.listen(3333, () => {
  console.log('🚀 Back-end started!')
});

