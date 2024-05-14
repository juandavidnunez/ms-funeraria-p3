import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pago from 'App/Models/Pago'
import { pagoValidation } from 'App/Validators/PagosValidator'


export default class PagosController {
  // Create a new Payment
  public async create({ request }: HttpContextContract) {
    let body = request.body()
    const thePago = await Pago.create(body)
    return thePago
  }

  // Get all Payment
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let pagos: Pago[] = await Pago.query().paginate(page, perPage)
    return pagos
  }

  // Get a Payment by id

  public async findById({ params }: HttpContextContract) {
    const thePago = await Pago.findOrFail(params.id)
    return thePago
  }

  // Get all Payment by User

  public async findByUser({ params }: HttpContextContract) {
    const thePago = await Pago.findBy('usuario_id', params.id)
    return thePago
  }

  // Get all Payment by Subscription

  public async findBySubscription({ params }: HttpContextContract) {
    const thePago = await Pago.findBy('suscripcion_id', params.id)
    return thePago
  }

  // Update

  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(pagoValidation)
    const thePago = await Pago.findOrFail(params.id)
    thePago.monto = body.monto
    return thePago.save()
  }

  // Delete

  public async delete({ params, response }: HttpContextContract) {
    const thePago = await Pago.findOrFail(params.id)
    response.status(204)
    return await thePago.delete()
  }
}
