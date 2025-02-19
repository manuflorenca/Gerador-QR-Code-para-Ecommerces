import createPassword from "./password/create.js";  // A função correta

async function createPassword() {
    console.log(chalk.green("Gerando senha..."));

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10) || 8;
    const uppercase = process.env.UPPERCASE_LETTERS === 'true';
    const lowercase = process.env.LOWERCASE_LETTERS === 'true';
    const numbers = process.env.NUMBERS === 'true';
    const specialChars = process.env.SPECIAL_CHARACTERS === 'true';

    let characters = '';
    if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) characters += '0123456789';
    if (specialChars) characters += '!@#$%&*()';

    if (characters.length === 0) {
        console.log("Erro: Nenhuma categoria selecionada para gerar a senha.");
        return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    console.log(chalk.green(`Senha gerada com sucesso: ${password}`));
}

export default createPassword;
