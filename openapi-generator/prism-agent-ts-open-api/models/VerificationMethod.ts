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
import type { PublicKeyJwk } from './PublicKeyJwk';
import {
    PublicKeyJwkFromJSON,
    PublicKeyJwkFromJSONTyped,
    PublicKeyJwkToJSON,
} from './PublicKeyJwk';

/**
 * 
 * @export
 * @interface VerificationMethod
 */
export interface VerificationMethod {
    /**
     * 
     * @type {string}
     * @memberof VerificationMethod
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof VerificationMethod
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof VerificationMethod
     */
    controller: string;
    /**
     * 
     * @type {PublicKeyJwk}
     * @memberof VerificationMethod
     */
    publicKeyJwk: PublicKeyJwk;
}

/**
 * Check if a given object implements the VerificationMethod interface.
 */
export function instanceOfVerificationMethod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "controller" in value;
    isInstance = isInstance && "publicKeyJwk" in value;

    return isInstance;
}

export function VerificationMethodFromJSON(json: any): VerificationMethod {
    return VerificationMethodFromJSONTyped(json, false);
}

export function VerificationMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'controller': json['controller'],
        'publicKeyJwk': PublicKeyJwkFromJSON(json['publicKeyJwk']),
    };
}

export function VerificationMethodToJSON(value?: VerificationMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'controller': value.controller,
        'publicKeyJwk': PublicKeyJwkToJSON(value.publicKeyJwk),
    };
}

