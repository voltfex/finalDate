import {getFinalDate} from "@/src/lib/getFinalDate";

export default function Home() {
    const timeData = getFinalDate();

    const timeUnits = [
        {label: "Лет", value: timeData.diffInYears, icon: "🕰️"},
        {label: "Месяцев", value: timeData.diffInMonths, icon: "📅"},
        {label: "Недель", value: timeData.diffInWeeks, icon: "🗓️"},
        {label: "Дней", value: timeData.diffInDays, icon: "📆"},
        {label: "Часов", value: timeData.diffInHours, icon: "⏰"},
        {label: "Минут", value: timeData.diffInMinutes, icon: "⏱️"},
        {label: "Секунд", value: timeData.diffInSeconds, icon: "⚡"}
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8 pb-20">
            <div className="max-w-4xl mx-auto">
                <main className="flex flex-col items-center text-center">
                    <div className="mb-12">
                        <h1 className='text-3xl md:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4'>
                            До конца осталось
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Таймер обратного отсчета до 17 февраля 2027 года
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {timeUnits.map((unit, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-2xl mb-3">{unit.icon}</div>
                                <div className="text-3xl font-bold text-blue-300 mb-2">
                                    {Math.floor(unit.value)}
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">
                                    {unit.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 w-full max-w-2xl">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>17.02.2025</span>
                            <span>Сегодня</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                                style={{
                                    width: `${Math.min(100, (timeData.diffInDaysFromStart / timeData.totalDays) * 100)}%`
                                }}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>Начало: 17.02.2025</span>
                            <span>Прошло: {Math.round((timeData.diffInDaysFromStart / timeData.totalDays) * 100)}%</span>
                            <span>Прошло дней: {Math.floor(timeData.diffInDaysFromStart)}</span>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-gray-400 text-sm">
                        <p>Текущее время: {new Date().toLocaleString('ru-RU')}</p>
                    </div>
                </main>
            </div>
        </div>
    );
}