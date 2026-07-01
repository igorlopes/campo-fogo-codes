# CampoFogo Codes 🎯

O **CampoFogo Codes** é uma aplicação web leve e focada em privacidade, projetada para gerar "Cartões de Resgate" imprimíveis contendo QR Codes, a partir de planilhas de códigos (Excel ou CSV). É especialmente configurado para gerar links de resgate de ofertas para o Pokémon GO, facilitando a distribuição de códigos em eventos comunitários.

Tudo acontece **diretamente no seu navegador**. Nenhum dado da sua planilha é enviado para servidores externos, garantindo 100% de privacidade para os seus códigos de resgate.

---

## 🚀 Funcionalidades

- **Importação Inteligente:** Faça upload de planilhas `.xlsx` ou `.csv`. A aplicação identifica automaticamente colunas com palavras-chave de "código" ou utiliza heurísticas de tamanho de caractere para localizar a coluna correta.
- **Configuração Visual Dinâmica:**
  - Adicione Título e Subtítulo customizados.
  - Habilite uma numeração incremental (com prefixo customizável, ex: `CARD-001`).
  - Adicione a sua conta do Instagram (`@seuinstagram`) para divulgar sua marca.
- **Geração de QR Code:** Transforma os códigos importados diretamente em QR Codes apontando para o site oficial de resgate.
- **Pronto para Impressão:** Layout otimizado para salvar e imprimir em formato PDF. A interface de configuração é automaticamente escondida na hora da impressão.
- **Privacidade 100% Client-Side:** Todo o processamento dos arquivos e renderização dos cartões ocorre exclusivamente no seu navegador. Nenhum servidor backend está envolvido.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

Este projeto foi construído utilizando as melhores e mais modernas ferramentas do ecossistema Frontend:

- **[React 18](https://react.dev/):** Biblioteca para a construção ágil e componetizada de interfaces de usuário (utilizando Functional Components e Hooks).
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática rigorosa (`strict mode`), garantindo maior confiabilidade e prevenção de bugs em tempo de desenvolvimento.
- **[Vite](https://vitejs.dev/):** Ferramenta de build incrivelmente rápida e bundler nativo de ES modules.
- **[XLSX (SheetJS)](https://sheetjs.com/):** Biblioteca poderosa para extração e manipulação local dos dados das planilhas importadas.
- **[qrcode.react](https://github.com/zpao/qrcode.react):** Componente focado na geração otimizada de QR Codes nativos em SVG.
- **[Lucide React](https://lucide.dev/):** Biblioteca de ícones modernos e limpos.
- **Vanilla CSS:** Estilização puramente em CSS, mantendo o bundle leve, com uso de variáveis dinâmicas (Custom Properties).
- **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html):** Um linter extremamente rápido escrito em Rust, garantindo qualidade de código sem impacto no tempo de build.
- **GitHub Actions & GitHub Pages:** Configuração de Integração Contínua (CI) que roda o linter automaticamente a cada Push/Pull Request, e fluxo de deploy (CD) nativo utilizando a branch `gh-pages`.

---

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para testar ou desenvolver funcionalidades localmente em sua máquina.

### Pré-requisitos
- Ter o [Node.js](https://nodejs.org/pt-br) instalado (recomenda-se a versão LTS mais recente, 18+ ou 20+).
- Git instalado.

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/igorlopes/campo-fogo-codes.git
```

2. Entre no diretório do projeto:
```bash
cd campo-fogo-codes
```

3. Instale as dependências usando NPM:
```bash
npm install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

O aplicativo estará rodando e disponível no seu navegador em `http://localhost:5173/` (ou outra porta indicada no terminal).

---

## 🏗️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor local do Vite com Hot-Module-Replacement.
- `npm run build`: Compila o TypeScript e gera o build de produção na pasta `dist/`.
- `npm run lint`: Executa a verificação de regras de código utilizando o `oxlint`.
- `npm run deploy`: Executa o build de produção e faz a publicação automática no branch `gh-pages`.

---

## 🛡️ Princípios de Arquitetura (SRP)

Este projeto aderiu a princípios sólidos de engenharia de software. A interface está componentizada respeitando o **Princípio da Responsabilidade Única (SRP)**:
- `useSpreadsheetReader.ts`: Custom Hook focado apenas na extração e leitura de planilhas.
- `ConfigPanel.tsx`, `Header.tsx`, `Footer.tsx` e `RescueCard.tsx`: Componentes isolados para garantir a manutenibilidade isolada de estados visuais.

---

<p align="center">
Desenvolvido pela comunidade para a comunidade. Código aberto e seguro! ❤️
</p>
