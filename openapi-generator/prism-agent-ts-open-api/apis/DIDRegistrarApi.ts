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
  CreateManagedDIDResponse,
  CreateManagedDidRequest,
  DIDOperationResponse,
  ErrorResponse,
  ManagedDID,
  ManagedDIDPage,
  UpdateManagedDIDRequest,
} from '../models';
import {
    CreateManagedDIDResponseFromJSON,
    CreateManagedDIDResponseToJSON,
    CreateManagedDidRequestFromJSON,
    CreateManagedDidRequestToJSON,
    DIDOperationResponseFromJSON,
    DIDOperationResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ManagedDIDFromJSON,
    ManagedDIDToJSON,
    ManagedDIDPageFromJSON,
    ManagedDIDPageToJSON,
    UpdateManagedDIDRequestFromJSON,
    UpdateManagedDIDRequestToJSON,
} from '../models';

export interface CreateManagedDidOperationRequest {
    createManagedDidRequest: CreateManagedDidRequest;
}

export interface DeactivateManagedDidRequest {
    didRef: string;
}

export interface GetManagedDidRequest {
    didRef: string;
}

export interface ListManagedDidRequest {
    offset?: number;
    limit?: number;
}

export interface PublishManagedDidRequest {
    didRef: string;
}

export interface UpdateManagedDidRequest {
    didRef: string;
    updateManagedDIDRequest: UpdateManagedDIDRequest;
}

/**
 * 
 */
export class DIDRegistrarApi extends runtime.BaseAPI {

    /**
     * Create unpublished DID and store it inside Prism Agent\'s wallet. The private keys of the DID is managed by Prism Agent. The DID can later be published to the VDR using publications endpoint. 
     * Create unpublished DID and store it in Prism Agent\'s wallet
     */
    async createManagedDidRaw(requestParameters: CreateManagedDidOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateManagedDIDResponse>> {
        if (requestParameters.createManagedDidRequest === null || requestParameters.createManagedDidRequest === undefined) {
            throw new runtime.RequiredError('createManagedDidRequest','Required parameter requestParameters.createManagedDidRequest was null or undefined when calling createManagedDid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/did-registrar/dids`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateManagedDidRequestToJSON(requestParameters.createManagedDidRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateManagedDIDResponseFromJSON(jsonValue));
    }

    /**
     * Create unpublished DID and store it inside Prism Agent\'s wallet. The private keys of the DID is managed by Prism Agent. The DID can later be published to the VDR using publications endpoint. 
     * Create unpublished DID and store it in Prism Agent\'s wallet
     */
    async createManagedDid(requestParameters: CreateManagedDidOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateManagedDIDResponse> {
        const response = await this.createManagedDidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deactivate DID in Prism Agent\'s wallet and post deactivate operation to the VDR. 
     * Deactivate DID in Prism Agent\'s wallet and post deactivate operation to the VDR
     */
    async deactivateManagedDidRaw(requestParameters: DeactivateManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DIDOperationResponse>> {
        if (requestParameters.didRef === null || requestParameters.didRef === undefined) {
            throw new runtime.RequiredError('didRef','Required parameter requestParameters.didRef was null or undefined when calling deactivateManagedDid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/did-registrar/dids/{didRef}/deactivations`.replace(`{${"didRef"}}`, encodeURIComponent(String(requestParameters.didRef))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DIDOperationResponseFromJSON(jsonValue));
    }

    /**
     * Deactivate DID in Prism Agent\'s wallet and post deactivate operation to the VDR. 
     * Deactivate DID in Prism Agent\'s wallet and post deactivate operation to the VDR
     */
    async deactivateManagedDid(requestParameters: DeactivateManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DIDOperationResponse> {
        const response = await this.deactivateManagedDidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get DID stored in Prism Agent\'s wallet
     * Get DID stored in Prism Agent\'s wallet
     */
    async getManagedDidRaw(requestParameters: GetManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ManagedDID>> {
        if (requestParameters.didRef === null || requestParameters.didRef === undefined) {
            throw new runtime.RequiredError('didRef','Required parameter requestParameters.didRef was null or undefined when calling getManagedDid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/did-registrar/dids/{didRef}`.replace(`{${"didRef"}}`, encodeURIComponent(String(requestParameters.didRef))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ManagedDIDFromJSON(jsonValue));
    }

    /**
     * Get DID stored in Prism Agent\'s wallet
     * Get DID stored in Prism Agent\'s wallet
     */
    async getManagedDid(requestParameters: GetManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ManagedDID> {
        const response = await this.getManagedDidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all DIDs stored in Prism Agent\'s wallet. Return a paginated items ordered by created timestamp. If the `limit` parameter is not set, it defaults to 100 items per page. 
     * List all DIDs stored in Prism Agent\'s wallet
     */
    async listManagedDidRaw(requestParameters: ListManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ManagedDIDPage>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/did-registrar/dids`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ManagedDIDPageFromJSON(jsonValue));
    }

    /**
     * List all DIDs stored in Prism Agent\'s wallet. Return a paginated items ordered by created timestamp. If the `limit` parameter is not set, it defaults to 100 items per page. 
     * List all DIDs stored in Prism Agent\'s wallet
     */
    async listManagedDid(requestParameters: ListManagedDidRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ManagedDIDPage> {
        const response = await this.listManagedDidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Publish the DID stored in Prism Agent\'s wallet to the VDR. 
     * Publish the DID stored in Prism Agent\'s wallet to the VDR
     */
    async publishManagedDidRaw(requestParameters: PublishManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DIDOperationResponse>> {
        if (requestParameters.didRef === null || requestParameters.didRef === undefined) {
            throw new runtime.RequiredError('didRef','Required parameter requestParameters.didRef was null or undefined when calling publishManagedDid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/did-registrar/dids/{didRef}/publications`.replace(`{${"didRef"}}`, encodeURIComponent(String(requestParameters.didRef))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DIDOperationResponseFromJSON(jsonValue));
    }

    /**
     * Publish the DID stored in Prism Agent\'s wallet to the VDR. 
     * Publish the DID stored in Prism Agent\'s wallet to the VDR
     */
    async publishManagedDid(requestParameters: PublishManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DIDOperationResponse> {
        const response = await this.publishManagedDidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update DID in Prism Agent\'s wallet and post update operation to the VDR. This endpoint updates the DID document from the last confirmed operation. Submitting multiple update operations without waiting for confirmation will result in some operations being rejected as only one operation is allowed to be appended to the last confirmed operation. 
     * Update DID in Prism Agent\'s wallet and post update operation to the VDR
     */
    async updateManagedDidRaw(requestParameters: UpdateManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DIDOperationResponse>> {
        if (requestParameters.didRef === null || requestParameters.didRef === undefined) {
            throw new runtime.RequiredError('didRef','Required parameter requestParameters.didRef was null or undefined when calling updateManagedDid.');
        }

        if (requestParameters.updateManagedDIDRequest === null || requestParameters.updateManagedDIDRequest === undefined) {
            throw new runtime.RequiredError('updateManagedDIDRequest','Required parameter requestParameters.updateManagedDIDRequest was null or undefined when calling updateManagedDid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/did-registrar/dids/{didRef}/updates`.replace(`{${"didRef"}}`, encodeURIComponent(String(requestParameters.didRef))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateManagedDIDRequestToJSON(requestParameters.updateManagedDIDRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DIDOperationResponseFromJSON(jsonValue));
    }

    /**
     * Update DID in Prism Agent\'s wallet and post update operation to the VDR. This endpoint updates the DID document from the last confirmed operation. Submitting multiple update operations without waiting for confirmation will result in some operations being rejected as only one operation is allowed to be appended to the last confirmed operation. 
     * Update DID in Prism Agent\'s wallet and post update operation to the VDR
     */
    async updateManagedDid(requestParameters: UpdateManagedDidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DIDOperationResponse> {
        const response = await this.updateManagedDidRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
