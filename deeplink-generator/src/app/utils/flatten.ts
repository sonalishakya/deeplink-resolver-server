type JsonPrimitive = string | number | boolean | null | undefined;

type JsonObject = {
    [key: string]: JsonValue;
};

type JsonArray = JsonValue[];

type JsonValue = JsonPrimitive | JsonObject | JsonArray;

export interface FillerTypeObject {
    filler: string;
    type: string;
    [key: string]: unknown;
}

function isFillerTypeObject(obj: unknown): obj is FillerTypeObject {
    return (
        typeof obj === 'object' && 
        obj !== null && 
        'filler' in obj && 
        'type' in obj
    );
}

export function flattenTemplate(obj: JsonValue): Record<string, JsonValue> {
    const result: Record<string, JsonValue> = {};

    function flatten(currentObj: JsonValue, prefix = ''): void {
        // Handle null or undefined
        if (currentObj === null || currentObj === undefined) {
            return;
        }

        // Handle primitive values
        if (typeof currentObj !== 'object') {
            result[prefix] = currentObj;
            return;
        }

        // Handle array
        if (Array.isArray(currentObj)) {
            currentObj.forEach((item, index) => {
                const arrayKey = prefix ? `${prefix}[${index}]` : `[${index}]`;
                
                if (item === null || item === undefined) {
                    result[arrayKey] = item;
                } else if (typeof item === 'object') {
                    flatten(item, arrayKey);
                } else {
                    result[arrayKey] = item;
                }
            });
            return;
        }

        // Handle object
        for (const [key, value] of Object.entries(currentObj)) {
            // Current full path key
            const fullKey = prefix ? `${prefix}.${key}` : key;

            // If the object has 'filler' and 'type', keep the entire object
            if (isFillerTypeObject(value)) {
                result[fullKey] = value;
                continue;
            }

            // Recursively flatten
            if (typeof value === 'object' && value !== null) {
                flatten(value, fullKey);
            } else {
                result[fullKey] = value;
            }
        }
    }

    flatten(obj);
    return result;
}
