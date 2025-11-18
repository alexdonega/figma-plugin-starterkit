# 🚀 Figma Plugin StarterKit

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-3178c6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Plugma](https://img.shields.io/badge/Plugma-2.2.3-ff6c37?style=flat-square)

Starter kit completo para criar plugins do Figma com React 19 + TypeScript + Vite.

## ✨ Preview

Este starter kit vem com um exemplo funcional que demonstra:

**Interface do Plugin:**
```
┌─────────────────────────────────┐
│  Criar Retângulos               │
├─────────────────────────────────┤
│  Quantidade                     │
│  [  5  ]                        │
│                                 │
│  Cor dos retângulos             │
│  [ Laranja ▼ ]                  │
│                                 │
│  [ Criar Retângulos ]           │
│                                 │
│  💡 Dica: Você pode criar até   │
│     100 retângulos de uma vez!  │
└─────────────────────────────────┘
```

**Resultado no Figma:**
- Cria retângulos coloridos em grid 5x5
- Seleção automática dos elementos criados
- Zoom automático na área criada
- Notificação de sucesso

**Diferenciais deste starter kit:**
- ✅ **Helpers tipados** - `sendToPlugin()`, `onMessage()`, `notify()`
- ✅ **Figma Plugin DS** - Design system oficial integrado
- ✅ **HMR ativo** - Veja mudanças instantaneamente
- ✅ **React 19** - Última versão estável
- ✅ **ESLint configurado** - Código limpo desde o início

## 📦 O que está incluído

- ⚛️ **React 19** - Última versão do React
- 📘 **TypeScript** - Tipagem estática
- ⚡ **Vite** - Build rápido e HMR
- 🎨 **Figma Plugin DS** - Design system oficial do Figma
- 🔧 **Plugma** - CLI para desenvolvimento de plugins
- ✅ **ESLint** - Linting configurado
- 🛠️ **Helpers** - Funções auxiliares para comunicação UI ↔ Main

## 🎯 Estrutura do Projeto

```
figma-plugin-starterkit/
├── src/
│   ├── main/
│   │   └── index.ts          # Código que roda no contexto do Figma (acessa a API)
│   ├── ui/
│   │   ├── App.tsx           # Componente principal da interface
│   │   ├── main.tsx          # Entry point da UI
│   │   └── index.html        # HTML base
│   └── utils/
│       └── helpers.ts        # Funções auxiliares de comunicação
├── manifest.json             # Configurações do plugin
├── package.json              # Dependências e scripts
└── vite.config.ts           # Configuração do Vite
```

## ⚡ Quick Start

```bash
# 1. Clone ou baixe este repositório
git clone https://github.com/seu-usuario/figma-plugin-starterkit
cd figma-plugin-starterkit

# 2. Instale dependências
npm install

# 3. Inicie desenvolvimento
npm run dev

# 4. No Figma Desktop
# Plugins > Development > Import plugin from manifest
# Selecione: dist/manifest.json
```

## 🎨 Como Personalizar Este Template

**IMPORTANTE:** Antes de começar a desenvolver seu plugin, você DEVE personalizar estas configurações:

### ✅ Checklist de Personalização:

- [ ] **Mudar nome do plugin:**
  - ⚠️ **ATENÇÃO:** Mude em AMBOS os arquivos para manter sincronizado!
  - No `package.json`: altere `"name": "figma-plugin-starterkit"`
  - No `manifest.json`: altere `"name": "Figma Plugin StarterKit"`

- [ ] **Gerar novo ID único do plugin:**
  - ⚠️ **IMPORTANTE:** No `manifest.json`, substitua o `"id"` atual
  - ⚠️ Cada plugin precisa de um ID único! Não use o ID padrão deste template
  - Para gerar um novo ID único, use um destes métodos:
    - Método 1: Abra o console do navegador e execute:
      ```javascript
      Math.floor(Math.random() * 1000000000000000000).toString()
      ```
    - Método 2: Visite a [documentação do Figma](https://www.figma.com/plugin-docs/manifest/)

- [ ] **Atualizar informações do autor:**
  - No `package.json`: preencha `"author": "Seu Nome"`
  - No `package.json`: confirme `"license": "MIT"` (ou altere conforme necessário)

- [ ] **Corrigir título da janela:**
  - No `src/ui/index.html`: altere `<title>Figma Plugin StarterKit</title>`

- [x] **Renomear pasta do projeto:**
  - ✅ Pasta renomeada para `figma-plugin-starterkit`

- [ ] **Deletar este checklist** quando terminar de personalizar! ✨

---

## 🚀 Uso do Starter Kit

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em modo desenvolvimento

```bash
npm run dev
```

### 3. Build para produção

```bash
npm run build
```

## 💡 Como funciona um Plugin Figma

Um plugin Figma tem **2 partes**:

### 🔵 Main (Backend)
- Arquivo: `src/main/index.ts`
- Roda no contexto do Figma
- Tem acesso à API do Figma (`figma.createRectangle()`, etc)
- **NÃO** tem acesso ao DOM

### 🟢 UI (Frontend)
- Arquivos: `src/ui/*`
- Roda no navegador (iframe)
- React + HTML + CSS
- **NÃO** tem acesso à API do Figma

### 📡 Comunicação entre Main e UI

A comunicação acontece via mensagens:

**UI → Main:**
```typescript
import { sendToPlugin } from './utils/helpers'

// Enviar mensagem
sendToPlugin('create-rectangles', { count: 5, color: 'blue' })
```

**Main → UI:**
```typescript
import { onMessage, notify } from './utils/helpers'

// Receber mensagens
onMessage({
  'create-rectangles': (msg) => {
    // Criar retângulos
    const rect = figma.createRectangle()
    notify('Retângulo criado!')
  }
})
```

## 📝 Exemplo de Uso

### Criar um novo comando

**1. Adicionar handler no Main (`src/main/index.ts`):**

```typescript
import { onMessage, notify } from '../utils/helpers'

export default function () {
  figma.showUI(__html__, { width: 320, height: 400 })

  onMessage({
    'create-circle': (msg) => {
      const circle = figma.createEllipse()
      circle.resize(100, 100)
      circle.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
      figma.currentPage.appendChild(circle)
      notify('✅ Círculo criado!')
    }
  })
}
```

**2. Chamar da UI (`src/ui/App.tsx`):**

```typescript
import { sendToPlugin } from '../utils/helpers'

function App() {
  const handleCreateCircle = () => {
    sendToPlugin('create-circle')
  }

  return (
    <button onClick={handleCreateCircle}>
      Criar Círculo
    </button>
  )
}
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run lint` | Verifica erros de lint |
| `npm run lint:fix` | Corrige erros de lint automaticamente |

## 📚 Recursos Úteis

- [Documentação oficial do Figma Plugin API](https://www.figma.com/plugin-docs/)
- [Figma Plugin DS](https://github.com/thomas-lowry/figma-plugin-ds)
- [Plugma CLI](https://plugma.dev/)
- [React Documentation](https://react.dev/)

## 🎨 Personalizando o Starter Kit

### Alterar nome e ID do plugin

Edite `manifest.json`:

```json
{
  "name": "Meu Plugin Incrível",
  "id": "SEU_ID_UNICO_AQUI"
}
```

### Alterar tamanho da janela

Edite `src/main/index.ts`:

```typescript
figma.showUI(__html__, {
  width: 400,    // Largura
  height: 600,   // Altura
  themeColors: true
})
```

### Adicionar acesso a rede

Edite `manifest.json`:

```json
"networkAccess": {
  "allowedDomains": [
    "https://api.exemplo.com"
  ]
}
```

## 🐛 Problemas Comuns

### Plugin não aparece no Figma
1. Certifique-se de que rodou `npm run dev`
2. No Figma: Plugins → Development → Import plugin from manifest
3. Selecione o arquivo `manifest.json` do projeto

### Mudanças não aparecem
1. Feche e abra o plugin novamente no Figma
2. O Vite tem HMR, mas às vezes precisa recarregar

### Erro de TypeScript
1. Execute `npm run lint` para ver os erros
2. Execute `npm run lint:fix` para corrigir automaticamente

## 📄 Licença

Este é um starter kit livre para uso. Crie seu plugin e divirta-se! 🎉

---

**Criado com ❤️ para a comunidade Figma**
