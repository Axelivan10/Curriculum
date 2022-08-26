export class HistorialAdmin{
    public constructor(init?: Partial<HistorialAdmin>){
        Object.assign(this, init);
    }

    id: number;
    puesto: string;    
    titulo: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    descripcion: Text;   
}