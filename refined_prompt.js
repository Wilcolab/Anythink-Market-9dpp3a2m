/**
 * Converts a string to camelCase.
 *
 * Handles multiple spaces, special characters, numbers, and mixed cases.
 * - Trims leading and trailing whitespace.
 * - Replaces non-alphanumeric characters (except spaces) with spaces.
 * - Splits the string into words, handling multiple spaces.
 * - The first word is lowercased; subsequent words are capitalized and concatenated.
 * - Returns an empty string if input is empty or contains no valid words.
 *
 * @param {string} s - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If the input is not a string.
 */

/**
 * Converts a string to dot.case.
 *
 * Handles multiple spaces, special characters, numbers, and mixed cases.
 * - Trims leading and trailing whitespace.
 * - Replaces non-alphanumeric characters (except spaces) with spaces.
 * - Splits the string into words, handling multiple spaces.
 * - Joins all words with a dot ('.'), lowercasing each word.
 * - Returns an empty string if input is empty or contains no valid words.
 *
 * @param {string} s - The input string to convert.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If the input is not a string.
 */
import re

def to_camel_case(s):
    """
    Converts a string to camelCase.
    Handles multiple spaces, special characters, numbers, and mixed cases.
    Ignores non-alphanumeric characters unless part of a word.
    Trims whitespace and normalizes input.
    Raises TypeError if input is not a string.
    """

    if not isinstance(s, str):
        raise TypeError("Input must be a string")

    # Trim leading/trailing whitespace and normalize spaces
    s = s.strip()
    # Replace non-alphanumeric (except spaces) with spaces
    s = re.sub(r'[^A-Za-z0-9 ]+', ' ', s)
    # Split into words (handles multiple spaces)
    words = s.split()

    if not words:
        return ''

    # First word lowercase, rest capitalized
    camel = [words[0].lower()]
    for word in words[1:]:
        camel.append(word.capitalize())

    return ''.join(camel)

# Basic test cases
if __name__ == "__main__":
    assert to_camel_case("  hello world  ") == "helloWorld"
    assert to_camel_case("This_is a test!") == "thisIsATest"
    assert to_camel_case("multiple   spaces") == "multipleSpaces"
    assert to_camel_case("special@#characters!") == "specialCharacters"
    assert to_camel_case("123 numbers first") == "123NumbersFirst"
    assert to_camel_case("MiXeD CaSe") == "mixedCase"
    assert to_camel_case("") == ""
    try:
        to_camel_case(123)
    except TypeError:
        pass
    else:
        assert False, "TypeError not raised for non-string input"
    print("All tests passed.")

    def to_dot_case(s):
        """
        Converts a string to dot.case.
        Handles multiple spaces, special characters, numbers, and mixed cases.
        Ignores non-alphanumeric characters unless part of a word.
        Trims whitespace and normalizes input.
        Raises TypeError if input is not a string.
        """

        if not isinstance(s, str):
            raise TypeError("Input must be a string")

        s = s.strip()
        s = re.sub(r'[^A-Za-z0-9 ]+', ' ', s)
        words = s.split()

        if not words:
            return ''

        return '.'.join(word.lower() for word in words)

    # Basic test cases for to_dot_case
    assert to_dot_case("  hello world  ") == "hello.world"
    assert to_dot_case("This_is a test!") == "this.is.a.test"
    assert to_dot_case("multiple   spaces") == "multiple.spaces"
    assert to_dot_case("special@#characters!") == "special.characters"
    assert to_dot_case("123 numbers first") == "123.numbers.first"
    assert to_dot_case("MiXeD CaSe") == "mixed.case"
    assert to_dot_case("") == ""
    try:
        to_dot_case(123)
    except TypeError:
        pass
    else:
        assert False, "TypeError not raised for non-string input"
    print("All dot.case tests passed.")

