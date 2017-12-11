import { EntityConfigBase, IEntityConfigBase } from "./entity-config.base";
import { ParisConfig } from "../config/paris-config";
import { DataEntityConstructor } from "./data-entity.base";
import { DataQuery } from "../dataset/data-query";
export declare class ModelEntity extends EntityConfigBase {
    endpoint: EntityConfigFunctionOrValue;
    loadAll?: boolean;
    cache?: ModelEntityCacheConfig;
    baseUrl?: EntityConfigFunctionOrValue;
    allItemsProperty?: string;
    allItemsEndpoint?: string;
    allItemsEndpointTrailingSlash?: boolean;
    parseDataQuery?: (dataQuery: DataQuery) => {
        [index: string]: any;
    };
    constructor(config: EntityConfig, entityConstructor: DataEntityConstructor<any>);
}
export interface EntityConfig extends IEntityConfigBase {
    endpoint?: EntityConfigFunctionOrValue;
    loadAll?: boolean;
    cache?: ModelEntityCacheConfig;
    baseUrl?: EntityConfigFunctionOrValue;
    allItemsProperty?: string;
    allItemsEndpoint?: string;
    allItemsEndpointTrailingSlash?: boolean;
    parseDataQuery?: (dataQuery: DataQuery) => {
        [index: string]: any;
    };
}
export interface ModelEntityCacheConfig {
    time?: number;
    max?: number;
}
export declare type EntityConfigFunctionOrValue = ((config?: ParisConfig) => string) | string;
