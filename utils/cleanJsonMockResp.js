export function cleanJsonMockResp(doubleEncodedString) {
  const result = [];

  try {
    // Step 1: Fix outer structure if it's wrapped in curly braces
    let modifiedString = doubleEncodedString.trim();
    if (modifiedString.startsWith('{') && modifiedString.endsWith('}')) {
      modifiedString = '[' + modifiedString.slice(1, -1) + ']';
    }

    // Step 2: Parse the string as an array of JSON strings
    const jsonArray = JSON.parse(modifiedString);

    // Step 3: Parse each item in the array
    jsonArray.forEach((jsonString) => {
      try {
        const parsedItem = JSON.parse(jsonString);
        result.push(parsedItem);
      } catch (err) {
        console.error("Failed to parse JSON string:", jsonString);
      }
    });

    return result;
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    return [];
  }
}