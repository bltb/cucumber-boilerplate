import setInputField from 'src/support/action/setInputField';

describe('setInputField', () => {
    let expectToHaveLengthOf;
    let expectToHaveLengthOfAtLeast;
    let addValueMock;
    let setValueMock;

    beforeEach(() => {
        addValueMock = jest.fn();
        setValueMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            addValue: addValueMock,
            setValue: setValueMock,
        });

        global.$$ = jest.fn(() => (['1']))
            .mockImplementationOnce(() => [])
            .mockImplementationOnce(() => ['1', '2']);

        expectToHaveLengthOf = jest.fn();
        expectToHaveLengthOfAtLeast = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                have: {
                    length: {
                        of: {
                            at: {
                                least: expectToHaveLengthOfAtLeast,
                            },
                        },
                    },
                    lengthOf: expectToHaveLengthOf,
                },
            },
        }));
    });

    it('should fail if the element is not on the page', () => {
        setInputField('add', 'value', 'element');

        _expect(addValueMock).toHaveBeenCalledTimes(1);
        _expect(addValueMock).toHaveBeenCalledWith('value');

        _expect(setValueMock).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist '
            + 'exactly 1 time(s)'
        );
    });

    it('should fail if there is more than 1 element on the page', () => {
        setInputField('add', 'value', 'element');

        _expect(addValueMock).toHaveBeenCalledTimes(1);
        _expect(addValueMock).toHaveBeenCalledWith('value');

        _expect(setValueMock).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist '
            + 'exactly 1 time(s)'
        );
    });

    it('should be able to add a value to an element', () => {
        setInputField('add', 'value', 'element');

        _expect(addValueMock).toHaveBeenCalledTimes(1);
        _expect(addValueMock).toHaveBeenCalledWith('value');

        _expect(setValueMock).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist '
            + 'exactly 1 time(s)'
        );
    });

    it('should be able to set the value of an element', () => {
        setInputField('set', 'value', 'element');

        _expect(setValueMock).toHaveBeenCalledTimes(1);
        _expect(setValueMock).toHaveBeenCalledWith('value');

        _expect(addValueMock).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist '
            + 'exactly 1 time(s)'
        );
    });

    it('should be able to set an empty value of an element', () => {
        setInputField('set', '', 'element');

        _expect(setValueMock).toHaveBeenCalledTimes(1);
        _expect(setValueMock).toHaveBeenCalledWith('');

        _expect(addValueMock).not.toHaveBeenCalled();

        _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
        _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
            1,
            'Element with selector "element" should exist '
            + 'exactly 1 time(s)'
        );
    });
});
