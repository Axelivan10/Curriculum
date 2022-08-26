export class InicioAdmin{
    public constructor(init?: Partial<InicioAdmin>){
        Object.assign(this, init);
    }

    id: number;
    nombre: string;
    puesto: string;
    url_imagen: string;
    descripcion: Text;
    
}