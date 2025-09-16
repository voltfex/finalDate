

export function getFinalDate() {
    const now  = new Date();
    const startDate = new Date('2025-02-17T00:00:00');
    const target = new Date('2027-02-17T00:00:00');
    const diffInMs = target - now;

    const totalMs = target - startDate;
    const passedMs = now - startDate;

    const totalDays = totalMs / (1000 * 60 * 60 * 24);
    const diffInDaysFromStart = Math.max(0, passedMs / (1000 * 60 * 60 * 24));

    return {
        diffInMs,
        diffInSeconds: diffInMs / 1000,
        diffInMinutes: diffInMs / (1000 * 60),
        diffInHours: diffInMs / (1000 * 60 * 60),
        diffInDays: diffInMs / (1000 * 60 * 60 * 24),
        diffInWeeks: diffInMs / (1000 * 60 * 60 * 24 * 7),
        diffInMonths: diffInMs / (1000 * 60 * 60 * 24 * 30.436875),
        diffInYears: diffInMs / (1000 * 60 * 60 * 24 * 365.25),
        isPast: diffInMs < 0,
        totalDays,
        diffInDaysFromStart,
        startDate: startDate.toLocaleDateString('ru-RU'),
        currentDate: now.toLocaleDateString('ru-RU'),
        progressPercentage: Math.min(100, (diffInDaysFromStart / totalDays) * 100)
    };
}