# Guia de Desenvolvimento

Guia completo para configurar, desenvolver e fazer deploy de plugins do Figma usando este StarterKit.

---

## 📋 Pré-requisitos

### Obrigatórios

- **Node.js** `>=18.0.0` ([Download](https://nodejs.org/))
- **npm** `>=9.0.0` (incluído com Node.js)
- **Figma Desktop** ([Download](https://www.figma.com/downloads/))
  - ⚠️ Necessário para desenvolvimento local de plugins
  - O Figma Web não suporta plugins em desenvolvimento

### Recomendados

- **VS Code** ([Download](https://code.visualstudio.com/))
- **Extensões VS Code**:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linting em tempo real
  - [TypeScript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) - Suporte avançado TS
  - [Figma for VS Code](https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension) - Integração com Figma

### Verificar instalação

```bash
node --version  # Deve retornar v18.0.0 ou superior
npm --version   # Deve retornar 9.0.0 ou superior
```

---

## 🚀 Setup Passo a Passo

### 1. Clonar/Baixar o projeto

```bash
# Se estiver usando Git
git clone https://github.com/seu-usuario/figma-plugin-starterkit.git
cd figma-plugin-starterkit

# Ou baixar e extrair o ZIP, depois:
cd figma-plugin-starterkit
```

### 2. Instalar dependências

```bash
npm install
```

**Saída esperada**: Instalação de ~500MB de dependências (React, TypeScript, Vite, Plugma, etc.)

### 3. Importar no Figma Desktop

1. Abra o **Figma Desktop**
2. Clique no menu **Plugins** → **Development** → **Import plugin from manifest...**
3. Navegue até a pasta do projeto e selecione `manifest.json`
4. ✅ O plugin aparecerá em **Plugins** → **Development** → **figma-plugin-starterkit**

### 4. Iniciar modo desenvolvimento

```bash
npm run dev
```

**O que acontece**:
- ✅ Vite inicia servidor de desenvolvimento com HMR (Hot Module Replacement)
- ✅ Plugma compila código do Plugin (sandbox) automaticamente
- ✅ Interface UI ficará disponível em `http://localhost:5173` (apenas para debug)
- ✅ Mudanças no código recarregam automaticamente

**Saída esperada**:
```
VITE v7.2.2  ready in 421 ms
➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  Plugma: Watching for changes...
```

### 5. Executar o plugin no Figma

1. No Figma Desktop, vá em **Plugins** → **Development** → **figma-plugin-starterkit**
2. O plugin abrirá em uma janela de 500×700px
3. ✅ Faça mudanças no código e o plugin recarregará automaticamente

---

## 📦 Comandos Disponíveis

Todos os comandos do `package.json`:

### `npm run dev`

Inicia servidor de desenvolvimento com **watch mode** e **HMR**:

```bash
npm run dev
```

- Compila código do Plugin (`src/main/`) automaticamente
- Compila código da UI (`src/ui/`) com Vite HMR
- Recarrega plugin no Figma a cada mudança
- **Use durante todo o desenvolvimento**

### `npm run build`

Gera build de **produção** otimizado:

```bash
npm run build
```

- Compila TypeScript com otimizações
- Minifica código (Plugin + UI)
- Gera arquivos em `dist/`
- **Use antes de publicar no Figma Community**

**Saída**:
```
dist/
├── code.js       # Plugin sandbox (minificado)
└── ui.html       # Interface UI (inline, minificado)
```

### `npm run lint`

Verifica erros de código com ESLint:

```bash
npm run lint
```

- Analisa todos os arquivos `.ts` e `.tsx`
- Mostra erros de TypeScript
- Mostra violações das regras do Figma
- **Não corrige automaticamente**

### `npm run lint:fix`

Corrige automaticamente erros de linting:

```bash
npm run lint:fix
```

- Corrige problemas automáticos (formatação, imports, etc.)
- Problemas complexos ainda precisam correção manual
- **Execute antes de commits**

---

## 🔄 Workflow de Desenvolvimento

Fluxo típico de desenvolvimento diário:

### 1️⃣ Iniciar sessão de desenvolvimento

```bash
# Terminal 1: Iniciar dev server
npm run dev

# Figma Desktop: Executar plugin
Plugins → Development → figma-plugin-starterkit
```

### 2️⃣ Fazer mudanças no código

```typescript
// src/ui/screens/MainScreen.tsx
export function MainScreen({ ... }: MainScreenProps) {
  // Edite componentes React
  return <div>...</div>
}
```

**Resultado**: Plugin recarrega automaticamente no Figma ⚡

### 3️⃣ Testar comunicação Plugin ↔ UI

```typescript
// src/ui/screens/MainScreen.tsx
import { sendToPlugin } from '../../utils/helpers'

const handleClick = () => {
  sendToPlugin({
    type: 'create-rectangles',
    count: 5,
    color: 'blue'
  })
}
```

```typescript
// src/main/index.ts
import { onMessage } from '../utils/helpers'

onMessage({
  'create-rectangles': (msg) => {
    // Lógica no sandbox
    console.log('Recebido:', msg)
  }
})
```

**Debugging**: Veja logs em `Plugins → Development → Open Console` no Figma

### 4️⃣ Adicionar novas features

**Exemplo**: Adicionar botão para criar círculos

```typescript
// 1. Adicionar tipo de mensagem (src/utils/helpers.ts)
export type CreateCirclesMessage = {
  type: 'create-circles'
  count: number
  radius: number
}

export type PluginMessage =
  | CreateRectanglesMessage
  | CreateCirclesMessage  // Adicionar aqui

// 2. Criar handler no Plugin (src/main/index.ts)
onMessage({
  'create-rectangles': (msg) => { /* ... */ },

  'create-circles': (msg) => {  // Novo handler
    for (let i = 0; i < msg.count; i++) {
      const circle = figma.createEllipse()
      circle.resize(msg.radius * 2, msg.radius * 2)
      figma.currentPage.appendChild(circle)
    }
    notify(`✅ ${msg.count} círculo(s) criado(s)!`)
  }
})

// 3. Adicionar botão na UI (src/ui/screens/MainScreen.tsx)
<button onClick={() => sendToPlugin({
  type: 'create-circles',
  count: 3,
  radius: 50
})}>
  Criar Círculos
</button>
```

### 5️⃣ Verificar tipos e linting

```bash
# Antes de commit
npm run lint:fix
```

### 6️⃣ Build de produção

```bash
# Quando feature estiver completa
npm run build

# Testar build no Figma
# Reimportar plugin com manifest.json atualizado
```

---

## 🐛 Debugging

### Console do Plugin (Sandbox)

O código do Plugin (`src/main/`) roda em um **sandbox isolado** sem acesso a `window`, `document` ou `localStorage`.

#### Como abrir

**Figma Desktop**:
1. `Plugins` → `Development` → `Open Console`
2. Ou atalho: `Ctrl+Alt+I` (Windows) / `Cmd+Option+I` (Mac)

#### Exemplo de debug

```typescript
// src/main/index.ts
export default function () {
  console.log('🔌 Plugin iniciado!')  // Aparece no console do Plugin

  onMessage({
    'create-rectangles': (msg) => {
      console.log('📥 Mensagem recebida:', msg)
      console.log('Contagem:', msg.count)
      console.log('Cor:', msg.color)

      // Lógica...

      console.log('✅ Retângulos criados!')
    }
  })
}
```

**Saída esperada no console**:
```
🔌 Plugin iniciado!
📥 Mensagem recebida: {type: 'create-rectangles', count: 5, color: 'blue'}
Contagem: 5
Cor: blue
✅ Retângulos criados!
```

#### ⚠️ Erros comuns

```typescript
// ❌ ERRO: ReferenceError: window is not defined
console.log(window.location)  // window não existe no sandbox

// ✅ CORRETO: Use figma.clientStorage
const data = await figma.clientStorage.getAsync('key')
```

---

### Console da UI (Iframe)

A interface (`src/ui/`) roda em um **iframe** com acesso completo ao DOM.

#### Como abrir

**Método 1 - DevTools do Figma**:
1. Clique com botão direito na janela do plugin
2. Selecione `Inspect Element`
3. DevTools do Chrome abrirá

**Método 2 - Browser direto** (durante `npm run dev`):
1. Abra `http://localhost:5173` no Chrome
2. Abra DevTools: `F12` ou `Ctrl+Shift+I`

#### Exemplo de debug

```typescript
// src/ui/screens/MainScreen.tsx
import { sendToPlugin } from '../../utils/helpers'

export function MainScreen({ ... }: MainScreenProps) {
  const handleCreate = () => {
    console.log('🖱️ Botão clicado!')
    console.log('Estado atual:', { count, color })

    const message = {
      type: 'create-rectangles' as const,
      count,
      color
    }

    console.log('📤 Enviando para Plugin:', message)
    sendToPlugin(message)
  }

  return (
    <button onClick={handleCreate}>
      Criar Retângulos
    </button>
  )
}
```

**Saída esperada no console da UI**:
```
🖱️ Botão clicado!
Estado atual: {count: 5, color: 'blue'}
📤 Enviando para Plugin: {type: 'create-rectangles', count: 5, color: 'blue'}
```

---

### Debugging de Comunicação Plugin ↔ UI

Como rastrear mensagens entre Plugin e UI.

#### Rastrear envio de mensagens (UI → Plugin)

```typescript
// src/utils/helpers.ts
export const sendToPlugin = (message: PluginMessage): void => {
  console.log('📤 [UI → Plugin]', message)  // Adicione este log
  parent.postMessage({ pluginMessage: message }, '*')
}
```

**Veja no Console da UI** (`F12` na janela do plugin)

#### Rastrear recebimento de mensagens (Plugin ← UI)

```typescript
// src/utils/helpers.ts
export const onMessage = (handlers: MessageHandlers): void => {
  figma.ui.onmessage = (msg: PluginMessage) => {
    console.log('📥 [Plugin ← UI]', msg)  // Adicione este log

    const handler = handlers[msg.type]
    if (handler) {
      handler(msg as never)
    } else {
      console.warn(`⚠️ Handler não encontrado para: ${msg.type}`)
    }
  }
}
```

**Veja no Console do Plugin** (`Plugins → Development → Open Console`)

#### Fluxo completo com logs

```
[Console da UI]
🖱️ Botão clicado!
📤 [UI → Plugin] {type: 'create-rectangles', count: 5, color: 'blue'}

[Console do Plugin]
📥 [Plugin ← UI] {type: 'create-rectangles', count: 5, color: 'blue'}
✅ 5 retângulo(s) criado(s)!
```

---

## ⚠️ Problemas Comuns

### 1. Plugin não aparece no menu do Figma

**Sintomas**:
- Plugin não listado em `Plugins → Development`
- Erro ao importar `manifest.json`

**Causas comuns**:
1. Usando Figma Web (não suportado para desenvolvimento)
2. `manifest.json` com sintaxe inválida
3. Plugin não importado corretamente

**Solução**:

```bash
# 1. Verificar se Figma Desktop está instalado
# Baixar em: https://www.figma.com/downloads/

# 2. Validar manifest.json
cat manifest.json  # Verificar sintaxe JSON

# 3. Reimportar plugin
# Figma Desktop → Plugins → Development → Import plugin from manifest...
# Selecionar: manifest.json
```

---

### 2. Mudanças no código não refletem no plugin

**Sintomas**:
- Editar código mas plugin não atualiza
- Plugin mostra versão antiga do código

**Causas comuns**:
1. `npm run dev` não está rodando
2. Erro de compilação não visível
3. Cache do Figma

**Solução**:

```bash
# 1. Parar e reiniciar dev server
Ctrl+C  # Parar npm run dev
npm run dev  # Reiniciar

# 2. Verificar erros no terminal
# Se houver erros TypeScript, corrija antes de continuar

# 3. Recarregar plugin no Figma
# Fechar e reabrir o plugin
# Ou: Plugins → Development → Reload Plugin
```

**Solução avançada** (limpar cache):

```bash
# 1. Parar dev server (Ctrl+C)
# 2. Remover node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev

# 3. No Figma: remover e reimportar plugin
# Plugins → Development → Remove plugin → Reimportar manifest.json
```

---

### 3. Erro: "window is not defined" ou "document is not defined"

**Sintomas**:
```
ReferenceError: window is not defined
ReferenceError: document is not defined
ReferenceError: localStorage is not defined
```

**Causa**:
Código do **Plugin** (`src/main/`) tentando acessar APIs do browser que não existem no sandbox.

**Solução**:

```typescript
// ❌ ERRADO (código do Plugin)
const data = localStorage.getItem('theme')  // localStorage não existe!
const url = window.location.href           // window não existe!

// ✅ CORRETO (use figma.clientStorage)
const data = await figma.clientStorage.getAsync('theme')

// ✅ CORRETO (mova lógica para UI se precisar de window/localStorage)
// src/ui/App.tsx
const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'light'
})
```

**Regra geral**:
- ✅ **Plugin** (`src/main/`): Apenas `figma.*` APIs
- ✅ **UI** (`src/ui/`): Pode usar `window`, `document`, `localStorage`

---

### 4. Mensagens não chegam entre Plugin e UI

**Sintomas**:
- Clicar em botão na UI mas nada acontece
- `console.log` mostra mensagem sendo enviada, mas handler não executa

**Causas comuns**:
1. Tipo de mensagem não registrado no handler
2. Discriminador `type` incorreto
3. Handler não cadastrado em `onMessage()`

**Solução**:

```typescript
// 1. Verificar tipo está definido (src/utils/helpers.ts)
export type PluginMessage =
  | CreateRectanglesMessage
  | CreateCirclesMessage      // ✅ Tipo deve estar aqui

// 2. Verificar discriminador é exatamente igual
// UI envia:
sendToPlugin({ type: 'create-circles', ... })

// Plugin recebe:
onMessage({
  'create-circles': (msg) => { ... }  // ✅ String deve ser EXATA
})

// 3. Adicionar log para debug
onMessage({
  'create-circles': (msg) => {
    console.log('✅ Handler executado!', msg)
    // ...
  }
})
```

**Debug avançado**:

```typescript
// src/utils/helpers.ts
export const onMessage = (handlers: MessageHandlers): void => {
  figma.ui.onmessage = (msg: PluginMessage) => {
    console.log('📥 Mensagem recebida:', msg)
    console.log('Handlers disponíveis:', Object.keys(handlers))

    const handler = handlers[msg.type]
    if (!handler) {
      console.error(`❌ Handler "${msg.type}" não encontrado!`)
      console.error('Handlers cadastrados:', Object.keys(handlers))
    } else {
      console.log(`✅ Executando handler: ${msg.type}`)
      handler(msg as never)
    }
  }
}
```

---

### 5. Erro de TypeScript: "Type 'X' is not assignable to type 'Y'"

**Sintomas**:
```
Type '{ type: string; count: number; }' is not assignable to type 'PluginMessage'
```

**Causa**:
TypeScript inferindo tipo incorreto devido a falta de `as const`.

**Solução**:

```typescript
// ❌ ERRADO
sendToPlugin({
  type: 'create-rectangles',  // Tipo inferido como string (genérico)
  count: 5
})

// ✅ CORRETO (opção 1: usar 'as const')
sendToPlugin({
  type: 'create-rectangles' as const,  // Tipo literal
  count: 5,
  color: 'blue' as const
})

// ✅ CORRETO (opção 2: criar objeto tipado)
const message: CreateRectanglesMessage = {
  type: 'create-rectangles',
  count: 5,
  color: 'blue'
}
sendToPlugin(message)
```

---

### 6. Build de produção funciona mas plugin quebra

**Sintomas**:
- `npm run dev` funciona perfeitamente
- `npm run build` gera arquivos mas plugin dá erro no Figma
- Console mostra erros em código minificado

**Causas comuns**:
1. Código depende de variáveis de ambiente que não existem em produção
2. Imports dinâmicos não suportados
3. Código usando `eval()` (bloqueado pelo Figma)

**Solução**:

```bash
# 1. Testar build localmente
npm run build

# 2. Reimportar plugin no Figma com código de produção
# Figma → Plugins → Development → Remove plugin
# Reimportar manifest.json

# 3. Abrir console e verificar erros
# Plugins → Development → Open Console

# 4. Se houver erros, verificar código problemático
```

**Exemplo de código problemático**:

```typescript
// ❌ ERRADO (eval bloqueado no Figma)
const result = eval('2 + 2')

// ❌ ERRADO (import dinâmico pode falhar em produção)
const module = await import('./dynamic-module')

// ✅ CORRETO (import estático)
import { myFunction } from './my-module'
```

---

### 7. Erro: "Cannot read property 'clientStorage' of undefined"

**Sintomas**:
```
TypeError: Cannot read property 'clientStorage' of undefined
```

**Causa**:
Código da **UI** tentando acessar `figma.*` APIs (que só existem no Plugin).

**Solução**:

```typescript
// ❌ ERRADO (código da UI - src/ui/)
const token = await figma.clientStorage.getAsync('token')  // figma não existe!

// ✅ CORRETO (mova para service no Plugin - src/main/)
// src/services/auth.service.ts
export async function getToken(): Promise<string | null> {
  const auth = await figma.clientStorage.getAsync('auth')
  return auth?.token || null
}

// ✅ CORRETO (ou comunique via postMessage)
// UI pede token ao Plugin
sendToPlugin({ type: 'get-token' })

// Plugin responde
onMessage({
  'get-token': async () => {
    const token = await figma.clientStorage.getAsync('token')
    figma.ui.postMessage({ type: 'token-response', token })
  }
})
```

**Regra**:
- ✅ `figma.*` **APENAS** em `src/main/` (Plugin)
- ✅ `window.*`, `localStorage.*` **APENAS** em `src/ui/` (UI)

---

## 🚢 Build de Produção

### 1. Preparar para publicação

```bash
# 1. Rodar linter e corrigir erros
npm run lint:fix

# 2. Atualizar versão no package.json
# Editar: "version": "2.12.1" → "2.13.0"

# 3. Atualizar data no src/config/version.config.ts
export const VERSION_INFO = {
  lastUpdate: '21 nov. 2025'  // Atualizar data
}

# 4. Gerar build otimizado
npm run build
```

### 2. Verificar arquivos gerados

```bash
# Verificar pasta dist/
ls -lh dist/

# Arquivos esperados:
# dist/code.js    - Plugin sandbox (minificado)
# dist/ui.html    - Interface UI (inline, minificado)
```

### 3. Testar build no Figma

```bash
# 1. Reimportar plugin no Figma Desktop
# Plugins → Development → Remove plugin
# Plugins → Development → Import plugin from manifest...
# Selecionar: manifest.json

# 2. Executar plugin e testar TODAS as funcionalidades
# - Criar retângulos
# - Trocar idioma
# - Trocar tema
# - Login/Logout (se aplicável)
# - Abrir tutoriais
```

### 4. Publicar no Figma Community

#### Requisitos

- Ícone do plugin (128×128px PNG)
- Imagens de preview (1920×1080px)
- Descrição completa
- Tags relevantes

#### Processo

1. **No Figma Desktop**:
   - `Plugins` → `Development` → `figma-plugin-starterkit`
   - Clique em `Publish...`

2. **Preencher informações**:
   ```
   Nome: Figma Plugin StarterKit
   Descrição: Starter kit completo para criar plugins do Figma...
   Tags: plugin, starter-kit, react, typescript, template
   ```

3. **Upload de assets**:
   - Ícone: `icon-128.png` (128×128px)
   - Preview: capturas de tela do plugin em uso

4. **Configurar permissões**:
   - Network access: ✅ (se usar API externa)
   - File access: ✅ (se ler/escrever arquivos)

5. **Publicar**:
   - Clicar em `Publish to Community`
   - ✅ Plugin estará disponível em ~24h após revisão

#### Links úteis

- [Guia oficial de publicação](https://help.figma.com/hc/en-us/articles/360042293394-Publish-plugins-to-the-Figma-Community)
- [Guidelines da Community](https://help.figma.com/hc/en-us/articles/360039958934-Figma-Community-Guidelines)

---

## 📚 Próximos Passos

Após dominar este guia:

1. **Ler documentação complementar**:
   - [`README.md`](../README.md) - Visão geral do projeto
   - [`docs/architecture.md`](./architecture.md) - Arquitetura detalhada
   - [`.claude/CLAUDE.md`](../.claude/CLAUDE.md) - Instruções para Claude Code

2. **Estudar código-fonte**:
   - `src/utils/helpers.ts` - Sistema de comunicação
   - `src/services/auth.service.ts` - Autenticação JWT
   - `src/config/i18n.config.ts` - Internacionalização

3. **Customizar para seu caso de uso**:
   - Trocar exemplo de retângulos pela sua feature
   - Adicionar novos tipos de mensagens
   - Criar novas telas

4. **Consultar documentação oficial**:
   - [Figma Plugin API](https://www.figma.com/plugin-docs/)
   - [React Docs](https://react.dev/)
   - [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**✅ Você está pronto para criar plugins incríveis do Figma!**
