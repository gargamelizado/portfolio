import { access, cp, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(rootDir, 'public', 'project-demos');
const chockTrufasReactDir = path.join(
  rootDir,
  'src/components/Project/proprio/chock-trufas-react',
);

function run(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const executable = process.platform === 'win32' ? process.env.ComSpec : command;
    const spawnArgs =
      process.platform === 'win32'
        ? ['/d', '/s', '/c', `${command}.cmd`, ...args]
        : args;
    const child = spawn(executable, spawnArgs, {
      cwd,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(' ')} failed with code ${code}`));
    });
  });
}

async function commandExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const demos = [
  ['src/components/Project/devmedia/Petshop', 'pet-shop'],
  ['src/components/Project/devmedia/Provedor-Hospedagem', 'alfa-tech'],
  ['src/components/Project/devmedia/Clinica', 'clinica-medica'],
  ['src/components/Project/devmedia/Padaria', 'padaria'],
  ['src/components/Project/devmedia/Pousada', 'pousada-secreta'],
  ['src/components/Project/devmedia/Agencia-de-Viagens', 'agencia-de-viagens'],
  ['src/components/Project/devmedia/Cafeteria', 'cafeteria'],
  ['src/components/Project/devmedia/Imobiliária', 'imobiliaria'],
  ['src/components/Project/devmedia/Página-de-Divulgação-do-Livro', 'divulgacao-livro'],
  ['src/components/Project/mentoria/pagina-login', 'parque-login'],
  ['src/components/Project/devmedia/LinkBio-do-Neymar-Jr', 'linkbio-neymar'],
  ['src/components/Project/mentoria/BURGER HEAVEN', 'burger-heaven'],
  ['src/components/Project/proprio/chock trufas', 'chock-trufas'],
  ['src/components/Project/proprio/chock-trufas-react/dist', 'chock-trufas-react'],
];

const viteBin = path.join(
  chockTrufasReactDir,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'vite.cmd' : 'vite',
);

if (!(await commandExists(viteBin))) {
  await run('npm', ['ci', '--ignore-scripts'], chockTrufasReactDir);
}

await run('npm', ['run', 'build'], chockTrufasReactDir);
await rm(outputDir, { recursive: true, force: true });

for (const [source, target] of demos) {
  await cp(path.join(rootDir, source), path.join(outputDir, target), {
    recursive: true,
    force: true,
  });
}

console.log(`Project demos copied to ${path.relative(rootDir, outputDir)}`);
