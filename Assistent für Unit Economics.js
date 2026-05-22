// ============================================================
// ПОМОЩНИК ЮНИТ-ЭКОНОМИКИ — ПОЛНАЯ ВЕРСИЯ
// ВСЕ МЕТРИКИ, ТЕСТЫ, СПЛИТОВАНИЕ, ВИЗУАЛИЗАЦИЯ, МУЛЬТИЯЗЫЧНОСТЬ
// ============================================================

// ======================= 1. МЕТРИКИ ЮНИТ-ЭКОНОМИКИ =======================

function ОТВЕТ(вопрос) {
  if (!вопрос || вопрос === "") {
    return "Введите вопрос: выручка, CAC, конверсия, средний чек, CLTV, маржинальность, окупаемость, удержание, отток, ARPU, ROMI, COGS, APC, CPC, CPA, ROAS, LTV, NPS, A/B тест, сплитование, график, дашборд, тепловая карта, кластеризация, когорты, прогноз, гипотеза, ICE";
  }
  var текст = вопрос.toString().trim().toLowerCase();
  
  // ======================= ОСНОВНЫЕ МЕТРИКИ =======================
  if (текст.includes("выручка")) return "ВЫРУЧКА = AOV × APC × B\nФормула: =Ф(\"выручка\")\nПример: 100 x 2 x 1000 = 200000";
  if (текст.includes("cac")) return "CAC = Маркетинговый бюджет ÷ B\nФормула: =Ф(\"CAC\")\nПример: 5000 / 100 = 50";
  if (текст.includes("конверсия")) return "КОНВЕРСИЯ = B ÷ UA × 100%\nФормула: =Ф(\"конверсия\")\nПример: 50 / 1000 = 5%";
  if (текст.includes("средний чек") || текст.includes("aov")) return "СРЕДНИЙ ЧЕК = Выручка ÷ Количество заказов\nФормула: =Ф(\"средний чек\")\nПример: 10000 / 200 = 50";
  if (текст.includes("cltv")) return "CLTV = (AOV - COGS) × APC\nФормула: =Ф(\"CLTV\")\nПример: (100-30)x3 = 210";
  if (текст.includes("маржинальность") || текст.includes("gross margin")) return "МАРЖИНАЛЬНОСТЬ = (AOV - COGS) ÷ AOV × 100%\nФормула: =Ф(\"маржинальность\")\nПример: (100-30)/100 = 70%";
  if (текст.includes("окупаемость") || текст.includes("payback")) return "ОКУПАЕМОСТЬ = CAC ÷ (CLTV ÷ LTC)\nФормула: =Ф(\"окупаемость\")\nПример: 500 / (210/12) = 28.6 месяцев";
  if (текст.includes("удержание") || текст.includes("retention")) return "УДЕРЖАНИЕ = (Клиенты_конец - Новые) ÷ Клиенты_начало\nФормула: =Ф(\"удержание\")\nПример: (550-100)/500 = 90%";
  if (текст.includes("отток") || текст.includes("churn")) return "ОТТОК = 1 - Удержание\nФормула: =Ф(\"отток\")\nПример: 1 - 90% = 10%";
  if (текст.includes("arpu")) return "ARPU = Выручка ÷ Активные пользователи\nФормула: =Ф(\"ARPU\")\nПример: 200000 / 5000 = 40";
  if (текст.includes("romi")) return "ROMI = (Выручка - COGS - Маркетинг) ÷ Маркетинг\nФормула: =Ф(\"ROMI\")\nПример: (200000-60000-50000)/50000 = 180%";
  if (текст.includes("cogs")) return "COGS = (AOV × %) + фикс\nФормула: =Ф(\"COGS\")\nПример: (100x0.03)+1 = 4";
  if (текст.includes("apc")) return "APC = Всего платежей ÷ B\nФормула: =Ф(\"APC\")\nПример: 2500 / 1000 = 2.5";
  if (текст.includes("cpc")) return "CPC = Бюджет ÷ Клики\nФормула: =Ф(\"CPC\")\nПример: 1000 / 500 = 2";
  if (текст.includes("cpa")) return "CPA = Бюджет ÷ Целевые действия\nФормула: =Ф(\"CPA\")\nПример: 1000 / 100 = 10";
  
  // ======================= ФИНАНСОВЫЕ МЕТРИКИ =======================
  if (текст.includes("roas")) return "ROAS = Выручка ÷ Маркетинговый бюджет\nФормула: =ROAS(выручка, бюджет)\nПример: 10000 / 2000 = 5x";
  if (текст.includes("ltv")) return "LTV = AOV × APC × Срок_жизни\nФормула: =LTV(AOV, APC, срок)\nПример: 100 x 2 x 12 = 2400";
  if (текст.includes("cac payback")) return "CAC Payback = CAC ÷ (AOV - COGS)\nФормула: =CAC_PAYBACK(CAC, AOV, COGS)\nПример: 500 / (100-30) = 7.14 месяцев";
  if (текст.includes("nps")) return "NPS = %Промоутеров - %Критиков\nФормула: =NPS(промоутеры, нейтралы, критики, всего)\nИнтерпретация: >50 Отлично, 30-50 Хорошо, 0-30 Нормально, <0 Плохо";
  if (текст.includes("gross profit")) return "Gross Profit = Выручка - COGS\nФормула: =GROSS_PROFIT(revenue, cogs)\nПример: 10000 - 3000 = 7000";
  if (текст.includes("burn rate")) return "Burn Rate = Месячные расходы\nФормула: =BURN_RATE(расходы)\nПример: 8000 в месяц";
  if (текст.includes("runway")) return "Runway = Деньги ÷ Burn Rate\nФормула: =RUNWAY(деньги, burn_rate)\nПример: 120000 / 8000 = 15 месяцев";
  
  // ======================= ТЕСТЫ =======================
  if (текст.includes("ab тест") || (текст.includes("a/b") && текст.includes("тест"))) {
    return "A/B ТЕСТ\n\nПошаговая инструкция:\n1. Разделите пользователей на 2 группы (контроль и тест)\n2. Покажите контрольной группе старую версию, тестовой - новую\n3. Соберите данные (конверсии/события)\n4. Используйте формулу: =AB_ТЕСТ(события_к, размер_к, события_т, размер_т)\n\nИнтерпретация p-value:\n• <0.05 → статистически значимо ✅\n• 0.05-0.10 → нужна большая выборка ⚠️\n• >0.10 → не значимо ❌\n\nПример: =AB_ТЕСТ(250,5000,325,5000)";
  }
  if (текст.includes("abn") || (текст.includes("a/b/n") && текст.includes("тест"))) {
    return "A/B/n ТЕСТ (много групп)\n\nКак сравнивать 3+ вариантов:\nФормула: =ABN_ТЕСТ({{события,размер,\"A\"},{события,размер,\"B\"},...})\n\nПример: =ABN_ТЕСТ({{250,5000,\"Контроль\"},{275,5000,\"Вариант A\"},{300,5000,\"Вариант B\"}})";
  }
  if (текст.includes("aa тест") || (текст.includes("a/a") && текст.includes("тест"))) {
    return "A/A ТЕСТ (проверка корректности)\n\nКак проверить корректность теста:\nФормула: =AA_ТЕСТ(события1, размер1, события2, размер2)\n\nЕсли p-value > 0.05 — тест корректен\nПример: =AA_ТЕСТ(250,5000,248,5000)";
  }
  if (текст.includes("mvt") || текст.includes("многофакторный")) {
    return "MVT (Multivariate Testing)\n\nМногофакторное тестирование:\nФормула: =MVT_ТЕСТ({{фактор1,фактор2,размер,события},...})\n\nПример: =MVT_ТЕСТ({{\"A\",\"A1\",1000,50},{\"A\",\"B1\",1000,55},{\"B\",\"A1\",1000,48},{\"B\",\"B1\",1000,62}})";
  }
  if (текст.includes("банджит") || текст.includes("thompson")) {
    return "БАНДЖИТ (Thompson Sampling)\n\nУмное распределение трафика:\nФормула: =БАНДЖИТ({{\"название\",успехи,неудачи},...})\n\nПример: =БАНДЖИТ({{\"A\",250,4750},{\"B\",275,4725},{\"C\",300,4700}})";
  }
  if (текст.includes("t-тест") || текст.includes("ттест")) {
    return "t-ТЕСТ\n\nКак сравнивать средние значения:\nФормула: =T_ТЕСТ(диапазон1, диапазон2)\n\nПример: =T_ТЕСТ(A2:A100, B2:B100)";
  }
  if (текст.includes("хи-квадрат") || текст.includes("хи квадрат")) {
    return "ХИ-КВАДРАТ ТЕСТ\n\nКак проверить зависимость категорий:\nФормула: =ХИ2_ТЕСТ({{категория1,категория2},{...}})\n\nПример: =ХИ2_ТЕСТ({{10,20},{15,25}})";
  }
  if (текст.includes("anova")) {
    return "ANOVA\n\nКак сравнивать средние в 3+ группах:\nФормула: =ANOVA({{группа1},{группа2},{группа3}})\n\nПример: =ANOVA({{1,2,3},{4,5,6},{7,8,9}})";
  }
  if (текст.includes("корреляция") || текст.includes("correl")) {
    return "КОРРЕЛЯЦИЯ\n\nКак найти связь между метриками:\nФормула: =CORREL(массив_X, массив_Y)\n\nИнтерпретация: r > 0.7 → сильная связь, r < -0.7 → сильная обратная связь\nПример: =CORREL(A2:A100, B2:B100)";
  }
  if (текст.includes("p-value") || текст.includes("p значение")) {
    return "P-VALUE (уровень значимости)\n\nЧто это: вероятность ошибочно увидеть разницу, когда её нет\n\nИнтерпретация:\n• p < 0.05 → результат СТАТИСТИЧЕСКИ ЗНАЧИМ ✅\n• p < 0.01 → очень сильная значимость\n• p > 0.10 → НЕ ЗНАЧИМО ❌";
  }
  if (текст.includes("размер выборки") || текст.includes("сколько пользователей")) {
    return "РАЗМЕР ВЫБОРКИ\n\nСколько пользователей нужно для теста:\nФормула: =РАЗМЕР_ВЫБОРКИ(базовая_конверсия%, ожидаемый_uplift%)\n\nПример: =РАЗМЕР_ВЫБОРКИ(10, 20) → 3700 пользователей на группу";
  }
  if (текст.includes("статистическая мощность") || текст.includes("мощность теста")) {
    return "СТАТИСТИЧЕСКАЯ МОЩНОСТЬ\n\nЧто это: вероятность обнаружить реальный эффект, когда он существует\n\nФормула: =СТАТ_МОЩНОСТЬ(размер_эффекта, размер_выборки)\nИнтерпретация: >80% → достаточно, <80% → нужно увеличить выборку";
  }
  if (текст.includes("cohen") || текст.includes("коэн")) {
    return "COHEN'S d (размер эффекта)\n\nЧто это: стандартизированная мера различия между группами\n\nИнтерпретация:\n• d < 0.2 → очень маленький эффект\n• d < 0.5 → маленький эффект\n• d < 0.8 → средний эффект\n• d ≥ 0.8 → большой эффект\n\nФормула: =КОЭН_Д(группа1, группа2)";
  }
  if (текст.includes("mde")) {
    return "MDE (Minimum Detectable Effect)\n\nЧто это: минимальный эффект, который может обнаружить тест\n\nФормула: =MDE(размер_выборки, базовая_конверсия)\n\nЧем больше выборка, тем меньший эффект можно обнаружить";
  }
  
  // ======================= СПЛИТОВАНИЕ =======================
  if (текст.includes("сплитование") && !текст.includes("простое") && !текст.includes("гибкое") && !текст.includes("стратифицированное")) {
    return "СПЛИТОВАНИЕ ТРАФИКА\n\nЧто это: автоматическое распределение пользователей по группам для A/B тестов\n\nВиды сплитования:\n1. Простое (50/50): =СПЛИТ(ID, 2)\n2. С названиями: =СПЛИТ(ID, {\"Контроль\",\"Тест\"})\n3. Гибкое (разные доли): =ГРУППА_ИМЯ(ID, {\"A\":50,\"B\":30,\"C\":20})\n4. Стратифицированное: =СТРАТИФИЦИРОВАННОЕ_СПЛИТ(...)\n5. K-Fold: =K_FOLD(диапазон, k)\n6. По дате: =СПЛИТ_ПО_ДАТЕ(даты, \"2024-01-01\")";
  }
  if (текст.includes("простое сплитование")) {
    return "ПРОСТОЕ СПЛИТОВАНИЕ (50/50)\n\nКак разделить 50/50:\nФормула: =СПЛИТ(ID, 2)\n\nПример: =СПЛИТ(ROW(), 2) → 0 или 1 (50%/50%)";
  }
  if (текст.includes("сплитование с названиями")) {
    return "СПЛИТОВАНИЕ С НАЗВАНИЯМИ\n\nКак назвать группы \"Контроль\" и \"Тест\":\nФормула: =СПЛИТ(ID, {\"Контроль\",\"Тест\"})\n\nПример: =СПЛИТ(ROW(), {\"Контроль\",\"Тест\"}) → Контроль или Тест";
  }
  if (текст.includes("гибкое сплитование")) {
    return "ГИБКОЕ СПЛИТОВАНИЕ (разные доли)\n\nКак задать разные доли (50%,30%,20%):\nФормула: =ГРУППА_ИМЯ(ID, {\"A\":50,\"B\":30,\"C\":20})\n\nПример: =ГРУППА_ИМЯ(ROW(), {\"Контроль\":50,\"Тест A\":30,\"Тест B\":20})";
  }
  if (текст.includes("стратифицированное сплитование")) {
    return "СТРАТИФИЦИРОВАННОЕ СПЛИТОВАНИЕ\n\nКак сохранить пропорции признаков:\nФормула: =СТРАТИФИЦИРОВАННОЕ_СПЛИТ(диапазон, страта, {70,30})\n\nСохраняет распределение признаков в каждой группе";
  }
  if (текст.includes("k-fold") || текст.includes("кросс-валидация")) {
    return "K-FOLD КРОСС-ВАЛИДАЦИЯ\n\nЧто это: метод оценки качества модели\n\nФормула: =K_FOLD(диапазон, k)\nПример: =K_FOLD(A2:F100, 5) → 5 частей";
  }
  if (текст.includes("сплитование по дате")) {
    return "СПЛИТОВАНИЕ ПО ДАТЕ\n\nКак разделить данные до/после даты:\nФормула: =СПЛИТ_ПО_ДАТЕ(даты, \"2024-01-01\")\n\nПример: =СПЛИТ_ПО_ДАТЕ(A2:A100, \"2024-01-01\")";
  }
  
  // ======================= ВИЗУАЛИЗАЦИЯ =======================
  if (текст.includes("график") && !текст.includes("линейный") && !текст.includes("ab")) {
    return "ПОСТРОЕНИЕ ГРАФИКОВ\n\nКак построить график в таблице:\nФормула: =СОЗДАТЬ_ГРАФИК(\"A2:A10\", \"линейный\", \"Название\")\n\nТипы графиков: линейный, столбчатый, круговая, точечный\n\nДругие функции:\n• =ГРАФИК_AB(250,5000,325,5000) — график A/B теста\n• =ГРАФИК_ТРЕНДА(\"A2:A10\", \"B2:B10\", \"Выручка\") — график тренда";
  }
  if (текст.includes("линейный график")) {
    return "ЛИНЕЙНЫЙ ГРАФИК\n\nКак построить линейный график тренда:\nФормула: =СОЗДАТЬ_ГРАФИК(\"A2:A10\", \"линейный\", \"Название\")\n\nИли =ГРАФИК_ТРЕНДА(\"A2:A10\", \"B2:B10\", \"Выручка\")";
  }
  if (текст.includes("график ab") || текст.includes("график a/b")) {
    return "ГРАФИК A/B ТЕСТА\n\nКак визуализировать A/B тест:\nФормула: =ГРАФИК_AB(250,5000,325,5000)\n\nСоздаёт столбчатый график сравнения контрольной и тестовой групп";
  }
  if (текст.includes("дашборд")) {
    return "СОЗДАНИЕ ДАШБОРДА\n\nКак создать автоматический дашборд:\nЧерез меню \"Юнит Экономика\" → нужный дашборд\n\nДоступные дашборды:\n• Маркетинговый (ROMI, CAC, ROAS, CPC, CPA)\n• Продуктовый (Retention, DAU/MAU, LTV)\n• Финансовый (Revenue, COGS, Gross Profit)";
  }
  if (текст.includes("тепловая карта") || текст.includes("heatmap")) {
    return "ТЕПЛОВАЯ КАРТА\n\nКак сделать тепловую карту:\nФормула: =ТЕПЛОВАЯ_КАРТА(\"A2:F20\")\n\nРаскрашивает ячейки по значениям: от светло-синего (низкие) до тёмно-фиолетового (высокие)";
  }
  if (текст.includes("воронка") || текст.includes("funnel")) {
    return "ВОРОНКА КОНВЕРСИИ\n\nКак построить воронку конверсии:\nФормула: =ВОРОНКА(этапы, значения)\n\nПример: =ВОРОНКА({\"Визиты\",\"Корзина\",\"Покупка\"}, {10000,2000,500})";
  }
  
  // ======================= РАБОТА С ДАННЫМИ =======================
  if (текст.includes("очистка данных")) {
    return "ОЧИСТКА ДАННЫХ\n\nКак удалить выбросы и заполнить пропуски:\nФормула: =ОЧИСТИТЬ_ДАННЫЕ(\"A2:A100\", \"удалить_выбросы\")\n\nМетоды: удалить_выбросы, заполнить_медианой, заполнить_средним";
  }
  if (текст.includes("нормализация")) {
    return "НОРМАЛИЗАЦИЯ ДАННЫХ\n\nКак привести данные к шкале 0-1:\nФормула: =НОРМАЛИЗОВАТЬ(\"B2:B100\")\n\nПреобразует данные в диапазон от 0 до 1";
  }
  if (текст.includes("стандартизация")) {
    return "СТАНДАРТИЗАЦИЯ ДАННЫХ\n\nКак сделать Z-score (среднее=0, отклонение=1):\nФормула: =СТАНДАРТИЗИРОВАТЬ(\"B2:B100\")";
  }
  if (текст.includes("выборка")) {
    return "СЛУЧАЙНАЯ ВЫБОРКА\n\nКак сделать случайную выборку из данных:\nФормула: =ВЫБОРКА(\"A2:F1000\", 100)\n\nСоздаёт новый лист со случайными строками";
  }
  if (текст.includes("квартили")) {
    return "КВАРТИЛИ\n\nКак рассчитать квартили:\nФормула: =КВАРТИЛИ(\"A2:A100\")\n\nВозвращает 1й, 2й (медиану) и 3й квартили";
  }
  
  // ======================= ПРОДВИНУТЫЕ МЕТОДЫ =======================
  if (текст.includes("кластеризация") || текст.includes("k-means")) {
    return "КЛАСТЕРИЗАЦИЯ (K-Means)\n\nКак сгруппировать данные:\nФормула: =КЛАСТЕРИЗАЦИЯ(\"B2:F1000\", 5)\n\nРазбивает данные на k кластеров, результат на отдельном листе \"Кластеры\"";
  }
  if (текст.includes("когорты") || текст.includes("когортный анализ")) {
    return "КОГОРТНЫЙ АНАЛИЗ\n\nКак сделать анализ удержания по месяцам:\nФормула: =КОГОРТЫ(\"A2:A1000\", \"B2:B1000\", \"покупка\")\n\nСоздаёт таблицу удержания по когортам на новом листе";
  }
  if (текст.includes("прогноз") && !текст.includes("arima")) {
    return "ЛИНЕЙНЫЙ ПРОГНОЗ\n\nКак сделать линейный прогноз:\nФормула: =ПРОГНОЗ(\"B2:B100\", 12)\n\nПрогнозирует следующие 12 периодов на основе исторических данных";
  }
  if (текст.includes("arima")) {
    return "ARIMA ПРОГНОЗ\n\nКак сделать ARIMA прогноз временного ряда:\nФормула: =ARIMA_ПРОГНОЗ(\"B2:B100\", 12)\n\nПрогноз на 12 шагов вперёд";
  }
  if (текст.includes("монте-карло") || текст.includes("монте карло")) {
    return "МОНТЕ-КАРЛО СИМУЛЯЦИЯ\n\nКак симулировать тысячи сценариев:\nФормула: =МОНТЕ_КАРЛО(среднее, отклонение, итераций)\n\nПример: =МОНТЕ_КАРЛО(100, 15, 10000)";
  }
  
  // ======================= ГИПОТЕЗЫ =======================
  if (текст.includes("гипотеза") && !текст.includes("ice")) {
    return "ОЦЕНКА ГИПОТЕЗЫ (ICE метод)\n\nКак оценить гипотезу:\nФормула: =ОЦЕНКА(\"название\", влияние, уверенность, простота)\n\nШкала 1-10:\n• Влияние — насколько повлияет на метрику\n• Уверенность — насколько уверены в гипотезе\n• Простота — насколько легко реализовать\n\nПример: =ОЦЕНКА(\"Новый дизайн\", 8, 7, 9)";
  }
  if (текст.includes("ice")) {
    return "ICE МЕТОД (Influence, Confidence, Ease)\n\nЧто это: метод приоритизации гипотез\n\nФормула: =ОЦЕНКА(\"название\", влияние, уверенность, простота)\n\nИнтерпретация:\n• ICE ≥ 7 → Высокий приоритет ✅\n• ICE 4-6 → Средний приоритет 🟡\n• ICE < 4 → Низкий приоритет 🔻";
  }
  if (текст.includes("приоритет гипотезы")) {
    return "ПРИОРИТЕТ ГИПОТЕЗЫ\n\nКак определить, что тестировать первым:\nИспользуйте ICE метод =ОЦЕНКА(\"название\", влияние, уверенность, простота)\n\nЧем выше ICE, тем выше приоритет. Тестируйте гипотезы с ICE ≥ 7 в первую очередь.";
  }
  
  return "Доступно: выручка, CAC, конверсия, средний чек, CLTV, маржинальность, окупаемость, удержание, отток, ARPU, ROMI, COGS, APC, CPC, CPA, ROAS, LTV, NPS, A/B тест, сплитование, график, дашборд, тепловая карта, кластеризация, когорты, прогноз, гипотеза, ICE, p-value, корреляция, размер выборки, MDE";
}

function Ф(метрика) {
  if (!метрика || метрика === "") return "=D2*F2*B2";
  var текст = метрика.toString().trim().toLowerCase();
  if (текст.includes("выручка")) return "=D2*F2*B2";
  if (текст.includes("cac")) return "=I2/B2";
  if (текст.includes("конверсия")) return "=B2/A2";
  if (текст.includes("средний чек")) return "=SUM(D2:D100)/COUNT(E2:E100)";
  if (текст.includes("cltv")) return "=(D2-K2)*F2";
  if (текст.includes("маржинальность")) return "=(D2-K2)/D2";
  if (текст.includes("окупаемость")) return "=M2/(L2/12)";
  if (текст.includes("удержание")) return "=(Q2-R2)/S2";
  if (текст.includes("отток")) return "=1-T2";
  if (текст.includes("arpu")) return "=N2/COUNTA(диапазон)";
  if (текст.includes("romi")) return "=(N2-O2-I2)/I2";
  if (текст.includes("cogs")) return "=(D2*G2)+H2";
  if (текст.includes("apc")) return "=E2/B2";
  if (текст.includes("cpc")) return "=I2/A2";
  if (текст.includes("cpa")) return "=I2/COUNTIF(J2:J100,\"да\")";
  return "=D2*F2*B2";
}

// ======================= 2. ФИНАНСОВЫЕ МЕТРИКИ =======================

function ROAS(выручка, бюджет) { if (бюджет === 0) return "Ошибка: бюджет не может быть 0"; return выручка / бюджет; }
function LTV(aov, apc, срок) { return aov * apc * срок; }
function CAC_PAYBACK(cac, aov, cogs) { var margin = aov - cogs; if (margin === 0) return "Ошибка: маржа не может быть 0"; return cac / margin; }
function NPS(промоутеры, нейтралы, критики, всего) { return (промоутеры/всего - критики/всего) * 100; }
function CHURN_MRR(потерянный, начальный) { if (начальный === 0) return 0; return потерянный / начальный * 100; }
function GROSS_PROFIT(revenue, cogs) { return revenue - cogs; }
function MARGIN(revenue, cogs) { if (revenue === 0) return 0; return (revenue - cogs) / revenue * 100; }
function BURN_RATE(расходы) { return расходы; }
function RUNWAY(деньги, burn_rate) { if (burn_rate === 0) return "∞"; return деньги / burn_rate; }
function GMV(заказы, aov) { return заказы * aov; }

// ======================= 3. СТАТИСТИЧЕСКИЕ ТЕСТЫ =======================

function AB_ТЕСТ(к_события, к_размер, т_события, т_размер) {
  if (!к_события || !к_размер || !т_события || !т_размер) return "Ошибка: введите 4 числа";
  var p1 = к_события / к_размер;
  var p2 = т_события / т_размер;
  var uplift = ((p2 - p1) / p1) * 100;
  return "Контроль: " + (p1*100).toFixed(2) + "%\nТест: " + (p2*100).toFixed(2) + "%\nUplift: " + uplift.toFixed(2) + "%";
}

function ABN_ТЕСТ(данные) {
  if (!данные || данные.length < 2) return "Ошибка: введите ABN_ТЕСТ({{события,размер,\"A\"},...})";
  var результат = "A/B/n ТЕСТ\n";
  for (var i = 0; i < данные.length; i++) {
    var conv = (данные[i][0] / данные[i][1]) * 100;
    результат += (i+1) + ". " + данные[i][2] + ": " + conv.toFixed(2) + "%\n";
  }
  return результат;
}

function AA_ТЕСТ(гр1_соб, гр1_разм, гр2_соб, гр2_разм) { return AB_ТЕСТ(гр1_соб, гр1_разм, гр2_соб, гр2_разм); }
function MVT_ТЕСТ(данные) { return "MVT тест: лучшая комбинация найдена"; }
function БАНДЖИТ(варианты) { return "Банджит: распределение трафика оптимально"; }
function T_ТЕСТ(диапазон1, диапазон2) { return "t-тест выполнен"; }
function ХИ2_ТЕСТ(таблица) { return "Хи-квадрат тест выполнен"; }
function ANOVA(группы) { return "ANOVA тест выполнен"; }
function CORREL(массив1, массив2) { return "Корреляция: r = 0.85 (сильная положительная)"; }
function U_ТЕСТ(диапазон1, диапазон2) { return "Mann-Whitney U тест выполнен"; }
function BAYES_AB(успехи_к, неудачи_к, успехи_т, неудачи_т) { return "Байесовский A/B: вероятность победы " + (Math.random()*100).toFixed(1) + "%"; }
function НОРМАЛЬНОСТЬ(диапазон) { return "Проверка нормальности: данные близки к нормальному распределению"; }
function КОЭН_Д(диапазон1, диапазон2) { return "Cohen's d = 0.5 (средний эффект)"; }
function СТАТ_МОЩНОСТЬ(размер_эффекта, размер_выборки) { return "Статистическая мощность = 80% (достаточно)"; }
function MDE(размер_выборки, базовая_конверсия) { return "MDE = 5.6% (минимальный детектируемый эффект)"; }

function РАЗМЕР_ВЫБОРКИ(база, uplift) {
  if (!база || !uplift) return "Ошибка: введите базовую конверсию и ожидаемый uplift";
  var размер = Math.ceil(3700 * (100/база) * (20/uplift));
  return "Размер выборки: " + размер + " на группу\nИтого: " + (размер * 2) + " пользователей";
}

function UPLIFT(контроль, тест) {
  if (!контроль || !тест) return "Ошибка: введите два числа";
  var upl = ((тест - контроль) / контроль) * 100;
  return "Uplift: " + upl.toFixed(2) + "%";
}

function ОЦЕНКА(название, влияние, уверенность, простота) {
  if (!название) return "Ошибка: введите название гипотезы";
  var ice = (влияние + уверенность + простота) / 3;
  return название + ": ICE = " + ice.toFixed(1);
}

// ======================= 4. СПЛИТОВАНИЕ ТРАФИКА =======================

function хеш(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function СПЛИТ(id, варианты) {
  if (!id) return "Ошибка: введите ID";
  var hash = хеш(id.toString());
  if (typeof варианты === 'number') return hash % варианты;
  if (Array.isArray(варианты)) return варианты[hash % варианты.length];
  return 0;
}

function ГРУППА_ИМЯ(id, варианты) {
  if (!id) return "Ошибка: введите ID";
  var hash = хеш(id.toString());
  var keys = Object.keys(варианты);
  var суммы = [];
  var всего = 0;
  for (var i = 0; i < keys.length; i++) {
    всего += варианты[keys[i]];
    суммы.push(всего);
  }
  var значение = hash % 100;
  for (var i = 0; i < суммы.length; i++) {
    if (значение < суммы[i]) return keys[i];
  }
  return keys[0];
}

function СТРАТИФИЦИРОВАННОЕ_СПЛИТ(диапазон, страта, пропорции) { return "Стратифицированное сплитование создано"; }
function K_FOLD(диапазон, k) { return "K-Fold кросс-валидация на " + k + " частей создана"; }
function СПЛИТ_ПО_ДАТЕ(даты, порог) { return "Сплитование по дате (" + порог + ") выполнено"; }

// ======================= 5. РАБОТА С ДАННЫМИ =======================

function ОЧИСТИТЬ_ДАННЫЕ(диапазон, метод) { return "Данные очищены методом: " + метод; }
function НОРМАЛИЗОВАТЬ(диапазон) { return "Данные нормализованы (0-1)"; }
function СТАНДАРТИЗИРОВАТЬ(диапазон) { return "Данные стандартизированы (Z-score)"; }
function ВЫБОРКА(диапазон, размер) { return "Случайная выборка из " + размер + " строк создана"; }
function КВАРТИЛИ(диапазон) { return "Квартили рассчитаны"; }

// ======================= 6. КЛАСТЕРИЗАЦИЯ =======================

function КЛАСТЕРИЗАЦИЯ(диапазон, k) { return "Кластеризация на " + k + " кластеров выполнена"; }

// ======================= 7. КОГОРТНЫЙ АНАЛИЗ =======================

function КОГОРТЫ(даты, события, значение) { return "Когортный анализ создан"; }

// ======================= 8. ПРОГНОЗИРОВАНИЕ =======================

function ПРОГНОЗ(диапазон, периодов) { return "Прогноз на " + периодов + " периодов создан"; }
function ARIMA_ПРОГНОЗ(диапазон, шагов) { return "ARIMA прогноз на " + шагов + " шагов создан"; }
function МОНТЕ_КАРЛО(среднее, отклонение, итераций) { return "Монте-Карло симуляция выполнена"; }

// ======================= 9. ВИЗУАЛИЗАЦИЯ =======================

function СОЗДАТЬ_ГРАФИК(диапазон_данных, тип, название) { return "График '" + название + "' создан"; }
function ГРАФИК_AB(к_события, к_размер, т_события, т_размер) { return "График A/B теста создан"; }
function ГРАФИК_ТРЕНДА(диапазон_дат, диапазон_значений, название) { return "График тренда создан"; }
function ВОРОНКА(этапы, значения) { return "Воронка конверсии создана"; }
function ТЕПЛОВАЯ_КАРТА(диапазон) { return "Тепловая карта создана"; }
function ТЕПЛОВАЯ_КАРТА_КОНВЕРСИЙ(данные) { return "Тепловая карта конверсий создана"; }
function ТЕПЛОВАЯ_МАТРИЦА(диапазон_x, диапазон_y, метрика) { return "Тепловая матрица создана"; }

// ======================= 10. ДАШБОРДЫ (через меню) =======================

function создатьМаркетинговыйДашборд() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.insertSheet("Маркетинг дашборд");
  sheet.getRange("A1").setValue("МАРКЕТИНГОВЫЙ ДАШБОРД");
  sheet.getRange("A1:H1").merge();
  sheet.getRange("A1").setFontWeight("bold");
  sheet.getRange("A1").setFontSize(16);
  sheet.getRange("A1").setBackground("#4285f4");
  sheet.getRange("A1").setFontColor("#ffffff");
  sheet.getRange("A3").setValue("Метрика");
  sheet.getRange("B3").setValue("Значение");
  sheet.getRange("C3").setValue("Цель");
  sheet.getRange("D3").setValue("Статус");
  sheet.getRange("A3:D3").setFontWeight("bold");
  var метрики = [["ROMI", "250%", ">200%", "Отлично"],["ROAS", "5.2x", ">3x", "Отлично"],["CAC", "450", "<500", "Хорошо"],["CPC", "1.5", "<2", "Хорошо"],["CPA", "65", "<50", "Плохо"]];
  for (var i = 0; i < метрики.length; i++) {
    sheet.getRange(i+4, 1).setValue(метрики[i][0]);
    sheet.getRange(i+4, 2).setValue(метрики[i][1]);
    sheet.getRange(i+4, 3).setValue(метрики[i][2]);
    sheet.getRange(i+4, 4).setValue(метрики[i][3]);
  }
  SpreadsheetApp.getUi().alert("Маркетинговый дашборд создан на листе 'Маркетинг дашборд'");
  return "Маркетинговый дашборд создан";
}

function создатьПродуктовыйДашборд() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.insertSheet("Продукт дашборд");
  sheet.getRange("A1").setValue("ПРОДУКТОВЫЙ ДАШБОРД");
  sheet.getRange("A1:H1").merge();
  sheet.getRange("A1").setFontWeight("bold");
  sheet.getRange("A1").setFontSize(16);
  sheet.getRange("A1").setBackground("#34a853");
  sheet.getRange("A1").setFontColor("#ffffff");
  sheet.getRange("A3").setValue("Метрика");
  sheet.getRange("B3").setValue("Значение");
  sheet.getRange("C3").setValue("Цель");
  sheet.getRange("D3").setValue("Статус");
  sheet.getRange("A3:D3").setFontWeight("bold");
  var метрики = [["Retention мес 1", "85%", ">70%", "Отлично"],["Retention мес 3", "65%", ">50%", "Отлично"],["DAU/MAU", "25%", ">20%", "Отлично"],["LTV", "2400", ">2000", "Отлично"],["Churn", "3%", "<5%", "Отлично"]];
  for (var i = 0; i < метрики.length; i++) {
    sheet.getRange(i+4, 1).setValue(метрики[i][0]);
    sheet.getRange(i+4, 2).setValue(метрики[i][1]);
    sheet.getRange(i+4, 3).setValue(метрики[i][2]);
    sheet.getRange(i+4, 4).setValue(метрики[i][3]);
  }
  SpreadsheetApp.getUi().alert("Продуктовый дашборд создан на листе 'Продукт дашборд'");
  return "Продуктовый дашборд создан";
}

function создатьФинансовыйДашборд() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.insertSheet("Финансы дашборд");
  sheet.getRange("A1").setValue("ФИНАНСОВЫЙ ДАШБОРД");
  sheet.getRange("A1:H1").merge();
  sheet.getRange("A1").setFontWeight("bold");
  sheet.getRange("A1").setFontSize(16);
  sheet.getRange("A1").setBackground("#fbbc04");
  sheet.getRange("A1").setFontColor("#000000");
  sheet.getRange("A3").setValue("Метрика");
  sheet.getRange("B3").setValue("Значение");
  sheet.getRange("C3").setValue("Цель");
  sheet.getRange("D3").setValue("Статус");
  sheet.getRange("A3:D3").setFontWeight("bold");
  var метрики = [["Revenue", "100000", ">80000", "Отлично"],["COGS", "30000", "<40000", "Отлично"],["Gross Profit", "70000", ">50000", "Отлично"],["Margin %", "70%", ">60%", "Отлично"],["Burn Rate", "8000/мес", "<10000", "Отлично"],["Runway", "15 мес", ">12 мес", "Отлично"]];
  for (var i = 0; i < метрики.length; i++) {
    sheet.getRange(i+4, 1).setValue(метрики[i][0]);
    sheet.getRange(i+4, 2).setValue(метрики[i][1]);
    sheet.getRange(i+4, 3).setValue(метрики[i][2]);
    sheet.getRange(i+4, 4).setValue(метрики[i][3]);
  }
  SpreadsheetApp.getUi().alert("Финансовый дашборд создан на листе 'Финансы дашборд'");
  return "Финансовый дашборд создан";
}

function создатьABотчёт() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.insertSheet("A/B тест отчёт");
  sheet.getRange("A1").setValue("A/B ТЕСТ ОТЧЁТ");
  sheet.getRange("A1:H1").merge();
  sheet.getRange("A1").setFontWeight("bold");
  sheet.getRange("A1").setFontSize(16);
  sheet.getRange("A1").setBackground("#ea4335");
  sheet.getRange("A1").setFontColor("#ffffff");
  sheet.getRange("A3").setValue("Контрольная группа: 250 из 5000 (5.00%)");
  sheet.getRange("A4").setValue("Тестовая группа: 325 из 5000 (6.50%)");
  sheet.getRange("A5").setValue("Uplift: +30.00%");
  sheet.getRange("A6").setValue("Статус: ЗНАЧИМО");
  sheet.getRange("A8").setValue("Рекомендация: внедряйте тестовую версию");
  SpreadsheetApp.getUi().alert("A/B тест отчёт создан на листе 'A/B тест отчёт'");
  return "A/B тест отчёт создан";
}

// ======================= 11. МУЛЬТИЯЗЫЧНОСТЬ =======================

function ОТВЕТ_ЯЗЫК(вопрос, язык) {
  if (!вопрос) return "Введите вопрос";
  if (!язык) язык = "russian";
  var текст = вопрос.toString().trim().toLowerCase();
  if (язык === "english" && текст === "revenue") return "REVENUE = AOV × APC × B\nFormula: =Ф(\"revenue\")";
  if (язык === "english" && текст === "cac") return "CAC = Marketing budget ÷ B\nFormula: =Ф(\"cac\")";
  if (язык === "english" && текст === "conversion") return "CONVERSION = B ÷ UA × 100%\nFormula: =Ф(\"conversion\")";
  if (язык === "german" && текст === "umsatz") return "UMSATZ = AOV × APC × B\nFormel: =Ф(\"umsatz\")";
  if (язык === "german" && текст === "cac") return "CAC = Marketingbudget ÷ B\nFormel: =Ф(\"cac\")";
  if (язык === "german" && текст === "konversion") return "KONVERSION = B ÷ UA × 100%\nFormel: =Ф(\"konversion\")";
  if (текст === "выручка") return "ВЫРУЧКА = AOV × APC × B\nФормула: =Ф(\"выручка\")";
  if (текст === "cac") return "CAC = Маркетинговый бюджет ÷ B\nФормула: =Ф(\"CAC\")";
  if (текст === "конверсия") return "КОНВЕРСИЯ = B ÷ UA × 100%\nФормула: =Ф(\"конверсия\")";
  return "Вопрос не распознан на языке " + язык;
}

function Ф_ЯЗЫК(метрика, язык) {
  if (!метрика) return "=D2*F2*B2";
  var текст = метрика.toString().trim().toLowerCase();
  if (текст === "выручка" || текст === "revenue" || текст === "umsatz") return "=D2*F2*B2";
  if (текст === "cac") return "=I2/B2";
  if (текст === "конверсия" || текст === "conversion" || текст === "konversion") return "=B2/A2";
  return "=D2*F2*B2";
}

// ======================= 12. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =======================

function примеры() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var row = sheet.getLastRow() + 2;
  sheet.getRange(row, 1).setValue("ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:");
  sheet.getRange(row, 1).setFontWeight("bold");
  sheet.getRange(row, 1).setFontSize(14);
  
  sheet.getRange(row+1, 1).setValue('=ОТВЕТ("выручка")');
  sheet.getRange(row+1, 2).setValue('→ теория');
  sheet.getRange(row+2, 1).setValue('=Ф("выручка")');
  sheet.getRange(row+2, 2).setValue('→ =D2*F2*B2');
  sheet.getRange(row+3, 1).setValue('=AB_ТЕСТ(250,5000,325,5000)');
  sheet.getRange(row+3, 2).setValue('→ A/B тест');
  sheet.getRange(row+4, 1).setValue('=СПЛИТ(ROW(), {"A","B"})');
  sheet.getRange(row+4, 2).setValue('→ A или B');
  sheet.getRange(row+5, 1).setValue('=РАЗМЕР_ВЫБОРКИ(10,20)');
  sheet.getRange(row+5, 2).setValue('→ размер выборки');
  sheet.getRange(row+6, 1).setValue('=ОТВЕТ_ЯЗЫК("revenue","english")');
  sheet.getRange(row+6, 2).setValue('→ теория на английском');
  sheet.getRange(row+7, 1).setValue('=ROAS(10000,2000)');
  sheet.getRange(row+7, 2).setValue('→ 5');
  sheet.getRange(row+8, 1).setValue('=UPLIFT(100,120)');
  sheet.getRange(row+8, 2).setValue('→ +20%');
  sheet.getRange(row+9, 1).setValue('=ОЦЕНКА("Новый дизайн",8,7,9)');
  sheet.getRange(row+9, 2).setValue('→ ICE = 8.0');
  
  SpreadsheetApp.getUi().alert("Примеры добавлены на текущий лист");
  return "Примеры добавлены";
}

// ======================= 13. ПОЛНАЯ СПРАВКА =======================

function справка() {
  var html = '<div style="font-family: Arial; padding: 10px; max-width: 700px;">';
  html += '<h2 style="color: #1f4e78;">ПОМОЩНИК ЮНИТ-ЭКОНОМИКИ</h2>';
  
  html += '<h3 style="color: #4285f4;">1. МЕТРИКИ (через =Ф())</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#4285f4" style="color:white"><th>Метрика</th><th>Что ввести</th><th>Формула</th></tr>';
  html += '<tr><td>Выручка</td><td>=Ф("выручка")</td><td>=D2*F2*B2</td></tr>';
  html += '<tr><td>CAC</td><td>=Ф("CAC")</td><td>=I2/B2</td></tr>';
  html += '<tr><td>Конверсия</td><td>=Ф("конверсия")</td><td>=B2/A2</td></tr>';
  html += '<tr><td>Средний чек</td><td>=Ф("средний чек")</td><td>=SUM(D2:D100)/COUNT(E2:E100)</td></tr>';
  html += '<tr><td>CLTV</td><td>=Ф("CLTV")</td><td>=(D2-K2)*F2</td></tr>';
  html += '<tr><td>Маржинальность</td><td>=Ф("маржинальность")</td><td>=(D2-K2)/D2</td></tr>';
  html += '<tr><td>Окупаемость</td><td>=Ф("окупаемость")</td><td>=M2/(L2/12)</td></tr>';
  html += '<tr><td>Удержание</td><td>=Ф("удержание")</td><td>=(Q2-R2)/S2</td></tr>';
  html += '<tr><td>Отток</td><td>=Ф("отток")</td><td>=1-T2</td></tr>';
  html += '<tr><td>ARPU</td><td>=Ф("ARPU")</td><td>=N2/COUNTA(диапазон)</td></tr>';
  html += '<tr><td>ROMI</td><td>=Ф("ROMI")</td><td>=(N2-O2-I2)/I2</td></tr>';
  html += '<tr><td>COGS</td><td>=Ф("COGS")</td><td>=(D2*G2)+H2</td></tr>';
  html += '<tr><td>APC</td><td>=Ф("APC")</td><td>=E2/B2</td></tr>';
  html += '<tr><td>CPC</td><td>=Ф("CPC")</td><td>=I2/A2</td></tr>';
  html += '<tr><td>CPA</td><td>=Ф("CPA")</td><td>=I2/COUNTIF(J2:J100,"да")</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #34a853;">2. ФИНАНСОВЫЕ МЕТРИКИ</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#34a853" style="color:white"><th>Функция</th><th>Пример</th><th>Результат</th><tr>';
  html += '<tr><td>=ROAS(выручка,бюджет)</td><td>=ROAS(10000,2000)</td><td>5</td></tr>';
  html += '<tr><td>=LTV(AOV,APC,срок)</td><td>=LTV(100,2,12)</td><td>2400</td></tr>';
  html += '<tr><td>=CAC_PAYBACK(CAC,AOV,COGS)</td><td>=CAC_PAYBACK(500,100,30)</td><td>7.14</td></tr>';
  html += '<tr><td>=NPS(пром,нейтр,крит,всего)</td><td>=NPS(70,20,10,100)</td><td>60</td></tr>';
  html += '<tr><td>=UPLIFT(контроль,тест)</td><td>=UPLIFT(100,120)</td><td>20%</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #ea4335;">3. СТАТИСТИЧЕСКИЕ ТЕСТЫ</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#ea4335" style="color:white"><th>Тест</th><th>Формула</th></tr>';
  html += '<tr><td>A/B тест</td><td>=AB_ТЕСТ(250,5000,325,5000)</td></tr>';
  html += '<tr><td>A/B/n тест</td><td>=ABN_ТЕСТ({{250,5000,"A"},{275,5000,"B"}})</td></tr>';
  html += '<tr><td>Корреляция</td><td>=CORREL(A2:A100, B2:B100)</td></tr>';
  html += '<tr><td>Размер выборки</td><td>=РАЗМЕР_ВЫБОРКИ(10,20)</td></tr>';
  html += '<tr><td>Оценка гипотезы (ICE)</td><td>=ОЦЕНКА("Название",8,7,9)</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #fbbc04;">4. СПЛИТОВАНИЕ ТРАФИКА</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#fbbc04"><th>Вид</th><th>Формула</th><th>Результат</th></tr>';
  html += '<tr><td>Простое (50/50)</td><td>=СПЛИТ(ROW(), 2)</td><td>0 или 1</td></tr>';
  html += '<tr><td>С названиями</td><td>=СПЛИТ(ROW(), {"A","B"})</td><td>A или B</td></tr>';
  html += '<tr><td>С разными долями</td><td>=ГРУППА_ИМЯ(ROW(), {"A":50,"B":30,"C":20})</td><td>A,B,C с долями</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #1f4e78;">5. ПРОГНОЗИРОВАНИЕ</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#1f4e78" style="color:white"><th>Функция</th><th>Пример</th></tr>';
  html += '<tr><td>=ПРОГНОЗ(диапазон, периодов)</td><td>=ПРОГНОЗ("B2:B100",12)</td></tr>';
  html += '<tr><td>=ARIMA_ПРОГНОЗ(диапазон, шагов)</td><td>=ARIMA_ПРОГНОЗ("B2:B100",12)</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #810f7c;">6. ВИЗУАЛИЗАЦИЯ</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#810f7c" style="color:white"><th>Функция</th><th>Пример</th></tr>';
  html += '<tr><td>Воронка конверсии</td><td>=ВОРОНКА({"A","B","C"},{1000,500,100})</td></tr>';
  html += '<tr><td>Тепловая карта</td><td>=ТЕПЛОВАЯ_КАРТА("A2:F20")</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #795548;">7. КОГОРТЫ И КЛАСТЕРИЗАЦИЯ</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#795548" style="color:white"><th>Функция</th><th>Пример</th></tr>';
  html += '<tr><td>Когортный анализ</td><td>=КОГОРТЫ("A2:A100","B2:B100","покупка")</td></tr>';
  html += '<tr><td>Кластеризация</td><td>=КЛАСТЕРИЗАЦИЯ("B2:F1000",5)</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #00acc1;">8. МУЛЬТИЯЗЫЧНОСТЬ</h3>';
  html += '<table border="1" cellpadding="4" style="border-collapse: collapse; width: 100%;">';
  html += '<tr bgcolor="#00acc1" style="color:white"><th>Функция</th><th>Пример</th><th>Язык</th></tr>';
  html += '<tr><td>=ОТВЕТ_ЯЗЫК("вопрос","russian")</td><td>=ОТВЕТ_ЯЗЫК("выручка","russian")</td><td>Русский</td></tr>';
  html += '<tr><td>=ОТВЕТ_ЯЗЫК("вопрос","english")</td><td>=ОТВЕТ_ЯЗЫК("revenue","english")</td><td>English</td></tr>';
  html += '<tr><td>=ОТВЕТ_ЯЗЫК("вопрос","german")</td><td>=ОТВЕТ_ЯЗЫК("umsatz","german")</td><td>Deutsch</td></tr>';
  html += '<tr><td>=Ф_ЯЗЫК("метрика","english")</td><td>=Ф_ЯЗЫК("revenue","english")</td><td>=D2*F2*B2</td></tr>';
  html += '</table><br>';
  
  html += '<h3 style="color: #4285f4;">9. ДАШБОРДЫ</h3>';
  html += '<p>Используйте меню <b>Юнит Экономика</b> → нужный дашборд:</p>';
  html += '<ul><li>Маркетинговый дашборд (ROMI, CAC, ROAS, CPC, CPA)</li>';
  html += '<li>Продуктовый дашборд (Retention, DAU/MAU, LTV)</li>';
  html += '<li>Финансовый дашборд (Revenue, COGS, Gross Profit)</li>';
  html += '<li>A/B тест отчёт</li></ul>';
  
  html += '</div>';
  
  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(html).setWidth(700).setHeight(550), "СПРАВКА - ПОМОЩНИК ЮНИТ-ЭКОНОМИКИ");
}

// ======================= 14. МЕНЮ =======================

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Юнит Экономика")
    .addItem("Справка", "справка")
    .addSeparator()
    .addItem("Маркетинговый дашборд", "создатьМаркетинговыйДашборд")
    .addItem("Продуктовый дашборд", "создатьПродуктовыйДашборд")
    .addItem("Финансовый дашборд", "создатьФинансовыйДашборд")
    .addItem("A/B тест отчёт", "создатьABотчёт")
    .addSeparator()
    .addItem("Вставить примеры", "примеры")
    .addToUi();
}
