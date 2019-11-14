export class UserShow {
    constructor(id: string, Email: string, Nome: string, Role: string, isActive: boolean) {
        this.Id = id;
        this.Email = Email;
        this.Nome = Nome;
        this.Role = Role;
        this.isActive = isActive;
    }
    Id: string;
    Email: string;
    Nome: string;
    Role: string;
    isActive: boolean;
}
