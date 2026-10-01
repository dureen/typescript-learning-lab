/**
 * Intermediate Lesson 11 – Async / Await
 */

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(name: string): Promise<string> {
  console.log(`Fetching ${name}...`);
  await delay(300);
  return `Data from ${name}`;
}

async function main() {
  const results = await Promise.all([
    fetchData("API-A"),
    fetchData("API-B"),
  ]);
  results.forEach((r) => console.log(r));
}

main();
