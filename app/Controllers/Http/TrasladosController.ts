import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Traslado from 'App/Models/Traslado'
import { trasladoValidation } from 'App/Validators/TrasladosValidator'
import Servicio from 'App/Models/Servicio'


export default class TrasladosController {
  //create a new traslado

  public async create({ request }: HttpContextContract) {
    const body = await request.validate(trasladoValidation)
    const theTraslado = await Traslado.create(body)
    if(body.servicio){
      let theServicio:Servicio = await Servicio.findOrFail(body.servicio.id)
      theServicio.traslado_id=theTraslado.id
      theServicio.save()
    }
    return theTraslado
  }

  // Get all traslados

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let traslado: Traslado[] = await Traslado.query().paginate(page, perPage)
    return traslado
  }

  // Get a traslado by id

  public async findById({ params }: HttpContextContract) {
    const theTraslado = await Traslado.findOrFail(params.id)
    return theTraslado
  }

  // Update a traslados by id

  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(trasladoValidation)
    const theTraslado = await Traslado.findOrFail(params.id)
    theTraslado.origen = body.origen
    theTraslado.destino = body.destino
    theTraslado.fecha = body.fecha
    return theTraslado.save()
  }

  // Delete a traslados by id

  public async delete({ params, response }: HttpContextContract) {
    const theTraslado = await Traslado.findOrFail(params.id)
    response.status(204)
    return await theTraslado.delete()
  }
}
