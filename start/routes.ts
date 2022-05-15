/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.resource('comments', 'CommentsController').except(['update', 'destroy']) // 👈

// Route.resource('posts', 'PostsController').apiOnly() // 👈
// Route.resource('users', 'UsersController').middleware({
//   '*': ['auth'],
// })

// Route.resource('posts.comments', 'CommentsController')
// Route.shallowResource('posts.comments', 'CommentsController')

import Database from '@ioc:Adonis/Lucid/Database'
import Student from 'App/Models/Student'

// returns client for the default connection
// const client = Database.connection()

// const tables =  client.getAllTables()
// console.log(tables)
// const columns =  client.columnsInfo('users')
// console.log(columns)




// Route.get('/', async () => {
//   return { hello: 'world',
//           //  users: await columns,
//         }
// })
Route.get('/students', async () => {
  return { students: await Student.all()
          //  users: await columns,
        }
})

Route.post('/students', async ({request,response}) => {
  let student = new Student()
  // student.first_name = request.body().first_name;
  // student.last_name = request.body().last_name;
  // student.address = request.body().address;
  // student.phone_number = request.body().phone_number;
  // student.enrolment_number = request.body().enrolment_number;
  // student.email = request.body().email;
  await student.fill({ first_name: request.body().first_name, 
    last_name: request.body().last_name,
    address: request.body().address,
    phone_number: request.body().phone_number,
    enrolment_number:request.body().email,
    email: request.body().email
  }).save
  await student.save
  // console.log(student)
  // console.log(student.$isPersisted)
  return { 
          student: student
        }
})


Route.get('/', async ({ view }) => {
  return view.render('index')
})