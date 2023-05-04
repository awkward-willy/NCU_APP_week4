export function add(a: number, b: number): number {
  return a + b;
}

export function concatString(a: string, b: string): string {
  return a + b;
}

export function makeArray(a: number): number[] {
  // make array from 1 to a
  return Array.from({ length: a }, (_, i) => i + 1);
}

export function makeObject(task: string, priority: number): object {
  return { task, priority };
}


