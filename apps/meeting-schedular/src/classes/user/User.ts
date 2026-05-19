export class User {
    private id: string;
    private name: string;
    private email: string;
    
    constructor(name: string, email: string) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.email = email;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
};
