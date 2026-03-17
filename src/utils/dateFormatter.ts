const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

/**
 * Converts a date string from "DD.MM" format to "D Month" format.
 * @example formatDayMonth('01.01') // "1 January"
 * @example formatDayMonth('25.12') // "25 December"
 */
export function formatDayMonth(ddMm: string | null | undefined): string {
  if (ddMm == null) {
    return '';
  }

  const match = ddMm.match(/^(\d{1,2})\.(\d{1,2})$/);
  if (!match) {
    throw new Error(`Invalid date format "${ddMm}". Expected "DD.MM".`);
  }

  const day = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;

  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error(`Invalid month "${match[2]}". Expected 01–12.`);
  }
  if (day < 1 || day > 31) {
    throw new Error(`Invalid day "${match[1]}". Expected 01–31.`);
  }

  return `${day} ${MONTHS[monthIndex]}`;
}
