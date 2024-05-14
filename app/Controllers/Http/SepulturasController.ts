import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sepultura from 'App/Models/Sepultura'
import { sepulturaValidation } from 'App/Validators/SepulturasValidator'

export default class SepulturasController {
  //create a new sepultura

  public async create({ request }: HttpContextContract) {
    const body = await request.validate(sepulturaValidation)
    const theSepultura = await Sepultura.create(body)
    return theSepultura
  }

  // Get all sepultura

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let sepultura: Sepultura[] = await Sepultura.query().paginate(page, perPage)
    return sepultura
  }

  // Get a sepultura by id

  public async findById({ params }: HttpContextContract) {
    const theSepultura = await Sepultura.findOrFail(params.id)
    return theSepultura
  }

  // Update a sepultura by id

  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(sepulturaValidation)
    const theSepultura = await Sepultura.findOrFail(params.id)
    theSepultura.ubicacion = body.ubicacion
    theSepultura.fecha_hora = body.fecha_hora
    return theSepultura.save()
  }

  // Delete a sepultura by id

  public async delete({ params, response }: HttpContextContract) {
    const theSepultura = await Sepultura.findOrFail(params.id)
    response.status(204)
    return await theSepultura.delete()
  }
}
