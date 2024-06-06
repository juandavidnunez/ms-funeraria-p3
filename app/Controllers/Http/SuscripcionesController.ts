import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Suscripcion from 'App/Models/Suscripcion'
import { suscripcionValidation } from 'App/Validators/SuscripcionesValidator'

export default class SuscripcionesController {
  // Create
  public async create({ request }: HttpContextContract) {
    const body = await request.validate(suscripcionValidation)
    const theSuscripcion = await Suscripcion.create(body)
    return theSuscripcion
  }

  // Get
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let suscripciones: Suscripcion[] = await Suscripcion.query().paginate(page, perPage)
    return suscripciones
  }

  // Get by id

  public async findById({ params }: HttpContextContract) {
    const theSuscripcion = await Suscripcion.findOrFail(params.id)
    return theSuscripcion
  }

  // Update a servicios by id

  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(suscripcionValidation);
    const theSuscripcion = await Suscripcion.findOrFail(params.id)
    theSuscripcion.numero_beneficiaros = body.numero_beneficiaros
    theSuscripcion.plan_id = body.plan_id
    return theSuscripcion.save()
}

  // Delete

  public async delete({ params, response }: HttpContextContract) {
    const theSuscripcion = await Suscripcion.findOrFail(params.id)
    response.status(204)
    return await theSuscripcion.delete()
  }
}
