# MSportFit - SPA Прототип

Мінімальний, але цілісний прототип клієнтського SPA вебзастосунку MSportFit для лабораторної роботи з тестування продуктивності.

## Технології

- **React** (JavaScript, без TypeScript)
- **Vite**
- **SCSS**
- **react-router-dom**

Дані з локальних JSON файлів без реального бекенду.

## Структура проекту

```
src/
  assets/
    icons/
    images/
  data/
    programs.json
    exercises.json
    products.json
    faq.json
  components/
    Header/
    Footer/
    ProgramCard/
    ExerciseCard/
    Tabs/
    Accordion/
    Filters/
    SearchInput/
    Badge/
  pages/
    Home/
    Programs/
    ProgramDetails/
    Exercises/
    ExerciseDetails/
    Calculators/
      BMI/
      TDEE/
      Macro/
    Products/
    Faq/
    Auth/
      Login.jsx
      Register.jsx
  router/
    AppRouter.jsx
  utils/
    calcBMI.js
    calcTDEE.js
    calcMacros.js
    storage.js
  styles/
    _variables.scss
    _mixins.scss
    global.scss
  App.jsx
  main.jsx
```

## Встановлення та запуск

### Встановлення залежностей

```bash
npm install
```

### Запуск у режимі розробки

```bash
npm run dev
```

Додаток буде доступний за адресою `http://localhost:5173`

### Збірка для продакшену

```bash
npm run build
```

### Попередній перегляд збірки

```bash
npm run preview
```

## Функціональність

### Сторінки

1. **Home** - Головна сторінка з привітанням та CTA-кнопками
2. **Programs** - Список тренувальних програм з фільтрацією
3. **ProgramDetails** - Детальна інформація про програму з можливістю додати до плану або обраного
4. **Exercises** - Каталог вправ з фільтрами та пошуком
5. **ExerciseDetails** - Детальна інформація про вправу з порадами та інструкціями
6. **Calculators** - Калькулятори BMI, TDEE та макроелементів
7. **Products** - Довідник продуктів з пошуком та фільтрацією за категоріями
8. **FAQ** - Відповіді на часті запитання у форматі акордеону
9. **Auth** - Сторінки входу та реєстрації (мінімальна реалізація)

### Особливості

- **Dark theme** з помаранчевими акцентами
- **Адаптивний дизайн** для мобільних пристроїв
- **Lazy loading** сторінок через React.lazy + Suspense
- **Локальне збереження** обраного та планів через localStorage
- **Фільтрація та пошук** на фронтенді
- **Калькулятори** з правильними формулами (BMI, TDEE Mifflin-St Jeor, макроелементи)

## Оптимізація для тестування продуктивності

- Lazy loading для всіх сторінок
- Мінімізація важких зображень (використання placeholder'ів)
- Чисті компоненти без зайвих re-render
- Мінімальні залежності (тільки необхідні бібліотеки)

## Ліцензія

Приватний проект для навчальних цілей.


