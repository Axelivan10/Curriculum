export class FooterAdmin{
    public constructor(init?: Partial<FooterAdmin>){
        Object.assign(this, init);
    }

    id: number;
    nombre: string;
    url_imagen: string;
    url_link: string;
}