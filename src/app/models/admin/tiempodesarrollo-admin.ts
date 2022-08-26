export class TiempoDeDesarrolloAdmin{
    public constructor(init?: Partial<TiempoDeDesarrolloAdmin>){
        Object.assign(this, init);
    }

    id: number;
    titulo: string;
    fecha_inicio:Date;
    fecha_fin:Date;
    descripcion: Text;
}