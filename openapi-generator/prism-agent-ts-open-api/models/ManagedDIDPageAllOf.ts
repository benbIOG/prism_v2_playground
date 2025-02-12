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
import type { ManagedDID } from './ManagedDID';
import {
    ManagedDIDFromJSON,
    ManagedDIDFromJSONTyped,
    ManagedDIDToJSON,
} from './ManagedDID';

/**
 * 
 * @export
 * @interface ManagedDIDPageAllOf
 */
export interface ManagedDIDPageAllOf {
    /**
     * 
     * @type {Array<ManagedDID>}
     * @memberof ManagedDIDPageAllOf
     */
    contents: Array<ManagedDID>;
}

/**
 * Check if a given object implements the ManagedDIDPageAllOf interface.
 */
export function instanceOfManagedDIDPageAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contents" in value;

    return isInstance;
}

export function ManagedDIDPageAllOfFromJSON(json: any): ManagedDIDPageAllOf {
    return ManagedDIDPageAllOfFromJSONTyped(json, false);
}

export function ManagedDIDPageAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagedDIDPageAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contents': ((json['contents'] as Array<any>).map(ManagedDIDFromJSON)),
    };
}

export function ManagedDIDPageAllOfToJSON(value?: ManagedDIDPageAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contents': ((value.contents as Array<any>).map(ManagedDIDToJSON)),
    };
}

