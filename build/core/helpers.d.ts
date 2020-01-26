import { User } from './entities/user';
export declare function seedDatabase(): Promise<{
    defaultUser: User;
}>;
export declare type Lazy<T extends object> = Promise<T> | T;
