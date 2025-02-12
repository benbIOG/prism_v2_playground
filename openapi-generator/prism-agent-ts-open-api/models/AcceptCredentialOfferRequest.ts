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

import { exists, mapValues } from '../runtime';
/**
 * A request to accept a credential offer received from an issuer.
 * @export
 * @interface AcceptCredentialOfferRequest
 */
export interface AcceptCredentialOfferRequest {
    /**
     * The short-form subject Prism DID to which the verifiable credential should be issued.
     * @type {string}
     * @memberof AcceptCredentialOfferRequest
     */
    subjectId: string;
}

/**
 * Check if a given object implements the AcceptCredentialOfferRequest interface.
 */
export function instanceOfAcceptCredentialOfferRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subjectId" in value;

    return isInstance;
}

export function AcceptCredentialOfferRequestFromJSON(json: any): AcceptCredentialOfferRequest {
    return AcceptCredentialOfferRequestFromJSONTyped(json, false);
}

export function AcceptCredentialOfferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptCredentialOfferRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subjectId': json['subjectId'],
    };
}

export function AcceptCredentialOfferRequestToJSON(value?: AcceptCredentialOfferRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subjectId': value.subjectId,
    };
}

