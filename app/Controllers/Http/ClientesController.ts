import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import { clienteValidation } from 'App/Validators/ClientesValidator'


export default class ClientesController {
 
  // Get all clients

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let clientes: Cliente[] = await Cliente.query().paginate(page, perPage)
    return clientes
  }

  public async delete({ params, response }: HttpContextContract) {
    const theCliente = await Cliente.findOrFail(params.id)
    response.status(204)
    return await theCliente.delete()
  }
}
