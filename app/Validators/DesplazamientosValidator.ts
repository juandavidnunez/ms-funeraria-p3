import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const desplazamientoValidation = {
  schema: schema.create({
    fecha: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }, [
        rules.required()
    ]),
    id_aereopuerto: schema.number([
        rules.required(), 
        rules.range(0, 9999999999)
    ]),
    conductor_id: schema.number([
        rules.exists({ table: 'conductores', column: 'id' })
    ]),
    feretro_id: schema.number([
        rules.exists({ table: 'conductores', column: 'id' })
    ]),
  }),
}