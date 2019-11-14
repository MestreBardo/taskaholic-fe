export class UserRegister {
    constructor(id: string, email: string, password: string, reinputPassword: string, nome: string, role: string, isActive: boolean) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.reinputPassword = reinputPassword;
        this.name = nome;
        this.role = role;
        this.isActive = isActive;
    }
    public id: string;
    public email: string;
    public password: string;
    public reinputPassword: string;
    public name: string;
    public role: string;
    public isActive: boolean;
}
