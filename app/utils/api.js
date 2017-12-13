export async function testAPIGet(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const returnedData = await response.json();

  if (!response.ok || returnedData.error) {
    throw new Error(returnedData.error || `Unknown error occurred (HTTP ${response.status})!`);
  }

  return returnedData.name;
}
