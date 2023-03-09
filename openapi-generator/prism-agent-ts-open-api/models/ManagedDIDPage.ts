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
 * @interface ManagedDIDPage
 */
export interface ManagedDIDPage {
    /**
     * 
     * @type {string}
     * @memberof ManagedDIDPage
     */
    self: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedDIDPage
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedDIDPage
     */
    pageOf: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedDIDPage
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof ManagedDIDPage
     */
    previous?: string;
    /**
     * 
     * @type {Array<ManagedDID>}
     * @memberof ManagedDIDPage
     */
    contents?: Array<ManagedDID>;
}

/**
 * Check if a given object implements the ManagedDIDPage interface.
 */
export function instanceOfManagedDIDPage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "self" in value;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "pageOf" in value;

    return isInstance;
}

export function ManagedDIDPageFromJSON(json: any): ManagedDIDPage {
    return ManagedDIDPageFromJSONTyped(json, false);
}

export function ManagedDIDPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagedDIDPage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': json['self'],
        'kind': json['kind'],
        'pageOf': json['pageOf'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'contents': !exists(json, 'contents') ? undefined : ((json['contents'] as Array<any>).map(ManagedDIDFromJSON)),
    };
}

export function ManagedDIDPageToJSON(value?: ManagedDIDPage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': value.self,
        'kind': value.kind,
        'pageOf': value.pageOf,
        'next': value.next,
        'previous': value.previous,
        'contents': value.contents === undefined ? undefined : ((value.contents as Array<any>).map(ManagedDIDToJSON)),
    };
}

