import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PromocionSuscripcion from 'App/Models/PromacionSuscripcion'
import PromocionSuscripcionValidator from 'App/Validators/PromacionSuscripcioValidator'

export default class PromocionSuscripciosController {
  // Create
  public async create({ request }: HttpContextContract) {
    const body = await request.validate(PromocionSuscripcionValidator)
    const thePromocionSuscripcio = await PromocionSuscripcion.create(body)
    return thePromocionSuscripcio
  }

  // Get
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    const promociones = await PromocionSuscripcion.query().paginate(page, perPage)
    return promociones
  }

  // Get by id
  public async findById({ params }: HttpContextContract) {
    const thePromocionSuscripcio = await PromocionSuscripcion.findOrFail(params.id)
    return thePromocionSuscripcio
  }

  // Update
  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(PromocionSuscripcionValidator)
    const thePromocionSuscripcio = await PromocionSuscripcion.findOrFail(params.id)
    thePromocionSuscripcio.merge(body) // Utiliza merge para actualizar los campos
    await thePromocionSuscripcio.save()
    return thePromocionSuscripcio
  }

  // Delete
  public async delete({ params }: HttpContextContract) {
    const thePromocionSuscripcio = await PromocionSuscripcion.findOrFail(params.id)
    await thePromocionSuscripcio.delete()
    return 'Deleted successfully'
  }
}
