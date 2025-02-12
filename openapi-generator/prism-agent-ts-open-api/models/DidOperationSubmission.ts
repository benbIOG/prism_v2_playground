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
 * 
 * @export
 * @interface DidOperationSubmission
 */
export interface DidOperationSubmission {
    /**
     * 
     * @type {string}
     * @memberof DidOperationSubmission
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DidOperationSubmission
     */
    didRef: string;
}

/**
 * Check if a given object implements the DidOperationSubmission interface.
 */
export function instanceOfDidOperationSubmission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "didRef" in value;

    return isInstance;
}

export function DidOperationSubmissionFromJSON(json: any): DidOperationSubmission {
    return DidOperationSubmissionFromJSONTyped(json, false);
}

export function DidOperationSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DidOperationSubmission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'didRef': json['didRef'],
    };
}

export function DidOperationSubmissionToJSON(value?: DidOperationSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'didRef': value.didRef,
    };
}

