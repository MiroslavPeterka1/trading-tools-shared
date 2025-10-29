export async function asyncWait(millisecond: number) {
  await new Promise((resolve) => setTimeout(resolve, millisecond));
}
