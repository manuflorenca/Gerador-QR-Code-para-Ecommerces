import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/create.js";
import createPassword from "./services/password/create.js";  // Função de criar senha

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();  // Chama a função de gerar senha
    });
    prompt.start();
}

main();
