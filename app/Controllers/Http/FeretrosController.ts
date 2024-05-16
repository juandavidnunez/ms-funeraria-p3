import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Feretro from 'App/Models/Feretro'
import { feretroValidation } from 'App/Validators/FeretrosValidator'

export default class FeretrosController {

  // Create a new sede
  public async create({ request }: HttpContextContract) {
    const body = await request.validate(feretroValidation)
    const theFeretro = await Feretro.create(body)
    return theFeretro
  }

  // Get all sedes
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let feretros: Feretro[] = await Feretro.query().paginate(page, perPage)
    return feretros
  }

  // Get a sede by id

  public async findById({ params }: HttpContextContract) {
    const theFeretro = await Feretro.findOrFail(params.id)
    return theFeretro
  }

  // Update a client by id

  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(feretroValidation)
    const theFeretro = await Feretro.findOrFail(params.id)
    theFeretro.peso = body.peso
    return theFeretro.save()
  }

  // Delete a client by id

  public async delete({ params, response }: HttpContextContract) {
    const theFeretro = await Feretro.findOrFail(params.id)
    response.status(204)
    return await theFeretro.delete()
  }
}


