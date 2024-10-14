/**
 * Demo User Api
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface DtoUser { 
    age: number;
    dni: string;
    email: string;
    first_name: string;
    gender: DtoUser.GenderEnum;
    id?: number;
    last_name: string;
    status: DtoUser.StatusEnum;
}
export namespace DtoUser {
    export type GenderEnum = 'Male' | 'Female';
    export const GenderEnum = {
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    };
    export type StatusEnum = 'enabled' | 'disabled';
    export const StatusEnum = {
        Enabled: 'enabled' as StatusEnum,
        Disabled: 'disabled' as StatusEnum
    };
}


