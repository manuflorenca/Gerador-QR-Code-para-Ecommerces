import chalk from "chalk";
import prompt from "prompt";
const { message } = prompt;


const promptQRCode = [
    {
        name:"link",
        description: chalk.yellow("Digite o link para geral o QR CODE"),
    },
    {
        name:"type",
        description: chalk.yellow("Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL"),
        pattern: /^[1-2]+/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    },
];

export default promptQRCode;