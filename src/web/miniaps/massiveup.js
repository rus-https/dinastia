export default async function massiveUp(storage) {
    const storage_up = []; // Массив для элементов, которые соответствуют условию

    for (let i = 0; i < storage.length; i++) {
        const item = storage[i];

        // Провреятся элемент массива на необходимые поля
        if (
            typeof item !== 'object' ||
            item === null ||
            !item.hasOwnProperty('tag') ||
            !item.hasOwnProperty('name') ||
            !item.hasOwnProperty('message')
        ) {
            continue; // Пропускает текущую итерацию цикла если нету этих полей
        }

        const message = item.message;

        if (typeof message === 'string' && message.startsWith('^')) {
            // Если сообщение начинается с '^', удаляет этот символ и добавляем элемент в storage_up
            const newMessage = message.slice(1); // Удаляет первый символ
            const newItem = { ...item, message: newMessage }; // Создаем новый объект с измененым имемнем
            storage_up.push(newItem);
        }
    }

    return storage_up; 
}