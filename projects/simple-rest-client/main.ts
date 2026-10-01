/**
 * Simple typed REST client example
 */

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
}

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  // In a real project you would use fetch or axios
  console.log(`${options.method ?? "GET"} ${url}`);
  // Simulated response
  return { success: true } as T;
}

async function main() {
  const data = await request<{ success: boolean }>("https://api.example.com/users");
  console.log(data);
}

main();
