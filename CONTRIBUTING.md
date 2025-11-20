# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o **Figma Plugin StarterKit**! Este documento contém as diretrizes para contribuir com o projeto.

## 📋 Sumário

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)
- [Seu Primeiro Pull Request](#seu-primeiro-pull-request)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Guia de Estilo](#guia-de-estilo)
- [Convenções de Commit](#convenções-de-commit)

---

## 📜 Código de Conduta

Este projeto segue um código de conduta para garantir um ambiente acolhedor e inclusivo para todos. Ao participar, você concorda em manter um comportamento respeitoso e profissional.

### Nossas Promessas

- Usar linguagem acolhedora e inclusiva
- Respeitar pontos de vista e experiências diferentes
- Aceitar críticas construtivas com elegância
- Focar no que é melhor para a comunidade
- Mostrar empatia com outros membros da comunidade

---

## 🚀 Como Posso Contribuir?

Existem várias formas de contribuir com este projeto:

### 1. 🐛 Reportando Bugs

Antes de criar um bug report, verifique se o problema já não foi reportado. Se você encontrar um bug existente, adicione suas informações nos comentários.

### 2. 💡 Sugerindo Melhorias

Sugestões de novas funcionalidades são sempre bem-vindas! Abra uma issue descrevendo:
- O problema que você quer resolver
- A solução proposta
- Alternativas consideradas
- Impacto esperado

### 3. 📝 Melhorando a Documentação

Documentação clara é essencial. Você pode ajudar:
- Corrigindo typos e erros gramaticais
- Melhorando explicações existentes
- Adicionando exemplos práticos
- Traduzindo conteúdo

### 4. 💻 Contribuindo com Código

Contribuições de código são muito apreciadas! Veja as seções abaixo para detalhes.

---

## 🐛 Reportando Bugs

### Antes de Reportar

- Verifique a [documentação](README.md)
- Procure por [issues existentes](https://github.com/alexdoneagaa/figma-plugin-starterkit/issues)
- Teste na última versão do plugin

### Como Reportar um Bug

Crie uma issue incluindo:

**Informações Essenciais:**
- Título claro e descritivo
- Versão do plugin (verifique em Configurações)
- Versão do Figma
- Sistema operacional

**Descrição Detalhada:**
- Passos para reproduzir o problema
- Comportamento esperado
- Comportamento atual
- Screenshots ou GIFs (se aplicável)
- Logs de erro (se disponível)

**Template de Bug Report:**

```markdown
## Descrição
[Descrição clara do problema]

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que realmente acontece]

## Ambiente
- Versão do Plugin: [ex: 2.12.1]
- Versão do Figma: [ex: 124.0.1]
- SO: [ex: Windows 11]

## Informações Adicionais
[Screenshots, logs, contexto adicional]
```

---

## 💡 Sugerindo Melhorias

### Template de Feature Request

```markdown
## Problema
[Descreva o problema que você quer resolver]

## Solução Proposta
[Descreva como você imagina a solução]

## Alternativas Consideradas
[Outras formas de resolver o problema]

## Benefícios
- [Benefício 1]
- [Benefício 2]

## Impacto
- Usuários afetados: [quantos/quais]
- Complexidade estimada: [baixa/média/alta]
- Compatibilidade: [impactos em features existentes]
```

---

## 🎯 Seu Primeiro Pull Request

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/figma-plugin-starterkit.git
cd figma-plugin-starterkit

# Adicione o repositório original como upstream
git remote add upstream https://github.com/alexdoneagaa/figma-plugin-starterkit.git
```

### 2. Configure o Ambiente

```bash
# Instale as dependências
npm install

# Inicie o modo de desenvolvimento
npm run dev
```

### 3. Crie uma Branch

```bash
# Atualize sua main
git checkout main
git pull upstream main

# Crie uma branch para sua feature
git checkout -b feature/nome-da-feature
# ou para bug fixes
git checkout -b fix/nome-do-fix
```

### 4. Faça suas Alterações

- Escreva código limpo e bem documentado
- Siga o [Guia de Estilo](#guia-de-estilo)
- Teste suas alterações
- Rode o lint: `npm run lint`

### 5. Commit suas Mudanças

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

### 6. Push e Pull Request

```bash
# Push para seu fork
git push origin feature/nome-da-feature

# Abra um Pull Request no GitHub
```

---

## 🔄 Processo de Desenvolvimento

### Estrutura de Branches

- `main` - Branch principal, sempre estável
- `feature/*` - Novas funcionalidades
- `fix/*` - Correções de bugs
- `docs/*` - Melhorias na documentação
- `refactor/*` - Refatorações de código

### Workflow de Desenvolvimento

1. **Planeje**: Descreva o que vai fazer na issue
2. **Desenvolva**: Implemente com commits atômicos
3. **Teste**: Garanta que tudo funciona
4. **Documente**: Atualize a documentação se necessário
5. **Revise**: Faça uma auto-revisão antes do PR
6. **Submeta**: Abra o Pull Request

### Critérios de Aceitação

Para que um PR seja aceito, ele deve:

- ✅ Passar no lint (`npm run lint`)
- ✅ Buildar sem erros (`npm run build`)
- ✅ Seguir o guia de estilo
- ✅ Ter commits bem escritos
- ✅ Incluir documentação (se aplicável)
- ✅ Não quebrar funcionalidades existentes

---

## 🎨 Guia de Estilo

### TypeScript

```typescript
// ✅ BOM: Use tipos explícitos
interface UserData {
  name: string
  email: string
}

function getUserData(): UserData {
  return { name: 'Alex', email: 'alex@example.com' }
}

// ❌ EVITE: Tipos implícitos
function getUserData() {
  return { name: 'Alex', email: 'alex@example.com' }
}
```

### React Components

```typescript
// ✅ BOM: Props interface + function component
interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

export function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

// ❌ EVITE: Props inline sem tipagem
export function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>
}
```

### Nomenclatura

- **Componentes**: PascalCase (`MainScreen`, `UpgradeButton`)
- **Funções/Variáveis**: camelCase (`handleClick`, `isLoggedIn`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`, `MAX_RECTANGLES`)
- **Arquivos**: kebab-case (`auth.service.ts`, `version.config.ts`)

### Organização de Imports

```typescript
// 1. React/External libs
import React from 'react'
import { useState } from 'react'

// 2. Tipos
import type { Language } from '../../config/i18n.config'

// 3. Componentes internos
import { Header } from '../components/Header'

// 4. Services/Utils
import { authService } from '../../services/auth.service'

// 5. Config/Constants
import { translations } from '../../config/i18n.config'

// 6. Estilos (se aplicável)
import './styles.css'
```

### ESLint

O projeto usa ESLint com as seguintes configurações:

- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:@figma/figma-plugins/recommended`

Rode sempre antes de commitar:

```bash
npm run lint        # Verifica problemas
npm run lint:fix    # Corrige automaticamente
```

---

## 📝 Convenções de Commit

Este projeto segue o [Conventional Commits](https://www.conventionalcommits.org/).

### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adição ou correção de testes
- `chore`: Tarefas de build, configs, etc

### Exemplos

```bash
# Feature
git commit -m "feat(auth): adiciona login com Google"

# Bug fix
git commit -m "fix(main): corrige criação de retângulos duplicados"

# Documentação
git commit -m "docs(readme): atualiza guia de instalação"

# Refatoração
git commit -m "refactor(ui): extrai componente Header"

# Chore
git commit -m "chore: atualiza dependências do projeto"
```

### Boas Práticas

- Use o imperativo ("adiciona" não "adicionado")
- Primeira linha com no máximo 72 caracteres
- Descreva o "o quê" e o "por quê", não o "como"
- Commits atômicos (uma mudança lógica por commit)

---

## ✅ Checklist do Pull Request

Antes de abrir seu PR, verifique:

- [ ] Código segue o guia de estilo
- [ ] Lint passa sem erros (`npm run lint`)
- [ ] Build funciona (`npm run build`)
- [ ] Commits seguem o padrão Conventional Commits
- [ ] Branch está atualizada com a main
- [ ] Documentação foi atualizada (se necessário)
- [ ] PR tem título descritivo
- [ ] PR tem descrição detalhada das mudanças

### Template de Pull Request

```markdown
## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Descrição
[Descreva suas mudanças]

## Issues Relacionadas
Resolve #123

## Como Testar
1. Clone a branch
2. Execute `npm install`
3. Execute `npm run dev`
4. Teste [descreva o que testar]

## Screenshots
[Se aplicável, adicione screenshots]

## Checklist
- [ ] Código segue o guia de estilo
- [ ] Lint passa sem erros
- [ ] Build funciona sem erros
- [ ] Commits seguem Conventional Commits
- [ ] Documentação atualizada
```

---

## 🙏 Agradecimentos

Toda contribuição, por menor que seja, é muito valiosa! Seja reportando um bug, sugerindo uma melhoria ou contribuindo com código, você está ajudando a tornar este projeto melhor para toda a comunidade.

**Obrigado por contribuir!** 🎉

---

## 📞 Dúvidas?

- Abra uma [issue](https://github.com/alexdoneagaa/figma-plugin-starterkit/issues)
- Entre em contato: [alexandre.donegatodaro@gmail.com](mailto:alexandre.donegatodaro@gmail.com)
- Veja o [README](README.md) para mais informações

---

**Licença:** MIT © 2025 Alex Donega
