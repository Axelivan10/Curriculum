export class ContactoAdmin{
    public constructor(init?: Partial<ContactoAdmin>){
        Object.assign(this, init);
    }

    id: number;
    correo: string;
    direccion: Text;
    usuario_linkedin: string;
    url_imagen_linkedin:string;
}