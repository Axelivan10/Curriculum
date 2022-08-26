export class HabilidadesAdmin{
    public constructor(init?: Partial<HabilidadesAdmin>){
        Object.assign(this, init);
    }

    id: number;
    titulo: string;
    porcentaje: string;
    url_imagen: string;
}