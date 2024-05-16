import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Desplazamiento from 'App/Models/Desplazamiento'
import { desplazamientoValidation } from 'App/Validators/DesplazamientosValidator'
import axios from 'axios'

export default class DesplazamientosController {
  // Create a new sede
  // Crear un nuevo desplazamiento
  public async create({ request }: HttpContextContract) {
    try {
      const { id_aereopuerto, ...rest } = await request.validate(desplazamientoValidation)

      // Realiza la solicitud para obtener el nombre del aeropuerto
      const response = await axios.get(`/api/v1/Airport/${id_aereopuerto}`)
      const airportName = response.data.name

      // Crea el desplazamiento con el nombre del aeropuerto
      const theDesplazamiento = await Desplazamiento.create({ ...rest, id_aereopuerto, airportName })

      return theDesplazamiento
    } catch (error) {
      throw new Error(`Error al crear el desplazamiento: ${error.message}`)
    }
  }

  // Get all sedes
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let desplazamientos: Desplazamiento[] = await Desplazamiento.query().paginate(page, perPage)
    return desplazamientos
  }

  // Get a sede by id

  public async findById({ params }: HttpContextContract) {
    const theDesplazamiento = await Desplazamiento.findOrFail(params.id)
    return theDesplazamiento
  }

  // Update a client by id

  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(desplazamientoValidation)
    const theDesplazamiento = await Desplazamiento.findOrFail(params.id)
    theDesplazamiento.fecha = body.fecha
    theDesplazamiento.id_aereopuerto = body.id_aereopuerto
    return theDesplazamiento.save()
  }

  // Delete a client by id

  public async delete({ params, response }: HttpContextContract) {
    const theDesplazamiento = await Desplazamiento.findOrFail(params.id)
    response.status(204)
    return await theDesplazamiento.delete()
  }
}


