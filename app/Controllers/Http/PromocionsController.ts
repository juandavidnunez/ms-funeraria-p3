import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Promocion from 'App/Models/Promocion' 
import PromocionValidator from 'App/Validators/PromacionValidator'

export default class PromocionsController {
  // Create
  public async create({ request }: HttpContextContract) {
    const body = await request.validate(PromocionValidator)
    const thePromocion = await Promocion.create(body)
    return thePromocion
  }

  // Get
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    const promociones = await Promocion.query().paginate(page, perPage)
    return promociones
  }

  // Get by id
  public async findById({ params }: HttpContextContract) {
    const thePromocion = await Promocion.findOrFail(params.id)
    return thePromocion
  }

  // Delete
  public async delete({ params, response }: HttpContextContract) {
    const thePromocion = await Promocion.findOrFail(params.id)
    await thePromocion.delete()
    response.status(204)
    return 'Promoción eliminada exitosamente'
  }
}
