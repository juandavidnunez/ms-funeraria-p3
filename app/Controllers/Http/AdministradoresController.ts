import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

// Validador para usuarios
const usuarioValidation = schema.create({
  userId: schema.string({}, [
    rules.required(),
  ]),
})

export default class UsuariosController {
  private apiUrl = Env.get('MICROSERVICE_URL', 'http://localhost:8181/api')

  // Crear un nuevo usuario
  public async create({ request, response }: HttpContextContract) {
    try {
      const body = await request.validate({ schema: usuarioValidation })
      const apiResponse = await axios.post(`${this.apiUrl}/users`, body)
      response.status(201).send(apiResponse.data)
    } catch (error) {
      console.error('Error al crear el usuario:', error)
      response.status(error.response?.status || 500).send(error.response?.data || 'Error al crear el usuario')
    }
  }

  // Obtener todos los usuarios
  public async findAll({ response }: HttpContextContract) {
    try {
      const adonisResponse = await axios.get('http://localhost:8181/api/users', {
       
      })

      // Devolver la respuesta de Adonis
      response.status(adonisResponse.status).send(adonisResponse.data)
    } catch (error) {
      // Manejar errores
      console.error('Error al consumir la API de Adonis:', error)
      response.status(error.response?.status || 500).send('Error al consumir la API de Adonis')
    }
  }

  // Obtener un usuario por id
  public async findById({ params, response }: HttpContextContract) {
    try {
      const apiResponse = await axios.get(`${this.apiUrl}/users/${params.id}`)
      response.status(200).send(apiResponse.data)
    } catch (error) {
      console.error('Error al obtener el usuario:', error)
      response.status(error.response?.status || 500).send(error.response?.data || 'Usuario no encontrado')
    }
  }

  // Actualizar un usuario por id
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const body = await request.validate({ schema: usuarioValidation })
      const apiResponse = await axios.put(`${this.apiUrl}/users/${params.id}`, body)
      response.status(200).send(apiResponse.data)
    } catch (error) {
      console.error('Error al actualizar el usuario:', error)
      response.status(error.response?.status || 500).send(error.response?.data || 'Error al actualizar el usuario')
    }
  }

  // Eliminar un usuario por id
  public async delete({ params, response }: HttpContextContract) {
    try {
      await axios.delete(`${this.apiUrl}/users/${params.id}`)
      response.status(204).send('')
    } catch (error) {
      console.error('Error al eliminar el usuario:', error)
      response.status(error.response?.status || 500).send(error.response?.data || 'Error al eliminar el usuario')
    }
  }
}
