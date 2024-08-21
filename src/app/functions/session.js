export default function manageSessionStorage(action, key, value) {
    const storageKey = 'mySessionStorage';

    if (action === 'set') {
        // Recuperar o item do sessionStorage
        let storageItem = sessionStorage.getItem(storageKey);

        // Verificar se o item existe no sessionStorage
        let storageData = storageItem ? JSON.parse(storageItem) : {};

        // Atualizar ou criar a chave com o valor fornecido
        storageData[key] = value;

        // Atualizar o sessionStorage com os novos dados
        sessionStorage.setItem(storageKey, JSON.stringify(storageData));
    } else if (action === 'get') {
        // Recuperar o item do sessionStorage
        let storageItem = sessionStorage.getItem(storageKey);

        if (storageItem) {
            // Parse do item JSON e retornar o objeto
            let storageData = JSON.parse(storageItem);
            return storageData;
        } else {
            return {}; // Retornar um objeto vazio se o sessionStorage não existir
        }
    } else {
        throw new Error('Ação inválida. Use "set" ou "get".');
    }
}