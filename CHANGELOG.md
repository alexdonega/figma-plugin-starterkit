# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Em desenvolvimento
- Testes automatizados com Vitest
- Storybook para componentes UI
- Mais exemplos práticos de features

---

## [2.12.1] - 2025-11-19

### Added
- ✨ Sistema completo de autenticação JWT
  - Login e registro de usuários
  - Validação de token
  - Armazenamento seguro com `figma.clientStorage`
  - Expiração automática de tokens (7 dias)
- 🌍 Sistema de internacionalização (i18n)
  - Suporte para 3 idiomas: Português (PT-BR), Espanhol (ES), Inglês (EN)
  - 51 strings traduzidas
  - Seletor de idioma na tela de configurações
- 🎨 Sistema de temas Dark/Light
  - Alternância entre modo escuro e claro
  - Persistência de preferência com localStorage
  - Tokens de design centralizados em `src/theme/theme.ts`
- 📚 Sistema de tutoriais interativos
  - 15+ tutoriais organizados em 6 categorias
  - Tutoriais traduzidos nos 3 idiomas
  - Navegação por categorias
- 💰 Tela de upgrade/monetização
  - Template para paywall/waitlist
  - Design responsivo
  - Integração com formulários externos
- ⚙️ Tela de configurações completa
  - Seleção de idioma
  - Alternância de tema
  - Informações de conta
  - Versão e data de atualização
- 📄 Documentação completa
  - README.md profissional
  - docs/architecture.md com diagramas da arquitetura dual
  - docs/development.md com guia de setup e troubleshooting
  - .claude/CLAUDE.md com instruções para Claude Code

### Changed
- ♻️ Refatoração completa da arquitetura
  - Separação clara entre Plugin (sandbox) e UI (iframe)
  - Comunicação type-safe com Discriminated Unions
  - Service Layer para lógica de negócio (auth.service.ts)
- 🎯 Componentes React funcionais com Hooks
  - Substituição de class components
  - useState, useEffect para gerenciamento de estado
- 📦 Build otimizado com Plugma 2.2.3
  - Hot Module Replacement (HMR) com Vite 7.2.2
  - Build de produção minificado

### Fixed
- 🐛 Correção de tipos TypeScript
  - Strict mode habilitado
  - Zero warnings de compilação
- 🔒 Validação de segurança
  - Sanitização de inputs
  - Validação de tokens JWT

---

## [2.0.0] - 2025-11-01

### Added
- 🚀 Versão inicial do StarterKit
- ⚛️ Setup básico com React + TypeScript + Vite
- 🔧 Configuração do ESLint
- 📝 Exemplo básico de criação de retângulos
- 🎨 Interface básica com Figma Plugin DS

### Changed
- Migração de JavaScript para TypeScript
- Atualização para React 19.2.0

---

## Tipos de Mudanças

- `Added` - Novas features
- `Changed` - Mudanças em features existentes
- `Deprecated` - Features que serão removidas em breve
- `Removed` - Features removidas
- `Fixed` - Correções de bugs
- `Security` - Correções de segurança

---

## Como Contribuir

Ao fazer um Pull Request, adicione suas mudanças na seção `[Unreleased]` do CHANGELOG.
Quando uma nova versão for lançada, as mudanças serão movidas para a seção da versão correspondente.

### Exemplo:

```markdown
## [Unreleased]

### Added
- Nova feature X que faz Y

### Fixed
- Bug Z que causava problema W
```
