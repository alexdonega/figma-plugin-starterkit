# 🚀 Figma Plugin StarterKit

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-3178c6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Plugma](https://img.shields.io/badge/Plugma-2.2.3-ff6c37?style=flat-square)

**Starter kit profissional e completo para criar plugins do Figma** com React 19 + TypeScript + Vite.

✨ Inclui sistema de autenticação, internacionalização, monetização e muito mais!

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
- ✅ **Sistema de Autenticação Completo** - Login e registro com JWT
- ✅ **Internacionalização (i18n)** - Suporte a PT-BR, Español e English
- ✅ **Tema Dark/Light** - Toggle de tema com persistência
- ✅ **Tela de Upgrade/Monetização** - Sistema de waitlist para versão Pro
- ✅ **Menu de Configurações** - Interface profissional e organizada
- ✅ **Modais de Conversão** - Registro com prova social e copy otimizada
- ✅ **Helpers tipados** - `sendToPlugin()`, `onMessage()`, `notify()`
- ✅ **Figma Plugin DS** - Design system oficial integrado
- ✅ **HMR ativo** - Veja mudanças instantaneamente
- ✅ **React 19** - Última versão estável
- ✅ **ESLint configurado** - Código limpo desde o início

## 📦 O que está incluído

### 🎨 Core
- ⚛️ **React 19** - Última versão do React
- 📘 **TypeScript** - Tipagem estática
- ⚡ **Vite** - Build rápido e HMR
- 🎨 **Figma Plugin DS** - Design system oficial do Figma
- 🔧 **Plugma** - CLI para desenvolvimento de plugins
- ✅ **ESLint** - Linting configurado
- 🛠️ **Helpers** - Funções auxiliares para comunicação UI ↔ Main

### 🔐 Sistema de Autenticação
- 🔑 **Login Modal** - Interface moderna com validação
- ✨ **Registro Modal** - Com prova social e copy de conversão
- 🎫 **JWT Authentication** - Gerenciamento de tokens
- 💾 **Figma Storage** - Persistência de sessão usando `figma.clientStorage`
- 👤 **User Profile** - Exibição de dados do usuário logado
- 🚪 **Logout** - Sistema completo de saída

### 🌍 Internacionalização (i18n)
- 🇧🇷 **Português (Brasil)** - Tradução completa
- 🇪🇸 **Español** - Tradução completa
- 🇺🇸 **English** - Tradução completa
- 🔄 **Seletor de Idioma** - Troca fácil entre idiomas
- 💾 **Persistência** - Salva preferência do usuário

### 🎨 Interface & UX
- 🌓 **Dark/Light Mode** - Toggle de tema com persistência
- ⚙️ **Menu de Configurações** - Interface organizada e intuitiva
- 📱 **Responsive Design** - Layout adaptável
- ✨ **Prova Social** - Avatares, estrelas e números de usuários
- 🎯 **Modais Profissionais** - Design polido e funcional

### 💰 Monetização
- 🚀 **Upgrade Screen** - Tela de upgrade para versão Pro
- 📝 **Waitlist System** - Sistema de lista de espera
- 💎 **Botão Upgrade** - Call-to-action destacado
- 📊 **Planos & Preços** - Estrutura pronta para monetização

## 🎯 Estrutura do Projeto

```
figma-plugin-starterkit/
├── src/
│   ├── main/
│   │   └── index.ts                    # Código que roda no contexto do Figma
│   ├── ui/
│   │   ├── components/                 # Componentes React
│   │   │   ├── LoginModal.tsx          # Modal de login
│   │   │   ├── RegisterModal.tsx       # Modal de registro com prova social
│   │   │   ├── SettingsMenu.tsx        # Menu de configurações
│   │   │   ├── TutorialButton.tsx      # Botão de tutorial
│   │   │   └── UpgradeButton.tsx       # Botão de upgrade
│   │   ├── screens/
│   │   │   └── UpgradeScreen.tsx       # Tela de upgrade/waitlist
│   │   ├── App.tsx                     # Componente principal
│   │   ├── main.tsx                    # Entry point da UI
│   │   └── index.html                  # HTML base
│   ├── services/
│   │   └── auth.service.ts             # Serviço de autenticação (login, register, JWT)
│   ├── config/
│   │   ├── i18n.config.ts              # Configuração de idiomas (PT-BR, ES, EN)
│   │   ├── api.config.ts               # Configuração da API backend
│   │   └── upgrade.config.ts           # Configuração do sistema de upgrade
│   └── utils/
│       └── helpers.ts                  # Funções auxiliares de comunicação
├── manifest.json                       # Configurações do plugin
├── package.json                        # Dependências e scripts
└── vite.config.ts                      # Configuração do Vite
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

## 🎨 Configurações do Projeto

### ✅ Personalizações Concluídas:

- ✅ **Nome do plugin:** Figma Plugin StarterKit
- ✅ **ID único:** `294310321289277500`
- ✅ **Autor:** Alex Donega
- ✅ **Versão:** 2.9.0
- ✅ **Pasta do projeto:** `figma-plugin-starterkit`

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

## 🔐 Sistema de Autenticação

### Como usar o serviço de autenticação

O starter kit já vem com um sistema de autenticação completo. Para usá-lo:

#### 1. Configure sua API backend

Edite `src/config/api.config.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: 'https://sua-api.com',  // Altere para sua URL
  ENDPOINTS: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    VALIDATE: '/auth/validate',
  }
}
```

#### 2. Use as funções de autenticação

```typescript
import { login, register, logout, isAuthenticated, getCurrentUser } from '../services/auth.service'

// Fazer login
const response = await login('usuario@email.com', 'senha123')
if (response.success) {
  console.log('Usuário logado:', response.user)
}

// Registrar novo usuário
const response = await register('Nome', 'email@exemplo.com', 'senha123')

// Verificar se está autenticado
const logado = await isAuthenticated()

// Obter usuário atual
const user = await getCurrentUser()

// Fazer logout
await logout()
```

#### 3. Fazer requisições autenticadas

```typescript
import { authenticatedFetch } from '../services/auth.service'

const response = await authenticatedFetch('/api/meu-endpoint', {
  method: 'POST',
  body: JSON.stringify({ dados: 'exemplo' })
})
```

### Personalizar os Modais

Os modais de Login e Registro estão em:
- `src/ui/components/LoginModal.tsx`
- `src/ui/components/RegisterModal.tsx`

Você pode personalizar:
- Textos e traduções
- Prova social (números, avatares, estrelas)
- Campos do formulário
- Validações
- Estilos visuais

## 🌍 Internacionalização (i18n)

### Como adicionar um novo idioma

1. Edite `src/config/i18n.config.ts`
2. Adicione o código do idioma no tipo `Language`
3. Adicione as traduções no objeto `translations`
4. Adicione a opção em `languageOptions`

Exemplo adicionando Francês:

```typescript
export type Language = 'pt-BR' | 'es' | 'en' | 'fr'

export const translations: Record<Language, Translations> = {
  // ... outros idiomas
  'fr': {
    createRectangles: 'Créer des Rectangles',
    quantity: 'Quantité',
    // ... demais traduções
  }
}

export const languageOptions: LanguageOption[] = [
  // ... outros idiomas
  { code: 'fr', label: 'Français', flag: '🇫🇷' }
]
```

### Como usar traduções nos componentes

```typescript
import { translations } from '../config/i18n.config'

function MeuComponente({ currentLanguage }) {
  const t = translations[currentLanguage]

  return <h1>{t.createRectangles}</h1>
}
```

## 💰 Sistema de Monetização

### Configurar Waitlist/Upgrade

Edite `src/config/upgrade.config.ts`:

```typescript
export const UPGRADE_CONFIG = {
  WAITLIST_FORM_URL: 'https://sua-url-de-waitlist.com',
  CONTACT_EMAIL: 'seu@email.com',
  PRO_FEATURES: [
    'Funcionalidade Premium 1',
    'Funcionalidade Premium 2',
    // ... adicione suas features
  ]
}
```

### Mostrar tela de upgrade

A tela de upgrade já está implementada e pode ser acessada pelo botão "⭐ Upgrade" no header.

Para programaticamente mostrar a tela:

```typescript
setCurrentScreen('upgrade')  // No App.tsx
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
  width: 500,    // Largura (padrão: 500px)
  height: 700,   // Altura (padrão: 700px)
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

## ✨ Features em Destaque

### 🎨 Menu de Configurações Profissional
O menu de configurações (⚙️) centraliza todas as opções importantes:
- **Idioma**: Português (Brasil), Español, English
- **Tema**: Dark/Light com toggle visual
- **Conta**: Login, Criar conta, ou perfil do usuário logado

### 🔐 Autenticação Robusta
- Login e Registro com validação completa
- Persistência de sessão usando `figma.clientStorage`
- JWT token management
- Modal de registro com prova social profissional
- Sistema de logout seguro

### 🌍 Multi-idioma desde o início
Suporte nativo a 3 idiomas com estrutura fácil para adicionar mais:
- 🇧🇷 Português (Brasil)
- 🇪🇸 Español
- 🇺🇸 English

### 💎 Sistema de Monetização
- Tela de Upgrade com design profissional
- Sistema de Waitlist integrado
- Botão CTA destacado no header
- Pronto para integrar pagamentos

### 📱 UX/UI Polida
- Modais modernos com overlay e blur
- Animações e transições suaves
- Prova social com avatares e estrelas
- Design responsivo
- Tema escuro/claro

## 🎯 Casos de Uso

Este starter kit é perfeito para:

✅ **Plugins Freemium** - Sistema de autenticação e upgrade já prontos
✅ **Plugins SaaS** - Backend integration e user management
✅ **Plugins Multilíngue** - i18n configurado e funcionando
✅ **Plugins Comerciais** - Estrutura profissional para venda
✅ **Prototipagem Rápida** - Comece com tudo pronto

## 🚀 Próximos Passos

Depois de clonar este starter kit:

1. ✅ Personalize as configurações (nome, ID, autor)
2. ✅ Configure sua API backend no `api.config.ts`
3. ✅ Customize as traduções no `i18n.config.ts`
4. ✅ Ajuste a prova social no `RegisterModal.tsx`
5. ✅ Configure o sistema de waitlist no `upgrade.config.ts`
6. ✅ Implemente sua lógica de negócio
7. ✅ Teste em múltiplos idiomas
8. ✅ Publique na Figma Community!

## 📄 Licença

MIT License - Este é um starter kit livre para uso comercial e pessoal.

Crie seu plugin, monetize e divirta-se! 🎉

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tem sugestões de melhorias:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

**Criado com ❤️ para a comunidade Figma**

⭐ Se este starter kit foi útil, considere dar uma estrela no repositório!
