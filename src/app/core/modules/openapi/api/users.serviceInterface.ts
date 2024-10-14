/**
 * Demo User Api
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { DtoCreateUserRequest } from '../model/models';
import { DtoSearchUsersResponse } from '../model/models';
import { DtoUser } from '../model/models';
import { ModelsError } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface UsersServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Search Users
     * Search users based on various filters such as first name, last name, email, age, status, gender, and DNI.
     * @param xClientId Client ID
     * @param firstName User first name to search for (optional)
     * @param lastName User last name to search for (optional)
     * @param email User email to search for (optional)
     * @param age User age to search for (optional)
     * @param status User status to search for (optional)
     * @param gender User gender to search for (optional)
     * @param dni User DNI to search for (optional)
     * @param page Page number for pagination (optional, min&#x3D;1)
     * @param limit Number of results per page (optional, min&#x3D;1)
     */
    apiV1UsersGet(xClientId: string, firstName?: string, lastName?: string, email?: string, age?: number, status?: string, gender?: string, dni?: string, page?: number, limit?: number, extraHttpRequestParams?: any): Observable<DtoSearchUsersResponse>;

    /**
     * Delete User by ID
     * Remove a user by their unique ID
     * @param xClientId Client ID
     * @param id User ID
     */
    apiV1UsersIdDelete(xClientId: string, id: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Find User by ID
     * Retrieve a user by their unique ID
     * @param xClientId Client ID
     * @param id User ID
     */
    apiV1UsersIdGet(xClientId: string, id: string, extraHttpRequestParams?: any): Observable<DtoUser>;

    /**
     * Update User by ID
     * Update an existing user by their unique ID
     * @param id User ID
     * @param request Update user request
     */
    apiV1UsersIdPut(id: string, request: DtoCreateUserRequest, extraHttpRequestParams?: any): Observable<DtoUser>;

    /**
     * Create User
     * Create a new user
     * @param xClientId Client ID
     * @param request Create user request
     */
    apiV1UsersPost(xClientId: string, request: DtoCreateUserRequest, extraHttpRequestParams?: any): Observable<DtoUser>;

}
