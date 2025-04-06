export const parsePeriodEnd = (period?: string | null): Date | 'Present' | null => {
  if (!period) return null;

  const parts = period.split(' - ');
  const end = parts[1]?.trim();

  if (!end) return null;
  if (end.toLowerCase() === 'present') return 'Present';

  const parsed = new Date(Date.parse(`${end} 1`));
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};
