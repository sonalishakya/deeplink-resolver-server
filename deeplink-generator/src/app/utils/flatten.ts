type JsonPrimitive = string | number | boolean | null | undefined;

type JsonObject = {
    [key: string]: JsonValue;
};

type JsonArray = JsonValue[];

type JsonValue = JsonPrimitive | JsonObject | JsonArray;

export interface FillerTypeObject {
    filler: string;
    type: string;
    enum?: Array<string | number>;
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

        // Handle FillerTypeObject at any level
        if (isFillerTypeObject(currentObj)) {
            result[prefix] = currentObj;
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
                flatten(item, arrayKey);
            });
            return;
        }

        // Handle object
        for (const [key, value] of Object.entries(currentObj)) {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            flatten(value, fullKey);
        }
    }

    flatten(obj);
    return result;
}
