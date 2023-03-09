/* tslint:disable */
/* eslint-disable */
/**
 * Prism Agent OpenAPI specification
 * OpenAPI specification for Decentralized Identifiers (DID) Operations
 *
 * The version of the OpenAPI document: 0.41.0
 * Contact: atala-coredid@iohk.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DIDResponse,
  ErrorResponse,
} from '../models';
import {
    DIDResponseFromJSON,
    DIDResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface GetDidRequest {
    didRef: string;
}

/**
 * 
 */
export class DIDApi extends runtime.BaseAPI {

    /**
     * Resolve Prism DID to a DID document.
     * Resolve Prism DID
     */
    async getDidRaw(requestParameters: GetDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DIDResponse>> {
        if (requestParameters.didRef === null || requestParameters.didRef === undefined) {
            throw new runtime.RequiredError('didRef','Required parameter requestParameters.didRef was null or undefined when calling getDid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/dids/{didRef}`.replace(`{${"didRef"}}`, encodeURIComponent(String(requestParameters.didRef))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DIDResponseFromJSON(jsonValue));
    }

    /**
     * Resolve Prism DID to a DID document.
     * Resolve Prism DID
     */
    async getDid(requestParameters: GetDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DIDResponse> {
        const response = await this.getDidRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
