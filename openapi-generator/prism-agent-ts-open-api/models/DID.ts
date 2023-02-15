/* tslint:disable */
/* eslint-disable */
/**
 * PrismAgent OpenAPI specification
 * OpenAPI specification for Decentralized Identifiers (DID) Operations
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: atala-coredid@iohk.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Service } from './Service';
import {
    ServiceFromJSON,
    ServiceFromJSONTyped,
    ServiceToJSON,
} from './Service';
import type { VerificationMethod } from './VerificationMethod';
import {
    VerificationMethodFromJSON,
    VerificationMethodFromJSONTyped,
    VerificationMethodToJSON,
} from './VerificationMethod';
import type { VerificationMethodOrRef } from './VerificationMethodOrRef';
import {
    VerificationMethodOrRefFromJSON,
    VerificationMethodOrRefFromJSONTyped,
    VerificationMethodOrRefToJSON,
} from './VerificationMethodOrRef';

/**
 * A core DID data model capable of being transformed into W3C compliant representation.
 * @export
 * @interface DID
 */
export interface DID {
    /**
     * 
     * @type {string}
     * @memberof DID
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DID
     */
    controller?: string;
    /**
     * 
     * @type {Array<VerificationMethod>}
     * @memberof DID
     */
    verificationMethod?: Array<VerificationMethod>;
    /**
     * 
     * @type {Array<VerificationMethodOrRef>}
     * @memberof DID
     */
    authentication?: Array<VerificationMethodOrRef>;
    /**
     * 
     * @type {Array<VerificationMethodOrRef>}
     * @memberof DID
     */
    assertionMethod?: Array<VerificationMethodOrRef>;
    /**
     * 
     * @type {Array<VerificationMethodOrRef>}
     * @memberof DID
     */
    keyAgreement?: Array<VerificationMethodOrRef>;
    /**
     * 
     * @type {Array<VerificationMethodOrRef>}
     * @memberof DID
     */
    capabilityInvocation?: Array<VerificationMethodOrRef>;
    /**
     * 
     * @type {Array<VerificationMethodOrRef>}
     * @memberof DID
     */
    capabilityDelegation?: Array<VerificationMethodOrRef>;
    /**
     * 
     * @type {Array<Service>}
     * @memberof DID
     */
    service?: Array<Service>;
}

/**
 * Check if a given object implements the DID interface.
 */
export function instanceOfDID(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function DIDFromJSON(json: any): DID {
    return DIDFromJSONTyped(json, false);
}

export function DIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): DID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'controller': !exists(json, 'controller') ? undefined : json['controller'],
        'verificationMethod': !exists(json, 'verificationMethod') ? undefined : ((json['verificationMethod'] as Array<any>).map(VerificationMethodFromJSON)),
        'authentication': !exists(json, 'authentication') ? undefined : ((json['authentication'] as Array<any>).map(VerificationMethodOrRefFromJSON)),
        'assertionMethod': !exists(json, 'assertionMethod') ? undefined : ((json['assertionMethod'] as Array<any>).map(VerificationMethodOrRefFromJSON)),
        'keyAgreement': !exists(json, 'keyAgreement') ? undefined : ((json['keyAgreement'] as Array<any>).map(VerificationMethodOrRefFromJSON)),
        'capabilityInvocation': !exists(json, 'capabilityInvocation') ? undefined : ((json['capabilityInvocation'] as Array<any>).map(VerificationMethodOrRefFromJSON)),
        'capabilityDelegation': !exists(json, 'capabilityDelegation') ? undefined : ((json['capabilityDelegation'] as Array<any>).map(VerificationMethodOrRefFromJSON)),
        'service': !exists(json, 'service') ? undefined : ((json['service'] as Array<any>).map(ServiceFromJSON)),
    };
}

export function DIDToJSON(value?: DID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'controller': value.controller,
        'verificationMethod': value.verificationMethod === undefined ? undefined : ((value.verificationMethod as Array<any>).map(VerificationMethodToJSON)),
        'authentication': value.authentication === undefined ? undefined : ((value.authentication as Array<any>).map(VerificationMethodOrRefToJSON)),
        'assertionMethod': value.assertionMethod === undefined ? undefined : ((value.assertionMethod as Array<any>).map(VerificationMethodOrRefToJSON)),
        'keyAgreement': value.keyAgreement === undefined ? undefined : ((value.keyAgreement as Array<any>).map(VerificationMethodOrRefToJSON)),
        'capabilityInvocation': value.capabilityInvocation === undefined ? undefined : ((value.capabilityInvocation as Array<any>).map(VerificationMethodOrRefToJSON)),
        'capabilityDelegation': value.capabilityDelegation === undefined ? undefined : ((value.capabilityDelegation as Array<any>).map(VerificationMethodOrRefToJSON)),
        'service': value.service === undefined ? undefined : ((value.service as Array<any>).map(ServiceToJSON)),
    };
}
