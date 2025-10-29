export function parseTime(value?: string | number): number | null {
  if (value == null) return null;
  if (typeof value === 'number') return value;
  // try to parse human-readable timestamps (returns ms)
  const ms = Date.parse(value);
  if (!isNaN(ms)) return ms;
  // fallback: if string contains only digits, use that
  const digits = value.replace(/\D/g, '');
  if (digits) return Number(digits);
  return null;
}
