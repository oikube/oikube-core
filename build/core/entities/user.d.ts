import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    readonly id: number;
    email: string;
    name?: string;
    password: string;
}
