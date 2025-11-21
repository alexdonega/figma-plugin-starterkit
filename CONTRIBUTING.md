# Guia de Contribuição

Obrigado por considerar contribuir com o **Figma Plugin StarterKit**! 🎉

Este documento contém diretrizes para contribuir com o projeto.

---

## 📋 Índice

- [Como Posso Contribuir?](#como-posso-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Melhorias](#sugerir-melhorias)
- [Primeiro Pull Request](#primeiro-pull-request)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Padrões de Código](#padrões-de-código)
- [Mensagens de Commit](#mensagens-de-commit)

---

## 🤝 Como Posso Contribuir?

Existem várias formas de contribuir:

- 🐛 **Reportar bugs** - Encontrou um problema? Nos avise!
- 💡 **Sugerir melhorias** - Tem uma ideia? Compartilhe conosco!
- 📝 **Melhorar documentação** - Ajude outros desenvolvedores
- 💻 **Contribuir com código** - Corrija bugs ou adicione features
- 🌍 **Traduzir** - Adicione suporte para novos idiomas
- ⭐ **Dar uma estrela** - Ajuda o projeto a crescer!

---

## 🐛 Reportar Bugs

### Como reportar

1. Verifique se já foi reportado nas [Issues](https://github.com/seu-usuario/figma-plugin-starterkit/issues)
2. Crie uma nova issue com:
   - Título claro
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Ambiente (OS, Figma versão, Node versão)
   - Screenshots (se aplicável)

---

## 💡 Sugerir Melhorias

1. Verifique se já foi sugerido
2. Crie uma issue descrevendo:
   - O problema que resolve
   - Solução proposta
   - Alternativas consideradas

---

## 🎯 Primeiro Pull Request

```bash
# 1. Fork e clone
git clone https://github.com/SEU-USUARIO/figma-plugin-starterkit.git

# 2. Crie uma branch
git checkout -b feature/minha-feature

# 3. Instale dependências
npm install

# 4. Faça suas mudanças e teste
npm run lint
npm run build

# 5. Commit e push
git commit -m "feat: adiciona nova feature"
git push origin feature/minha-feature

# 6. Abra Pull Request no GitHub
```

---

## 🔧 Processo de Desenvolvimento

### Setup

```bash
npm install
npm run dev  # Inicia dev server
# Importe plugin no Figma Desktop
```

### Estrutura

```
src/
├── main/      # Código do Plugin (sandbox)
├── ui/        # Código da UI (React)
├── config/    # Configurações
├── services/  # Business logic
└── utils/     # Helpers
```

---

## 📐 Padrões de Código

### TypeScript

- ✅ TypeScript strict mode
- ✅ Named exports
- ✅ Discriminated Unions para mensagens

```typescript
// ✅ BOM
export interface User {
  id: string
  name: string
}

// ❌ EVITAR
export default function foo(data: any) {}
```

### React

- ✅ Functional components com Hooks
- ✅ Props tipadas
- ✅ Inline styles (não CSS)

```typescript
interface Props {
  title: string
  onUpdate: (v: number) => void
}

export function MyComponent({ title, onUpdate }: Props) {
  const [value, setValue] = useState(0)
  return <div style={{ padding: '16px' }}>{title}</div>
}
```

---

## 💬 Mensagens de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```bash
feat: adiciona nova feature
fix: corrige bug X
docs: atualiza README
refactor: simplifica função Y
perf: otimiza criação de nodes
test: adiciona testes para Z
```

---

## 📚 Recursos

- [Figma Plugin API](https://www.figma.com/plugin-docs/)
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Obrigado por contribuir! 🙏**
