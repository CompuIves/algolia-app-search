// This was a fun side thing I wanted to make, a small validator :)

type Type = {
  validation: (value: any) => string | null;
  required: boolean;
};

type TypeWithRequire = Type & {
  isRequired: Type;
};

/**
 * Create a type that can be used as validation
 * 
 * @param {Function} validation A function that will receive the value, and returns a string if invalid, null if valid
 * @returns {TypeWithRequire} 
 */
export function createType(
  validation: (value: any) => string | null,
): TypeWithRequire {
  return {
    validation,
    required: false,
    isRequired: {
      validation,
      required: true,
    },
  };
}

// Type that checks for string type
const stringValidation = (value: any) => {
  if (typeof value === 'string') return null;

  return `type is ${typeof value}, should be string`;
};
export const StringType = createType(stringValidation);

// Type that checks for number type
const numberValidation = (value: any) => {
  if (typeof value === 'number') return null;

  return `type is ${typeof value}, should be number`;
};
export const NumberType = createType(numberValidation);

type TypeObject = {
  [key: string]: Type | TypeWithRequire;
};

/**
 * Creates a function that will validate the fields of any object that's thrown
 * at it
 * 
 * @param {TypeObject} typeStructure 
 * @returns An array of errors, empty array if there is no error
 */
export default function validate(typeStructure: TypeObject) {
  return (object: { [key: string]: any }) => {
    if (object == null) {
      return ['No entity is provided'];
    }

    // Check all fields of type validation
    const errors = Object.keys(typeStructure).map(key => {
      const type = typeStructure[key];

      if (!type) {
        return `'${key}' is not in type definition`;
      }

      if (object[key] == null) {
        if (type.required) {
          return `'${key}' is missing`;
        }
      } else {
        const error = type.validation(object[key]);
        if (error) return `${key}: ${error}`;
      }

      return undefined;
    });

    return errors.filter(x => x);
  };
}
