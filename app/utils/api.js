export async function testAPIGet(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    if (!response.ok || response.error) {
      throw new Error(response.error || `Unknown error occurred (HTTP ${response.status})!`);
    } else {
      const returnedData = await response.json();
      return returnedData.name;
    }
  } catch (error) {
    return error;
  }
}
