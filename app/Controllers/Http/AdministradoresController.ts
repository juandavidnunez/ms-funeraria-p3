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
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'http://localhost:8181/api';
  }

  // Crear un nuevo usuario
  public async create({ request, response }: HttpContextContract) {
    try {
      const body = request.only(['name', 'email', 'password']);
      const token = request.header('Authorization');
      if (!token) {
        return response.status(401).send('Token de acceso faltante');
      }

      const adonisResponse = await axios.post(
        `${this.apiUrl}/users`,
        {
          name: body.name,
          email: body.email,
          password: body.password,
        },
        {
          headers: {
            'Authorization': token,
          },
        }
      );

      response.status(adonisResponse.status).send(adonisResponse.data);
    } catch (error) {
      console.error('Error al consumir la API de Adonis:', error);
      response.status(error.response?.status || 500).send('Error al consumir la API de Adonis');
    }
  }

  // Listar todos los usuarios
  public async findAll({ request, response }: HttpContextContract) {
    try {
      const token = request.header('Authorization');
      if (!token) {
        return response.status(401).send('Token de acceso faltante');
      }

      const adonisResponse = await axios.get(`${this.apiUrl}/users`, {
        headers: {
          'Authorization': token,
        },
      });

      response.status(adonisResponse.status).send(adonisResponse.data);
    } catch (error) {
      console.error('Error al consumir la API de Adonis:', error);
      response.status(error.response?.status || 500).send('Error al consumir la API de Adonis');
    }
  }

  // Obtener un usuario por id
  public async findById({ params, request, response }: HttpContextContract) {
    try {
      const token = request.header('Authorization');
      if (!token) {
        return response.status(401).send('Token de acceso faltante');
      }

      const apiResponse = await axios.get(`${this.apiUrl}/users/${params.id}`, {
        headers: {
          'Authorization': token,
        },
      });

      response.status(200).send(apiResponse.data);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      response.status(error.response?.status || 500).send(error.response?.data || 'Usuario no encontrado');
    }
  }

  // Actualizar un usuario por id
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const body = request.only(['name', 'email', 'password']);
      const token = request.header('Authorization');
      if (!token) {
        return response.status(401).send('Token de acceso faltante');
      }

      const adonisResponse = await axios.put(
        `${this.apiUrl}/users/${params.id}`,
        {
          name: body.name,
          email: body.email,
          password: body.password,
        },
        {
          headers: {
            'Authorization': token,
          },
        }
      );

      response.status(adonisResponse.status).send(adonisResponse.data);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      response.status(error.response?.status || 500).send(error.response?.data || 'Error al actualizar el usuario');
    }
  }

  
  public async delete({ params, request, response }: HttpContextContract) {
    try {
      const token = request.header('Authorization');
      if (!token) {
        return response.status(401).send('Token de acceso faltante');
      }
  
      // Hacer la solicitud de eliminación
      await axios.delete(`${this.apiUrl}/users/${params.id}`, {
        headers: {
          'Authorization': token,
        },
      });
  
      // Si la solicitud de eliminación tiene éxito, respondemos con un mensaje de éxito
      response.status(200).send('Usuario eliminado correctamente');
      
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      response.status(error.response?.status || 500).send(error.response?.data || 'Error al eliminar el usuario');
    }
  }
    
}
