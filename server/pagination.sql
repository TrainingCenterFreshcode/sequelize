SELECT * FROM tasks
WHERE user_id = 1
LIMIT 5 -- скільки результатів має бути на одній сторінці
OFFSET 0;

-- Як нам дізнатись, скільки потрібно відступати (формула для розрахунку OFFSET)
/*

У цій формулі, перша сторінка буде вважатись нульовою

OFFSET = LIMIT * сторінку_яку_ми_запитуємо - 1

*/

-- 2 сторінка: 5 * 1 = 5
-- 3 сторінка: 5 * 2 = 10
-- 4: 5 * 3 = 15
-- 5: 5 * 4 = 20