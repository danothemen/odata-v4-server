import "reflect-metadata";
import { ODataController } from "./controller";
export declare type Decorator = ((target?: any, targetKey?: string, parameterIndex?: number | TypedPropertyDescriptor<any>) => any);
export declare namespace Edm {
    const Binary: any;
    const Boolean: any;
    const Byte: any;
    const Date: any;
    const DateTimeOffset: any;
    const Decimal: any;
    const Double: any;
    const Duration: any;
    const Guid: any;
    const Int16: any;
    const Int32: any;
    const Int64: any;
    const SByte: any;
    const Single: any;
    const Stream: any;
    const String: any;
    const TimeOfDay: any;
    const Geography: any;
    const GeographyPoint: any;
    const GeographyLineString: any;
    const GeographyPolygon: any;
    const GeographyMultiPoint: any;
    const GeographyMultiLineString: any;
    const GeographyMultiPolygon: any;
    const GeographyCollection: any;
    const Geometry: any;
    const GeometryPoint: any;
    const GeometryLineString: any;
    const GeometryPolygon: any;
    const GeometryMultiPoint: any;
    const GeometryMultiLineString: any;
    const GeometryMultiPolygon: any;
    const GeometryCollection: any;
    function Collection(elementType: Function): Decorator;
    function getTypeName(target: Function, propertyKey: string): string;
    function getType(target: Function, propertyKey: string): Function | string;
    function isCollection(target: Function, propertyKey: string): boolean;
    function getProperties(target: Function): string[];
    function getParameters(target: Function, targetKey: string): any[];
    const Key: (target: any, targetKey: any) => void;
    function isKey(target: Function, propertyKey: string): boolean;
    function getKeyProperties(target: Function): string[];
    function escape(value: any, type: any): any;
    const Computed: (target: any, targetKey: any) => void;
    function isComputed(target: Function, propertyKey: string): boolean;
    const Nullable: (target: any, targetKey: any, parameterIndex?: number) => void;
    function isNullable(target: Function, propertyKey: string): boolean;
    const Required: (target: any, targetKey: any, parameterIndex?: number) => void;
    function isRequired(target: Function, propertyKey: string): boolean;
    const ActionImport: (target: any, targetKey: any) => void;
    const Action: (target: any, targetKey: any) => void;
    function FunctionImport(): any;
    function FunctionImport(returnType?: any): any;
    function FunctionImport(target?: any, targetKey?: string): any;
    function Function(): any;
    function Function(returnType?: any): any;
    function Function(target?: any, targetKey?: string): any;
    function getOperations(target: Function): string[];
    function getReturnTypeName(target: Function, propertyKey: string): string;
    function getReturnType(target: Function, propertyKey: string): Function | string;
    function isActionImport(target: Function, propertyKey: string): boolean;
    function isFunctionImport(target: Function, propertyKey: string): boolean;
    function isAction(target: Function, propertyKey: string): boolean;
    function isFunction(target: Function, propertyKey: string): boolean;
    function ComplexType(type: Function): (target: any, targetKey: any) => void;
    function isComplexType(target: Function, propertyKey: string): boolean;
    function MediaEntity(contentType: string): {
        (target: Function): void;
        (target: Object, targetKey: string | symbol): void;
    };
    function isMediaEntity(target: Function): boolean;
    function getContentType(target: Function): any;
    const OpenType: {
        (target: Function): void;
        (target: Object, targetKey: string | symbol): void;
    };
    function isOpenType(target: Function): boolean;
    function EntityType(type?: Function | string): (target: any, targetKey?: string) => void;
    function isEntityType(target: Function, propertyKey: string): boolean;
    function register(type: Function): void;
    function Convert(converter: Function): (target: any, targetKey: any) => void;
    function getConverter(target: Function, propertyKey: string): Function;
    function Annotate(...annotation: any[]): (target: any, targetKey?: string) => void;
    function getAnnotations(target: Function, targetKey?: string): any[];
    function ForeignKey(...keys: string[]): (target: any, targetKey?: string) => void;
    function getForeignKeys(target: Function, targetKey?: string): string[];
    function Partner(property: string): {
        (target: Function): void;
        (target: Object, targetKey: string | symbol): void;
    };
    function getPartner(target: any, targetKey: string): any;
    function EntitySet(name: string): (controller: typeof ODataController) => void;
}