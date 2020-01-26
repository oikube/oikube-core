import { MyContext } from '../api/MyContext';
export declare class UserResolver {
    hello(): Promise<string>;
    Me({ payload }: MyContext): Promise<string>;
    Register(name: string, email: string, password: string): Promise<boolean>;
    Login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
