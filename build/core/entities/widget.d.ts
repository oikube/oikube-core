import { Thing } from './thing';
import { Lazy } from '../helpers';
export declare class Widget {
    readonly id: number;
    name: string;
    description?: string;
    type: string;
    settings: string;
    position: string;
    thing: Lazy<Thing>;
}
