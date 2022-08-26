export class ProyectosAdmin{
    public constructor(init?: Partial<ProyectosAdmin>){
        Object.assign(this, init);
    }

    id: number;
    titulo: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    descripcion: Text;
}