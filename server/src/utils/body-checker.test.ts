import generateValidation, { StringType, NumberType } from './body-checker';

describe('body-checker', () => {
  const testValidation = (definition, object) => {
    expect(generateValidation(definition)(object)).toMatchSnapshot();
  };

  it('can detect missing fields', () => {
    const definition = {
      title: StringType.isRequired,
    };
    const object = {};
    testValidation(definition, object);
  });

  it('ignores non-required fields', () => {
    const definition = {
      title: StringType,
    };
    const object = {};
    testValidation(definition, object);
  });

  it('can detect wrong types', () => {
    const definition = {
      title: StringType,
    };
    const object = { title: 2 };
    testValidation(definition, object);
  });

  it("doesn't error on right types", () => {
    const definition = {
      title: StringType,
    };
    const object = { title: 'piano' };
    testValidation(definition, object);
  });

  it('can work with more fields', () => {
    const definition = {
      title: StringType,
      rating: NumberType,
    };
    const object = { title: 'piano', rating: 4 };
    testValidation(definition, object);
  });

  it('validates more fields', () => {
    const definition = {
      title: StringType,
      rating: StringType,
    };
    const object = { title: 'piano', rating: 4 };
    testValidation(definition, object);
  });

  it('can throw multiple errors', () => {
    const definition = {
      title: StringType,
      rating: NumberType,
    };
    const object = { title: 2, rating: 'piano' };
    testValidation(definition, object);
  });

  it('works with null objects', () => {
    const definition = {
      title: StringType,
      rating: NumberType,
    };

    testValidation(definition, null);
  });
});
