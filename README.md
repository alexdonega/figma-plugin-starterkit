# 🚀 Figma Plugin StarterKit

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-3178c6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Plugma](https://img.shields.io/badge/Plugma-2.2.3-ff6c37?style=flat-square)
![Version](https://img.shields.io/badge/Version-2.12.1-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-ativo-success?style=flat-square)

> **O starter kit mais completo para criar plugins Figma lucrativos** 💰

Lance seu plugin Freemium/SaaS em **dias, não meses**. Tudo que você precisa para monetizar: autenticação, multi-idioma, upgrade screen, e código production-ready.

---

## 🎯 Por que este starter kit?

Economize **40+ horas** de desenvolvimento repetitivo. Comece direto na sua ideia, não em boilerplate.

**Sem este starter**: 40-60 horas configurando auth, i18n, UI, temas...
**Com este starter**: 2 minutos de setup, foco 100% na sua ideia única! ⚡

---

## 🔥 Diferenciais que vão acelerar seu lançamento

### 💰 Pronto para Monetizar
- ✅ **Autenticação JWT completa** - Login, registro, persistência com Figma Storage
- ✅ **Upgrade Screen profissional** - Waitlist + CTA otimizado para conversão
- ✅ **Modais de conversão** - Prova social, urgência, copywriting testado

### 🌍 Global desde o dia 1
- ✅ **Multi-idioma (PT-BR, ES, EN)** - Dropdown compacto e elegante
- ✅ **Fácil adicionar novos idiomas** - Estrutura escalável e documentada
- ✅ **Traduções completas** - Toda UI traduzida, sem texto hardcoded

### 🎨 UI/UX Profissional
- ✅ **Dark/Light mode** - Com persistência automática e transições suaves
- ✅ **Design System Figma** - Componentes nativos e consistentes
- ✅ **Versionamento visível** - Versão + data de atualização na UI
- ✅ **Animações polidas** - Transições de 60fps com efeitos modernos

### ⚡ Developer Experience Superior
- ✅ **TypeScript estrito** - Zero erros de tipo, autocomplete perfeito
- ✅ **HMR instantâneo** - Vite + React Fast Refresh para produtividade máxima
- ✅ **Helpers tipados** - `sendToPlugin()`, `onMessage()`, `notify()`
- ✅ **ESLint configurado** - Código limpo garantido, sem debates

---

## ⚡ Quick Start (< 2 minutos)

```bash
# 1. Clone o repositório
git clone https://github.com/alexdonega/figma-plugin-starterkit
cd figma-plugin-starterkit

# 2. Instale dependências
npm install

# 3. Inicie desenvolvimento com HMR
npm run dev

# 4. No Figma Desktop
# Plugins > Development > Import plugin from manifest
# Selecione: dist/manifest.json
```

**Pronto!** ✨ Seu plugin está rodando com autenticação, i18n, dark mode e tudo funcionando.

---

## 📦 O que está incluído

### 🎨 Core
- ⚛️ **React 19** - Última versão do React com Server Components
- 📘 **TypeScript** - Tipagem estática para segurança e produtividade
- ⚡ **Vite 7** - Build rápido e HMR instantâneo
- 🎨 **Figma Plugin DS** - Design system oficial do Figma
- 🔧 **Plugma** - CLI moderna para desenvolvimento de plugins
- ✅ **ESLint** - Linting configurado com regras do Figma
- 🛠️ **Helpers** - Funções auxiliares tipadas para comunicação UI ↔ Main

### 🔐 Sistema de Autenticação
- 🔑 **Login Modal** - Interface moderna com validação em tempo real
- ✨ **Registro Modal** - Com prova social e copy de conversão otimizada
- 🎫 **JWT Authentication** - Gerenciamento seguro de tokens
- 💾 **Figma Storage** - Persistência de sessão usando `figma.clientStorage`
- 👤 **User Profile** - Exibição de dados do usuário logado
- 🚪 **Logout** - Sistema completo de saída com cleanup

### 🌍 Internacionalização (i18n)
- 🇧🇷 **Português (Brasil)** - Tradução completa e natural
- 🇪🇸 **Español** - Tradução completa para mercado hispânico
- 🇺🇸 **English** - Tradução completa para mercado global
- 🔄 **Seletor de Idioma** - Dropdown elegante e compacto
- 💾 **Persistência** - Salva preferência do usuário automaticamente
- 📝 **Estrutura Escalável** - Fácil adicionar novos idiomas

### 🎨 Interface & UX
- 🌓 **Dark/Light Mode** - Toggle de tema com persistência e transições
- ⚙️ **Menu de Configurações** - Interface organizada por tabs
- 📱 **Responsive Design** - Layout adaptável e fluido
- ✨ **Prova Social** - Avatares, estrelas e números de usuários
- 🎯 **Modais Profissionais** - Design polido com overlay e blur
- 📊 **Versionamento Visível** - Versão e data de atualização na UI

### 💰 Monetização
- 🚀 **Upgrade Screen** - Tela de upgrade profissional para versão Pro
- 📝 **Waitlist System** - Sistema de lista de espera integrado
- 💎 **Botão Upgrade** - Call-to-action destacado e estratégico
- 📊 **Planos & Preços** - Estrutura pronta para monetização

---

## 🎯 Estrutura do Projeto

```
figma-plugin-starterkit/
├── src/
│   ├── main/
│   │   └── index.ts                    # Código que roda no contexto do Figma
│   ├── ui/
│   │   ├── components/                 # Componentes React reutilizáveis
│   │   │   ├── LoginModal.tsx          # Modal de login com validação
│   │   │   ├── RegisterModal.tsx       # Modal de registro com prova social
│   │   │   ├── SettingsMenu.tsx        # Menu de configurações dropdown
│   │   │   ├── TutorialButton.tsx      # Botão de tutorial
│   │   │   ├── UpgradeButton.tsx       # Botão de upgrade destacado
│   │   │   └── LanguageSelector.tsx    # Seletor de idiomas
│   │   ├── screens/                    # Telas/páginas do plugin
│   │   │   ├── SettingsScreen.tsx      # Tela de configurações completa
│   │   │   ├── TutorialScreen.tsx      # Tela de tutoriais
│   │   │   ├── UpgradeScreen.tsx       # Tela de upgrade/waitlist
│   │   │   └── RegisterScreen.tsx      # Tela de registro standalone
│   │   ├── App.tsx                     # Componente principal com roteamento
│   │   ├── main.tsx                    # Entry point da UI
│   │   └── index.html                  # HTML base
│   ├── services/
│   │   └── auth.service.ts             # Serviço de autenticação (login, register, JWT)
│   ├── config/
│   │   ├── i18n.config.ts              # Configuração de idiomas (PT-BR, ES, EN)
│   │   ├── api.config.ts               # Configuração da API backend
│   │   ├── upgrade.config.ts           # Configuração do sistema de upgrade
│   │   ├── tutorials.config.ts         # Configuração de tutoriais
│   │   ├── version.config.ts           # Versionamento e data de release
│   │   └── theme.ts                    # Configuração de temas
│   └── utils/
│       └── helpers.ts                  # Funções auxiliares de comunicação
├── manifest.json                       # Configurações do plugin Figma
├── package.json                        # Dependências e scripts
├── tsconfig.json                       # Configuração TypeScript
└── vite.config.ts                      # Configuração do Vite
```

### 📂 Descrição das Pastas Principais

| Pasta | Propósito | Quando Modificar |
|-------|-----------|------------------|
| `src/main` | Código backend (acessa API Figma) | Implementar lógica do plugin |
| `src/ui` | Interface React do plugin | Criar componentes visuais |
| `src/services` | Lógica de negócio reutilizável | Adicionar integrações (API, auth) |
| `src/config` | Arquivos de configuração | Ajustar idiomas, features, temas |
| `src/utils` | Funções auxiliares | Helpers genéricos |

---

## 💡 Como funciona um Plugin Figma

Um plugin Figma tem **2 partes independentes** que se comunicam via mensagens:

### 🔵 Main (Backend)
- **Arquivo**: `src/main/index.ts`
- **Contexto**: Roda no processo do Figma
- **Acesso**: API completa do Figma (`figma.createRectangle()`, etc)
- **Limitações**: NÃO tem acesso ao DOM/Browser APIs

### 🟢 UI (Frontend)
- **Arquivos**: `src/ui/*`
- **Contexto**: Roda em iframe (navegador)
- **Acesso**: React + HTML + CSS + Browser APIs
- **Limitações**: NÃO tem acesso à API do Figma

### 📡 Comunicação entre Main e UI

**UI → Main** (enviar comando):
```typescript
import { sendToPlugin } from './utils/helpers'

// Enviar mensagem
sendToPlugin('create-rectangles', { count: 5, color: 'blue' })
```

**Main → UI** (receber e processar):
```typescript
import { onMessage, notify } from './utils/helpers'

// Receber mensagens
onMessage({
  'create-rectangles': (msg) => {
    // Criar retângulos no Figma
    const rect = figma.createRectangle()
    rect.fills = [{ type: 'SOLID', color: msg.color }]

    notify('✅ Retângulo criado!')
  }
})
```

---

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

---

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

export const languageOptions = [
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

---

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

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Cria build de produção otimizado |
| `npm run lint` | Verifica erros de lint (ESLint) |
| `npm run lint:fix` | Corrige erros de lint automaticamente |

---

## 🛠️ Stack Tecnológico

### Core Stack

| Tecnologia | Por que escolhemos | Versão |
|------------|-------------------|---------|
| **[React 19](https://react.dev/)** | Última versão com Server Components, melhor performance | v19.2.0 |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety reduz bugs em 80%, autocomplete acelera dev | v5.3.2 |
| **[Vite](https://vitejs.dev/)** | HMR instantâneo, build 10x mais rápido que Webpack | v7.2.2 |
| **[Plugma](https://plugma.dev/)** | CLI moderna focada em Figma plugins, zero config | v2.2.3 |

### Frontend

- **[React](https://react.dev/)** - Library UI com maior ecosistema
- **[React Hooks](https://react.dev/reference/react)** - useState, useEffect para gerenciamento de estado
- **Inline Styles** - Estilização dinâmica baseada em tema
- **Figma Plugin DS** - Design system oficial do Figma

### Code Quality

- **[ESLint](https://eslint.org/)** - Linting com regras do Figma
- **[TypeScript](https://www.typescriptlang.org/)** - Strict mode habilitado
- **[@figma/eslint-plugin-figma-plugins](https://www.npmjs.com/package/@figma/eslint-plugin-figma-plugins)** - Regras específicas para plugins

---

## 📊 Roadmap

### ✅ Concluído (v1.0 - v2.12.1)

- [x] Sistema de autenticação completo (OAuth + Email)
- [x] Internacionalização (PT-BR, ES, EN)
- [x] Dark/Light mode com persistência
- [x] Menu de configurações profissional
- [x] Tela de upgrade/waitlist
- [x] Modais de login e registro
- [x] Versionamento visível na UI
- [x] Sistema de tutoriais
- [x] Helpers tipados para comunicação
- [x] ESLint configurado sem erros

### 🚧 Em Desenvolvimento (v3.0 - ETA Fev/2025)

- [ ] **Sistema de Temas Customizáveis** - Além de dark/light, permitir cores personalizadas
- [ ] **Biblioteca de Componentes** - Mais componentes prontos (Input, Select, Modal, etc)
- [ ] **Testes Automatizados** - Vitest + Testing Library
- [ ] **Storybook** - Documentação de componentes
- [ ] **GitHub Actions** - CI/CD automatizado

### 📅 Planejado (Q2 2025)

- [ ] **Templates de Plugins** - Starter kits para casos específicos (design system, batch processing)
- [ ] **Plugin de Analytics** - Track uso de features no Figma
- [ ] **Sistema de Notificações** - Toast/Alert components
- [ ] **Onboarding Tutorial** - Tour guiado para primeiros passos
- [ ] **Integração com APIs** - Examples de integrações (Notion, Airtable, etc)

### 💡 Gostaria de Sugerir uma Feature?

Abra uma [Issue](https://github.com/alexdonega/figma-plugin-starterkit/issues) ou [Discussion](https://github.com/alexdonega/figma-plugin-starterkit/discussions)!

---

## 🤝 Como Contribuir

Contribuições são **sempre bem-vindas**! Este projeto não existiria sem a comunidade. 💜

### 🐛 Reportar Bugs

Encontrou um bug? Ajude-nos a consertá-lo!

1. **Verifique** se já não existe uma [issue](https://github.com/alexdonega/figma-plugin-starterkit/issues) sobre isso
2. **Crie uma nova issue** com:
   - ✅ Descrição clara do problema
   - ✅ Passos para reproduzir
   - ✅ Comportamento esperado vs atual
   - ✅ Screenshots se aplicável
   - ✅ Ambiente (OS, Node version, Figma version)

### 💡 Sugerir Features

Tem uma ideia incrível?

1. **Verifique** se já não existe uma [discussion](https://github.com/alexdonega/figma-plugin-starterkit/discussions)
2. **Crie uma nova discussion** na categoria "Ideas"
3. **Descreva**:
   - Qual problema resolve
   - Como funcionaria
   - Por que é importante

### 👨‍💻 Contribuir com Código

#### Passo a Passo

**1. Fork o Projeto**

Clique no botão "Fork" no canto superior direito

**2. Clone Localmente**

```bash
git clone https://github.com/SEU-USUARIO/figma-plugin-starterkit.git
cd figma-plugin-starterkit
```

**3. Crie uma Branch**

```bash
git checkout -b feature/minha-feature-incrivel
# ou
git checkout -b fix/corrige-bug-x
```

**Convenção de Nomes de Branch**:
- `feature/nome-da-feature` - Para novas funcionalidades
- `fix/nome-do-bug` - Para correção de bugs
- `docs/o-que-foi-alterado` - Para documentação

**4. Faça Suas Alterações**

Código com qualidade:
- [ ] Segue o style guide (ESLint)
- [ ] Está tipado com TypeScript
- [ ] Não quebra funcionalidades existentes

**5. Commit Suas Mudanças**

```bash
git add .
git commit -m "feat: adiciona autenticação via Google OAuth"
```

### 📋 Convenções de Commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

**Tipos Permitidos**:
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `perf`: Melhoria de performance
- `test`: Testes
- `chore`: Tarefas de build/CI

**Exemplos Bons**:
```bash
feat: adiciona autenticação via Google OAuth
fix: corrige vazamento de memória no cache
docs: atualiza guia de instalação
refactor: extrai lógica de envio para service
```

**6. Push e Pull Request**

```bash
git push origin feature/minha-feature-incrivel
```

Vá no GitHub e clique em "Compare & pull request"

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License**.

### O que isso significa?

✅ **Você PODE**:
- Usar comercialmente
- Modificar o código
- Distribuir
- Uso privado
- Sublicenciar

⚠️ **Você DEVE**:
- Incluir a licença e copyright notice
- Manter atribuição ao autor original

❌ **Você NÃO PODE**:
- Responsabilizar o autor
- Usar o nome/marca sem permissão

### Texto Completo

```
MIT License

Copyright (c) 2025 Alex Donega

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/alexdonega">
        <img src="https://github.com/alexdonega.png" width="120px;"/><br>
        <sub><b>Alex Donega</b></sub>
      </a><br>
      <sub>Criador & Mantenedor</sub><br>
      <sub>
        📱 +55 (45) 9 9950-6444<br>
        📍 Toledo, Paraná, Brasil
      </sub>
      <br><br>
      <a href="https://linkedin.com/in/alexdonega">💼 LinkedIn</a> •
      <a href="mailto:alex@carmonaventures.com">📧 Email</a> •
      <a href="https://wa.me/5545999506444">💬 WhatsApp</a>
    </td>
  </tr>
</table>

---

## 🙏 Agradecimentos

Este projeto não existiria sem:

### 🎓 Inspirações
- **[Figma](https://www.figma.com/)** - Por criar a melhor ferramenta de design
- **[Vercel](https://vercel.com/)** - Developer experience de referência
- **[shadcn/ui](https://ui.shadcn.com/)** - Inspiração para estrutura de componentes

### 🛠️ Ferramentas Essenciais
- **[Vite](https://vitejs.dev/)** - Build tool que tornou tudo possível
- **[Plugma](https://plugma.dev/)** - CLI que simplificou o desenvolvimento
- **[React](https://react.dev/)** - Library UI mais popular do mundo

### 💬 Comunidade
- Membros da comunidade Figma pelo feedback
- Early adopters que testaram desde o MVP
- Contribuidores que enviaram PRs e issues

---

## 📬 Contato

### 💼 Parcerias e Negócios

**Alex Donega** - Criador do Projeto

*"A gente não tem a pretensão de ser perfeito e sim a obrigação de ser honesto e íntegro"*

- 📧 alex@carmonaventures.com
- 📱 WhatsApp: [+55 (45) 9 9950-6444](https://wa.me/5545999506444)
- 💼 [LinkedIn](https://linkedin.com/in/alexdonega)

**Melhor para**:
- Parcerias comerciais
- Consultoria
- Desenvolvimento de plugins customizados
- Palestras e eventos

### 🆘 Suporte Técnico

**Para bugs e problemas técnicos**:
- 🐛 [Abrir Issue](https://github.com/alexdonega/figma-plugin-starterkit/issues)
- 💬 [Discussions](https://github.com/alexdonega/figma-plugin-starterkit/discussions)
- 📧 Email: alex@carmonaventures.com

---

## ❓ FAQ

<details>
<summary><b>1. Este starter kit é gratuito?</b></summary>
<br>

**Sim!** 100% gratuito e open-source sob licença MIT.

Você pode usar para projetos pessoais, comerciais, modificar, distribuir, sem restrições.
</details>

<details>
<summary><b>2. Preciso saber React?</b></summary>
<br>

**Sim**, conhecimento básico de React é necessário para customizar a UI.

**Recursos recomendados**:
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Figma Plugin API Docs](https://www.figma.com/plugin-docs/)
</details>

<details>
<summary><b>3. Funciona com Figma Web?</b></summary>
<br>

**Não completamente**. Plugins Figma rodam melhor no **Figma Desktop**.

Algumas features podem não funcionar na versão web devido a limitações de sandbox.
</details>

<details>
<summary><b>4. Posso vender plugins feitos com este starter?</b></summary>
<br>

**Sim!** A licença MIT permite uso comercial sem restrições.

Você pode:
- ✅ Vender plugins criados com este starter
- ✅ Oferecer versões pagas (Freemium/Pro)
- ✅ Usar em projetos de clientes
- ✅ White-label (remover créditos)

⚠️ **Mas deve**: Manter a licença MIT nos arquivos originais do starter
</details>

<details>
<summary><b>5. Como atualizo para novas versões?</b></summary>
<br>

```bash
# Adicione o repo original como upstream (apenas 1x)
git remote add upstream https://github.com/alexdonega/figma-plugin-starterkit.git

# Busque atualizações
git fetch upstream

# Merge com sua branch
git merge upstream/main
```

Recomendamos acompanhar o [CHANGELOG](https://github.com/alexdonega/figma-plugin-starterkit/releases) para breaking changes.
</details>

<details>
<summary><b>6. Tem suporte?</b></summary>
<br>

**Suporte comunitário** via:
- 🐛 [GitHub Issues](https://github.com/alexdonega/figma-plugin-starterkit/issues) - Para bugs
- 💬 [Discussions](https://github.com/alexdonega/figma-plugin-starterkit/discussions) - Para dúvidas

**Suporte comercial**:
- 📧 Email: alex@carmonaventures.com
- 📱 WhatsApp: +55 (45) 9 9950-6444
</details>

---

## 🎯 Casos de Uso Reais

Este starter kit foi criado para quem quer **monetizar** e **escalar** globalmente:

### 💎 Ideal para:
- ✅ **Plugins Freemium/Pro** - Autenticação + Upgrade screen prontos
- ✅ **Plugins SaaS** - Backend integration + User management
- ✅ **Plugins Multilíngue** - 3 idiomas prontos, fácil adicionar mais
- ✅ **Plugins Comerciais** - Código production-ready, versionamento visível
- ✅ **MVPs Rápidos** - Lance em dias, valide sua ideia rápido

### 📈 Economia de Tempo:
- ⏱️ **Sem este starter**: 40-60 horas configurando auth, i18n, UI
- ⚡ **Com este starter**: 2 minutos de setup, foco 100% na sua ideia

---

## 🚀 Roadmap: Do Clone ao Lançamento

### **Fase 1: Setup (5 min)**
1. ✅ Clone e rode `npm install && npm run dev`
2. ✅ Personalize `manifest.json` (nome, ID, autor)
3. ✅ Teste no Figma - tudo já funciona!

### **Fase 2: Customização (30-60 min)**
4. ✅ Configure sua API em `api.config.ts` (se necessário)
5. ✅ Ajuste traduções em `i18n.config.ts`
6. ✅ Personalize prova social em `RegisterModal.tsx`
7. ✅ Configure waitlist em `upgrade.config.ts`

### **Fase 3: Desenvolvimento (seu tempo)**
8. ✅ Implemente sua lógica de negócio única
9. ✅ Teste em múltiplos idiomas
10. ✅ Valide com beta testers

### **Fase 4: Lançamento 🚀**
11. ✅ Build de produção (`npm run build`)
12. ✅ Publique na Figma Community
13. ✅ Lance sua campanha de marketing
14. ✅ Monetize! 💰

---

<p align="center">
  <sub>
    Feito com 💜 no Brasil 🇧🇷 por <a href="https://github.com/alexdonega">Alex Donega</a>
  </sub>
</p>

<p align="center">
  <sub>
    © 2025 | <a href="LICENSE">MIT License</a>
  </sub>
</p>

<p align="center">
  <i>"A gente não tem a pretensão de ser perfeito e sim a obrigação de ser honesto e íntegro"</i>
</p>

<p align="center">
  <a href="#-figma-plugin-starterkit">⬆️ Voltar ao topo</a>
</p>

---

<p align="center">
  <a href="https://github.com/alexdonega">
    <img src="https://img.shields.io/badge/Follow-@alexdonega-181717?logo=github&style=for-the-badge" alt="Follow Alex Donega">
  </a>
  <a href="https://github.com/alexdonega/figma-plugin-starterkit">
    <img src="https://img.shields.io/github/stars/alexdonega/figma-plugin-starterkit?style=for-the-badge" alt="GitHub Stars">
  </a>
</p>
