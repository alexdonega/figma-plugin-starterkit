/**
 * Configuração dos Tutoriais
 *
 * Define todos os tutoriais disponíveis no plugin em 3 idiomas
 */

import { type Language } from './i18n.config'

export interface Tutorial {
  id: string
  title: Record<Language, string>
  description: Record<Language, string>
  code?: string
  explanation: Record<Language, string[]>
  relatedLinks?: { title: Record<Language, string>; url?: string; tutorialId?: string }[]
}

export interface TutorialCategory {
  id: string
  icon: string
  title: Record<Language, string>
  tutorials: Tutorial[]
}

export const tutorialCategories: TutorialCategory[] = [
  // 🚀 INÍCIO RÁPIDO / INICIO RÁPIDO / QUICK START
  {
    id: 'quick-start',
    icon: '🚀',
    title: {
      'pt-BR': 'Início Rápido',
      'es': 'Inicio Rápido',
      'en': 'Quick Start'
    },
    tutorials: [
      {
        id: 'quick-start-guide',
        title: {
          'pt-BR': 'Guia de Início Rápido',
          'es': 'Guía de Inicio Rápido',
          'en': 'Quick Start Guide'
        },
        description: {
          'pt-BR': 'Comece a usar o starter kit em minutos',
          'es': 'Comienza a usar el starter kit en minutos',
          'en': 'Get started with the starter kit in minutes'
        },
        explanation: {
          'pt-BR': [
            '1. Clone ou baixe o repositório',
            '2. Execute npm install',
            '3. Execute npm run dev',
            '4. Importe o plugin no Figma (dist/manifest.json)',
            '5. Comece a desenvolver!',
          ],
          'es': [
            '1. Clona o descarga el repositorio',
            '2. Ejecuta npm install',
            '3. Ejecuta npm run dev',
            '4. Importa el plugin en Figma (dist/manifest.json)',
            '5. ¡Comienza a desarrollar!',
          ],
          'en': [
            '1. Clone or download the repository',
            '2. Run npm install',
            '3. Run npm run dev',
            '4. Import the plugin in Figma (dist/manifest.json)',
            '5. Start developing!',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'Estrutura do Projeto',
              'es': 'Estructura del Proyecto',
              'en': 'Project Structure'
            },
            tutorialId: 'project-structure'
          },
          {
            title: {
              'pt-BR': 'Documentação do Figma Plugin',
              'es': 'Documentación de Figma Plugin',
              'en': 'Figma Plugin Documentation'
            },
            url: 'https://www.figma.com/plugin-docs/'
          },
        ],
      },
      {
        id: 'project-structure',
        title: {
          'pt-BR': 'Estrutura do Projeto',
          'es': 'Estructura del Proyecto',
          'en': 'Project Structure'
        },
        description: {
          'pt-BR': 'Entenda como o projeto está organizado',
          'es': 'Entiende cómo está organizado el proyecto',
          'en': 'Understand how the project is organized'
        },
        code: `src/
├── main/
│   └── index.ts          # Código que roda no Figma / Código que corre en Figma / Code that runs in Figma
├── ui/
│   ├── components/       # Componentes React
│   ├── screens/          # Telas do plugin / Pantallas del plugin / Plugin screens
│   └── App.tsx          # Componente principal / Componente principal / Main component
├── services/
│   └── auth.service.ts  # Serviço de autenticação / Servicio de autenticación / Authentication service
├── config/
│   ├── i18n.config.ts   # Configuração de idiomas / Configuración de idiomas / Language configuration
│   └── api.config.ts    # Configuração da API / Configuración de la API / API configuration
├── theme/
│   └── theme.ts         # Sistema de theme / Sistema de tema / Theme system
└── utils/
    └── helpers.ts       # Funções auxiliares / Funciones auxiliares / Helper functions`,
        explanation: {
          'pt-BR': [
            'main/ - Código que acessa a API do Figma',
            'ui/ - Interface React do plugin',
            'services/ - Lógica de negócio (auth, API calls)',
            'config/ - Configurações centralizadas',
            'theme/ - Sistema de cores e estilos',
            'utils/ - Funções auxiliares reutilizáveis',
          ],
          'es': [
            'main/ - Código que accede a la API de Figma',
            'ui/ - Interfaz React del plugin',
            'services/ - Lógica de negocio (auth, llamadas API)',
            'config/ - Configuraciones centralizadas',
            'theme/ - Sistema de colores y estilos',
            'utils/ - Funciones auxiliares reutilizables',
          ],
          'en': [
            'main/ - Code that accesses Figma API',
            'ui/ - React interface of the plugin',
            'services/ - Business logic (auth, API calls)',
            'config/ - Centralized configurations',
            'theme/ - Color and style system',
            'utils/ - Reusable helper functions',
          ],
        },
      },
      {
        id: 'first-plugin',
        title: {
          'pt-BR': 'Seu Primeiro Plugin',
          'es': 'Tu Primer Plugin',
          'en': 'Your First Plugin'
        },
        description: {
          'pt-BR': 'Crie sua primeira funcionalidade',
          'es': 'Crea tu primera funcionalidad',
          'en': 'Create your first feature'
        },
        code: `// 1. Adicione handler no Main (src/main/index.ts)
// 1. Añade handler en Main (src/main/index.ts)
// 1. Add handler in Main (src/main/index.ts)
onMessage({
  'hello-world': () => {
    const text = figma.createText()
    text.characters = 'Hello World!'
    figma.currentPage.appendChild(text)
    notify('✅ Texto criado!' / 'Texto creado!' / 'Text created!')
  }
})

// 2. Chame da UI (src/ui/App.tsx)
// 2. Llama desde la UI (src/ui/App.tsx)
// 2. Call from UI (src/ui/App.tsx)
function App() {
  const handleClick = () => {
    sendToPlugin({
      type: 'hello-world'
    })
  }

  return <button onClick={handleClick}>Hello World</button>
}`,
        explanation: {
          'pt-BR': [
            'Main (index.ts) tem acesso à API do Figma',
            'UI (App.tsx) renderiza a interface',
            'Comunicação via sendToPlugin() e onMessage()',
            'Use notify() para feedback ao usuário',
          ],
          'es': [
            'Main (index.ts) tiene acceso a la API de Figma',
            'UI (App.tsx) renderiza la interfaz',
            'Comunicación vía sendToPlugin() y onMessage()',
            'Usa notify() para feedback al usuario',
          ],
          'en': [
            'Main (index.ts) has access to Figma API',
            'UI (App.tsx) renders the interface',
            'Communication via sendToPlugin() and onMessage()',
            'Use notify() for user feedback',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'sendToPlugin()',
              'es': 'sendToPlugin()',
              'en': 'sendToPlugin()'
            },
            tutorialId: 'send-to-plugin'
          },
          {
            title: {
              'pt-BR': 'onMessage()',
              'es': 'onMessage()',
              'en': 'onMessage()'
            },
            tutorialId: 'on-message'
          },
        ],
      },
    ],
  },

  // 🔧 HELPERS & COMUNICAÇÃO
  {
    id: 'helpers',
    icon: '🔧',
    title: {
      'pt-BR': 'Helpers & Comunicação',
      'es': 'Helpers & Comunicación',
      'en': 'Helpers & Communication'
    },
    tutorials: [
      {
        id: 'send-to-plugin',
        title: {
          'pt-BR': 'sendToPlugin()',
          'es': 'sendToPlugin()',
          'en': 'sendToPlugin()'
        },
        description: {
          'pt-BR': 'Envia mensagens tipadas da UI para o Main',
          'es': 'Envía mensajes tipados desde la UI al Main',
          'en': 'Send typed messages from UI to Main'
        },
        code: `// UI Component (React)
import { sendToPlugin } from '../utils/helpers'

function App() {
  const handleCreate = () => {
    sendToPlugin({
      type: 'create-rectangles',
      count: 5,
      color: 'blue'
    })
  }

  return (
    <button onClick={handleCreate}>
      Criar Retângulos / Crear Rectángulos / Create Rectangles
    </button>
  )
}`,
        explanation: {
          'pt-BR': [
            'sendToPlugin() envia mensagens type-safe',
            'A mensagem é recebida pelo Main thread',
            'Use Discriminated Unions para type safety',
            'Mensagens são assíncronas (não retornam valor diretamente)',
          ],
          'es': [
            'sendToPlugin() envía mensajes type-safe',
            'El mensaje es recibido por el Main thread',
            'Usa Discriminated Unions para type safety',
            'Mensajes son asíncronos (no retornan valor directamente)',
          ],
          'en': [
            'sendToPlugin() sends type-safe messages',
            'Message is received by Main thread',
            'Use Discriminated Unions for type safety',
            'Messages are asynchronous (don\'t return value directly)',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'onMessage()',
              'es': 'onMessage()',
              'en': 'onMessage()'
            },
            tutorialId: 'on-message'
          },
          {
            title: {
              'pt-BR': 'Adicionar novo tipo de mensagem',
              'es': 'Añadir nuevo tipo de mensaje',
              'en': 'Add new message type'
            },
            tutorialId: 'add-message-type'
          },
        ],
      },
      {
        id: 'on-message',
        title: {
          'pt-BR': 'onMessage()',
          'es': 'onMessage()',
          'en': 'onMessage()'
        },
        description: {
          'pt-BR': 'Recebe mensagens no Main thread',
          'es': 'Recibe mensajes en el Main thread',
          'en': 'Receive messages in Main thread'
        },
        code: `// Main thread (src/main/index.ts)
import { onMessage, notify } from '../utils/helpers'

export default function () {
  figma.showUI(__html__, { width: 500, height: 700 })

  onMessage({
    'create-rectangles': (msg) => {
      const nodes: SceneNode[] = []

      for (let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle()
        rect.resize(100, 100)
        rect.x = (i % 5) * 120
        rect.y = Math.floor(i / 5) * 120

        // Definir cor / Definir color / Set color
        const colors = {
          orange: { r: 1, g: 0.5, b: 0 },
          blue: { r: 0.2, g: 0.5, b: 1 },
          red: { r: 1, g: 0.2, b: 0.2 },
          green: { r: 0.2, g: 0.8, b: 0.4 },
        }
        rect.fills = [{
          type: 'SOLID',
          color: colors[msg.color]
        }]

        figma.currentPage.appendChild(rect)
        nodes.push(rect)
      }

      figma.currentPage.selection = nodes
      figma.viewport.scrollAndZoomIntoView(nodes)
      notify(\`✅ \${msg.count} retângulo(s) criado(s)!\`)
    }
  })
}`,
        explanation: {
          'pt-BR': [
            'onMessage() registra handlers para mensagens',
            'Cada handler recebe a mensagem tipada',
            'Você tem acesso completo à API do Figma',
            'Use notify() para dar feedback ao usuário',
          ],
          'es': [
            'onMessage() registra handlers para mensajes',
            'Cada handler recibe el mensaje tipado',
            'Tienes acceso completo a la API de Figma',
            'Usa notify() para dar feedback al usuario',
          ],
          'en': [
            'onMessage() registers handlers for messages',
            'Each handler receives typed message',
            'You have full access to Figma API',
            'Use notify() for user feedback',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'sendToPlugin()',
              'es': 'sendToPlugin()',
              'en': 'sendToPlugin()'
            },
            tutorialId: 'send-to-plugin'
          },
          {
            title: {
              'pt-BR': 'notify()',
              'es': 'notify()',
              'en': 'notify()'
            },
            tutorialId: 'notify'
          },
        ],
      },
      {
        id: 'notify',
        title: {
          'pt-BR': 'notify()',
          'es': 'notify()',
          'en': 'notify()'
        },
        description: {
          'pt-BR': 'Mostra notificações no Figma',
          'es': 'Muestra notificaciones en Figma',
          'en': 'Show notifications in Figma'
        },
        code: `import { notify } from '../utils/helpers'

// Notificação simples / Notificación simple / Simple notification
notify('✅ Operação concluída!' / 'Operación completada!' / 'Operation completed!')

// Notificação com erro / Notificación con error / Error notification
notify('❌ Algo deu errado' / 'Algo salió mal' / 'Something went wrong', { error: true })

// Notificação com timeout customizado / Notificación con timeout personalizado / Notification with custom timeout
notify('⏳ Processando...' / 'Procesando...' / 'Processing...', { timeout: 5000 })`,
        explanation: {
          'pt-BR': [
            'notify() mostra notificações toast no Figma',
            'Use emojis para tornar mensagens mais claras',
            'error: true mostra notificação vermelha',
            'timeout define quanto tempo a notificação fica visível',
          ],
          'es': [
            'notify() muestra notificaciones toast en Figma',
            'Usa emojis para hacer mensajes más claros',
            'error: true muestra notificación roja',
            'timeout define cuánto tiempo la notificación es visible',
          ],
          'en': [
            'notify() shows toast notifications in Figma',
            'Use emojis to make messages clearer',
            'error: true shows red notification',
            'timeout defines how long notification stays visible',
          ],
        },
      },
      {
        id: 'add-message-type',
        title: {
          'pt-BR': 'Adicionar Novo Tipo de Mensagem',
          'es': 'Añadir Nuevo Tipo de Mensaje',
          'en': 'Add New Message Type'
        },
        description: {
          'pt-BR': 'Como estender o sistema de mensagens',
          'es': 'Cómo extender el sistema de mensajes',
          'en': 'How to extend the message system'
        },
        code: `// 1. Defina o tipo em src/utils/helpers.ts
// 1. Define el tipo en src/utils/helpers.ts
// 1. Define the type in src/utils/helpers.ts
export type CreateRectanglesMessage = {
  type: 'create-rectangles'
  count: number
  color: 'orange' | 'blue' | 'red' | 'green'
}

// 2. Adicione seu novo tipo / Añade tu nuevo tipo / Add your new type
export type DeleteSelectionMessage = {
  type: 'delete-selection'
}

// 3. Adicione à union / Añade a la union / Add to union
export type PluginMessage =
  | CreateRectanglesMessage
  | DeleteSelectionMessage  // ← Novo tipo / Nuevo tipo / New type

// 4. Use na UI / Usa en la UI / Use in UI
sendToPlugin({ type: 'delete-selection' })

// 5. Adicione handler no Main / Añade handler en Main / Add handler in Main
onMessage({
  'delete-selection': () => {
    figma.currentPage.selection.forEach(node => {
      node.remove()
    })
    notify('🗑️ Seleção deletada!' / '¡Selección eliminada!' / 'Selection deleted!')
  }
})`,
        explanation: {
          'pt-BR': [
            'Discriminated Unions garantem type safety',
            'TypeScript valida em compile-time',
            'Autocomplete funciona perfeitamente',
            'Impossível enviar mensagens inválidas',
          ],
          'es': [
            'Discriminated Unions garantizan type safety',
            'TypeScript valida en compile-time',
            'Autocomplete funciona perfectamente',
            'Imposible enviar mensajes inválidos',
          ],
          'en': [
            'Discriminated Unions guarantee type safety',
            'TypeScript validates at compile-time',
            'Autocomplete works perfectly',
            'Impossible to send invalid messages',
          ],
        },
      },
    ],
  },

  // 🔐 AUTENTICAÇÃO / AUTENTICACIÓN / AUTHENTICATION
  {
    id: 'authentication',
    icon: '🔐',
    title: {
      'pt-BR': 'Autenticação',
      'es': 'Autenticación',
      'en': 'Authentication'
    },
    tutorials: [
      {
        id: 'configure-api',
        title: {
          'pt-BR': 'Configurar API Backend',
          'es': 'Configurar API Backend',
          'en': 'Configure Backend API'
        },
        description: {
          'pt-BR': 'Como conectar o plugin à sua API',
          'es': 'Cómo conectar el plugin a tu API',
          'en': 'How to connect the plugin to your API'
        },
        code: `// src/config/api.config.ts
export const API_CONFIG = {
  BASE_URL: 'https://sua-api.com',  // ← Altere aqui / Cambia aquí / Change here
  ENDPOINTS: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    VALIDATE: '/auth/validate',
  }
}

// Também configure no manifest.json / También configura en manifest.json / Also configure in manifest.json
{
  "networkAccess": {
    "allowedDomains": [
      "https://sua-api.com"  // ← Mesma URL / Misma URL / Same URL
    ]
  }
}`,
        explanation: {
          'pt-BR': [
            'Configure BASE_URL com sua API real',
            'Adicione o domínio em manifest.json',
            'Endpoints podem ser customizados',
            'Use HTTPS em produção (obrigatório)',
          ],
          'es': [
            'Configura BASE_URL con tu API real',
            'Añade el dominio en manifest.json',
            'Endpoints pueden ser personalizados',
            'Usa HTTPS en producción (obligatorio)',
          ],
          'en': [
            'Configure BASE_URL with your real API',
            'Add domain in manifest.json',
            'Endpoints can be customized',
            'Use HTTPS in production (mandatory)',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'Sistema de Login',
              'es': 'Sistema de Login',
              'en': 'Login System'
            },
            tutorialId: 'login-system'
          },
          {
            title: {
              'pt-BR': 'Gerenciar Tokens',
              'es': 'Administrar Tokens',
              'en': 'Manage Tokens'
            },
            tutorialId: 'token-management'
          },
        ],
      },
      {
        id: 'login-system',
        title: {
          'pt-BR': 'Sistema de Login',
          'es': 'Sistema de Login',
          'en': 'Login System'
        },
        description: {
          'pt-BR': 'Como funciona o login integrado',
          'es': 'Cómo funciona el login integrado',
          'en': 'How integrated login works'
        },
        code: `// Usando o serviço de autenticação / Usando el servicio de autenticación / Using authentication service
import { login, getCurrentUser } from '../services/auth.service'

// Fazer login / Hacer login / Login
const response = await login('user@email.com', 'password123')

if (response.success && response.user) {
  console.log('Usuário logado:' / 'Usuario logueado:' / 'User logged in:', response.user)
  // { id: '123', name: 'João', email: 'user@email.com' }
} else {
  console.error('Erro:' / 'Error:' / 'Error:', response.error)
}

// Obter usuário atual / Obtener usuario actual / Get current user
const user = await getCurrentUser()
if (user) {
  console.log('Logado como:' / 'Logueado como:' / 'Logged in as:', user.name)
}`,
        explanation: {
          'pt-BR': [
            'login() faz a requisição para sua API',
            'Token é salvo automaticamente no figma.clientStorage',
            'Token expira em 7 dias',
            'getCurrentUser() retorna dados do usuário logado',
          ],
          'es': [
            'login() hace la petición a tu API',
            'Token se guarda automáticamente en figma.clientStorage',
            'Token expira en 7 días',
            'getCurrentUser() retorna datos del usuario logueado',
          ],
          'en': [
            'login() makes request to your API',
            'Token is automatically saved in figma.clientStorage',
            'Token expires in 7 days',
            'getCurrentUser() returns logged user data',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'Registro de Usuários',
              'es': 'Registro de Usuarios',
              'en': 'User Registration'
            },
            tutorialId: 'register-users'
          },
          {
            title: {
              'pt-BR': 'Gerenciar Tokens',
              'es': 'Administrar Tokens',
              'en': 'Manage Tokens'
            },
            tutorialId: 'token-management'
          },
        ],
      },
      {
        id: 'register-users',
        title: {
          'pt-BR': 'Registro de Usuários',
          'es': 'Registro de Usuarios',
          'en': 'User Registration'
        },
        description: {
          'pt-BR': 'Como registrar novos usuários',
          'es': 'Cómo registrar nuevos usuarios',
          'en': 'How to register new users'
        },
        code: `import { register } from '../services/auth.service'

// Registrar novo usuário / Registrar nuevo usuario / Register new user
const response = await register(
  'João Silva',           // nome / nombre / name
  'joao@email.com',       // email
  'senha123'              // senha / contraseña / password
)

if (response.success && response.user) {
  console.log('Conta criada:' / 'Cuenta creada:' / 'Account created:', response.user)
  // Login automático após registro / Login automático después del registro / Automatic login after registration
} else {
  console.error('Erro:' / 'Error:' / 'Error:', response.error)
}`,
        explanation: {
          'pt-BR': [
            'register() cria a conta na sua API',
            'Login acontece automaticamente após registro',
            'Token é salvo no figma.clientStorage',
            'Validações de email e senha são feitas automaticamente',
          ],
          'es': [
            'register() crea la cuenta en tu API',
            'Login ocurre automáticamente después del registro',
            'Token se guarda en figma.clientStorage',
            'Validaciones de email y contraseña se hacen automáticamente',
          ],
          'en': [
            'register() creates account in your API',
            'Login happens automatically after registration',
            'Token is saved in figma.clientStorage',
            'Email and password validations are done automatically',
          ],
        },
      },
      {
        id: 'token-management',
        title: {
          'pt-BR': 'Gerenciar Tokens JWT',
          'es': 'Administrar Tokens JWT',
          'en': 'Manage JWT Tokens'
        },
        description: {
          'pt-BR': 'Como funcionam os tokens de autenticação',
          'es': 'Cómo funcionan los tokens de autenticación',
          'en': 'How authentication tokens work'
        },
        code: `import {
  getToken,
  isAuthenticated,
  validateToken,
  logout
} from '../services/auth.service'

// Verificar se está autenticado / Verificar si está autenticado / Check if authenticated
const isAuth = await isAuthenticated()
console.log('Autenticado?' / 'Autenticado?' / 'Authenticated?', isAuth)

// Obter token (para requisições) / Obtener token (para peticiones) / Get token (for requests)
const token = await getToken()
console.log('Token:', token)

// Validar token com servidor / Validar token con servidor / Validate token with server
const isValid = await validateToken()
if (!isValid) {
  console.log('Token expirado ou inválido' / 'Token expirado o inválido' / 'Token expired or invalid')
  await logout()
}

// Fazer requisição autenticada / Hacer petición autenticada / Make authenticated request
import { authenticatedFetch } from '../services/auth.service'

const response = await authenticatedFetch('/api/user/profile', {
  method: 'GET'
})`,
        explanation: {
          'pt-BR': [
            'Token expira automaticamente em 7 dias',
            'isAuthenticated() verifica se token é válido',
            'validateToken() valida com o servidor',
            'authenticatedFetch() adiciona token automaticamente',
          ],
          'es': [
            'Token expira automáticamente en 7 días',
            'isAuthenticated() verifica si token es válido',
            'validateToken() valida con el servidor',
            'authenticatedFetch() añade token automáticamente',
          ],
          'en': [
            'Token expires automatically in 7 days',
            'isAuthenticated() checks if token is valid',
            'validateToken() validates with server',
            'authenticatedFetch() adds token automatically',
          ],
        },
      },
    ],
  },

  // 🌍 INTERNACIONALIZAÇÃO / INTERNACIONALIZACIÓN / INTERNATIONALIZATION
  {
    id: 'i18n',
    icon: '🌍',
    title: {
      'pt-BR': 'Internacionalização',
      'es': 'Internacionalización',
      'en': 'Internationalization'
    },
    tutorials: [
      {
        id: 'add-language',
        title: {
          'pt-BR': 'Adicionar Novo Idioma',
          'es': 'Añadir Nuevo Idioma',
          'en': 'Add New Language'
        },
        description: {
          'pt-BR': 'Como adicionar suporte a novos idiomas',
          'es': 'Cómo añadir soporte a nuevos idiomas',
          'en': 'How to add support for new languages'
        },
        code: `// src/config/i18n.config.ts

// 1. Adicione o código do idioma / Añade el código del idioma / Add language code
export type Language = 'pt-BR' | 'es' | 'en' | 'fr'  // ← Francês / Francés / French

// 2. Adicione as traduções / Añade las traducciones / Add translations
export const translations: Record<Language, Translations> = {
  'pt-BR': { /* ... */ },
  'es': { /* ... */ },
  'en': { /* ... */ },
  'fr': {  // ← Novo idioma / Nuevo idioma / New language
    createRectangles: 'Créer des Rectangles',
    quantity: 'Quantité',
    rectangleColor: 'Couleur du Rectangle',
    createButton: 'Créer',
    orange: 'Orange',
    blue: 'Bleu',
    red: 'Rouge',
    green: 'Vert',
    // ... demais traduções / demás traducciones / other translations
  }
}

// 3. Adicione à lista de opções / Añade a la lista de opciones / Add to options list
export const languageOptions: LanguageOption[] = [
  { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },  // ← Novo / Nuevo / New
]`,
        explanation: {
          'pt-BR': [
            'Adicione o código do idioma no tipo Language',
            'Traduza todas as strings do objeto Translations',
            'Adicione opção em languageOptions com bandeira',
            'O seletor de idioma aparece automaticamente',
          ],
          'es': [
            'Añade el código del idioma en el tipo Language',
            'Traduce todas las strings del objeto Translations',
            'Añade opción en languageOptions con bandera',
            'El selector de idioma aparece automáticamente',
          ],
          'en': [
            'Add language code in Language type',
            'Translate all strings in Translations object',
            'Add option in languageOptions with flag',
            'Language selector appears automatically',
          ],
        },
      },
      {
        id: 'manage-translations',
        title: {
          'pt-BR': 'Gerenciar Traduções',
          'es': 'Administrar Traducciones',
          'en': 'Manage Translations'
        },
        description: {
          'pt-BR': 'Como usar traduções nos componentes',
          'es': 'Cómo usar traducciones en los componentes',
          'en': 'How to use translations in components'
        },
        code: `// Em qualquer componente / En cualquier componente / In any component
import { translations, Language } from '../config/i18n.config'

function MyComponent({ currentLanguage }: { currentLanguage: Language }) {
  // Obter traduções do idioma atual / Obtener traducciones del idioma actual / Get current language translations
  const t = translations[currentLanguage]

  return (
    <div>
      <h1>{t.createRectangles}</h1>
      <p>{t.quantity}</p>
      <button>{t.createButton}</button>
    </div>
  )
}

// Adicionar nova tradução / Añadir nueva traducción / Add new translation
// 1. Adicione em Translations interface / Añade en Translations interface / Add in Translations interface
export interface Translations {
  createRectangles: string
  quantity: string
  newFeature: string  // ← Nova tradução / Nueva traducción / New translation
}

// 2. Adicione em todos os idiomas / Añade en todos los idiomas / Add in all languages
'pt-BR': {
  // ...
  newFeature: 'Nova Funcionalidade'
},
'es': {
  // ...
  newFeature: 'Nueva Característica'
},
'en': {
  // ...
  newFeature: 'New Feature'
}`,
        explanation: {
          'pt-BR': [
            'Use translations[currentLanguage] para obter traduções',
            'Defina a interface Translations para type safety',
            'TypeScript valida que todos idiomas têm as mesmas chaves',
            'Autocomplete funciona perfeitamente',
          ],
          'es': [
            'Usa translations[currentLanguage] para obtener traducciones',
            'Define la interface Translations para type safety',
            'TypeScript valida que todos idiomas tienen las mismas claves',
            'Autocomplete funciona perfectamente',
          ],
          'en': [
            'Use translations[currentLanguage] to get translations',
            'Define Translations interface for type safety',
            'TypeScript validates all languages have same keys',
            'Autocomplete works perfectly',
          ],
        },
      },
    ],
  },

  // 🎨 TEMAS & ESTILOS / TEMAS & ESTILOS / THEMES & STYLES
  {
    id: 'themes',
    icon: '🎨',
    title: {
      'pt-BR': 'Temas & Estilos',
      'es': 'Temas & Estilos',
      'en': 'Themes & Styles'
    },
    tutorials: [
      {
        id: 'theme-system',
        title: {
          'pt-BR': 'Sistema de Theme',
          'es': 'Sistema de Tema',
          'en': 'Theme System'
        },
        description: {
          'pt-BR': 'Como usar o sistema de theme centralizado',
          'es': 'Cómo usar el sistema de tema centralizado',
          'en': 'How to use centralized theme system'
        },
        code: `// Importar theme / Importar tema / Import theme
import { createTheme } from '../theme/theme'

function MyComponent({ isDarkMode }: { isDarkMode: boolean }) {
  // Obter theme / Obtener tema / Get theme
  const theme = createTheme(isDarkMode)

  return (
    <div style={{
      backgroundColor: theme.colors.bg,
      color: theme.colors.text,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.md,
      fontSize: theme.fontSize.md,
    }}>
      <input style={{
        backgroundColor: theme.colors.inputBg,
        border: \`1px solid \${theme.colors.inputBorder}\`,
        padding: theme.spacing.sm,
      }} />
    </div>
  )
}`,
        explanation: {
          'pt-BR': [
            'createTheme() gera todas as cores e estilos',
            'Single source of truth para design',
            'Fácil customizar toda a aparência',
            'Dark/Light mode automático',
          ],
          'es': [
            'createTheme() genera todos los colores y estilos',
            'Single source of truth para diseño',
            'Fácil personalizar toda la apariencia',
            'Dark/Light mode automático',
          ],
          'en': [
            'createTheme() generates all colors and styles',
            'Single source of truth for design',
            'Easy to customize entire appearance',
            'Automatic Dark/Light mode',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'Customizar Cores',
              'es': 'Personalizar Colores',
              'en': 'Customize Colors'
            },
            tutorialId: 'customize-colors'
          },
        ],
      },
      {
        id: 'customize-colors',
        title: {
          'pt-BR': 'Customizar Cores',
          'es': 'Personalizar Colores',
          'en': 'Customize Colors'
        },
        description: {
          'pt-BR': 'Como alterar as cores do plugin',
          'es': 'Cómo cambiar los colores del plugin',
          'en': 'How to change plugin colors'
        },
        code: `// src/theme/theme.ts
export function createTheme(isDarkMode: boolean): Theme {
  return {
    colors: {
      // Personalize aqui! / ¡Personaliza aquí! / Customize here! ↓
      bg: isDarkMode ? '#1a1a1a' : '#fafafa',
      text: isDarkMode ? '#e0e0e0' : '#111111',
      primary: isDarkMode ? '#ff6b35' : '#ff4500',

      // Seus próprios tokens / Tus propios tokens / Your own tokens
      inputBg: isDarkMode ? '#2a2a2a' : '#f0f0f0',
      inputBorder: isDarkMode ? '#3a3a3a' : '#d0d0d0',
      labelText: isDarkMode ? '#a0a0a0' : '#606060',
      error: '#ff4444',
      success: '#4caf50',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    // ... mais customizações / más personalizaciones / more customizations
  }
}`,
        explanation: {
          'pt-BR': [
            'Altere as cores em createTheme()',
            'Mudanças aplicam em todo o plugin automaticamente',
            'Mantenha consistência entre Dark e Light mode',
            'Use tokens semânticos (primary, error, success)',
          ],
          'es': [
            'Cambia los colores en createTheme()',
            'Cambios aplican en todo el plugin automáticamente',
            'Mantén consistencia entre Dark y Light mode',
            'Usa tokens semánticos (primary, error, success)',
          ],
          'en': [
            'Change colors in createTheme()',
            'Changes apply to entire plugin automatically',
            'Maintain consistency between Dark and Light mode',
            'Use semantic tokens (primary, error, success)',
          ],
        },
      },
    ],
  },

  // 💰 MONETIZAÇÃO / MONETIZACIÓN / MONETIZATION
  {
    id: 'monetization',
    icon: '💰',
    title: {
      'pt-BR': 'Monetização',
      'es': 'Monetización',
      'en': 'Monetization'
    },
    tutorials: [
      {
        id: 'upgrade-waitlist',
        title: {
          'pt-BR': 'Configurar Upgrade/Waitlist',
          'es': 'Configurar Upgrade/Waitlist',
          'en': 'Configure Upgrade/Waitlist'
        },
        description: {
          'pt-BR': 'Como configurar o sistema de upgrade',
          'es': 'Cómo configurar el sistema de upgrade',
          'en': 'How to configure upgrade system'
        },
        code: `// src/config/upgrade.config.ts
export const UPGRADE_CONFIG = {
  // URL do formulário de waitlist (Tally, Typeform, etc) / URL del formulario de waitlist / Waitlist form URL
  WAITLIST_FORM_URL: 'https://tally.so/r/seu-formulario',

  // Email de contato / Email de contacto / Contact email
  CONTACT_EMAIL: 'contato@seuplugin.com',

  // Features da versão Pro / Features de la versión Pro / Pro version features
  PRO_FEATURES: [
    '🚀 Funcionalidade Premium 1' / 'Funcionalidad Premium 1' / 'Premium Feature 1',
    '💎 Funcionalidade Premium 2' / 'Funcionalidad Premium 2' / 'Premium Feature 2',
    '⚡ Funcionalidade Premium 3' / 'Funcionalidad Premium 3' / 'Premium Feature 3',
    '🎨 Funcionalidade Premium 4' / 'Funcionalidad Premium 4' / 'Premium Feature 4',
    '🔥 Funcionalidade Premium 5' / 'Funcionalidad Premium 5' / 'Premium Feature 5',
  ]
}`,
        explanation: {
          'pt-BR': [
            'Configure URL do formulário de waitlist',
            'Adicione suas features premium',
            'Tela de Upgrade aparece ao clicar no botão ⭐',
            'Fácil integrar com Stripe, Gumroad, etc depois',
          ],
          'es': [
            'Configura URL del formulario de waitlist',
            'Añade tus features premium',
            'Pantalla de Upgrade aparece al hacer clic en el botón ⭐',
            'Fácil integrar con Stripe, Gumroad, etc después',
          ],
          'en': [
            'Configure waitlist form URL',
            'Add your premium features',
            'Upgrade screen appears when clicking ⭐ button',
            'Easy to integrate with Stripe, Gumroad, etc later',
          ],
        },
        relatedLinks: [
          {
            title: {
              'pt-BR': 'Integrar Pagamentos',
              'es': 'Integrar Pagos',
              'en': 'Integrate Payments'
            },
            tutorialId: 'integrate-payments'
          },
        ],
      },
      {
        id: 'integrate-payments',
        title: {
          'pt-BR': 'Integrar Pagamentos',
          'es': 'Integrar Pagos',
          'en': 'Integrate Payments'
        },
        description: {
          'pt-BR': 'Como adicionar sistema de pagamento',
          'es': 'Cómo añadir sistema de pago',
          'en': 'How to add payment system'
        },
        code: `// Exemplo com Stripe Checkout / Ejemplo con Stripe Checkout / Example with Stripe Checkout
import { authenticatedFetch } from '../services/auth.service'

async function handleUpgrade() {
  // 1. Criar checkout session no backend / Crear checkout session en backend / Create checkout session in backend
  const response = await authenticatedFetch('/create-checkout', {
    method: 'POST',
    body: JSON.stringify({
      priceId: 'price_xxx',  // Stripe Price ID
      returnUrl: 'figma://plugin/upgrade-success'
    })
  })

  const { checkoutUrl } = await response.json()

  // 2. Abrir URL de pagamento / Abrir URL de pago / Open payment URL
  window.open(checkoutUrl, '_blank')
}

// 3. Verificar status do pagamento / Verificar estado del pago / Check payment status
async function checkSubscription() {
  const response = await authenticatedFetch('/subscription/status')
  const { isPro } = await response.json()

  return isPro
}`,
        explanation: {
          'pt-BR': [
            'Backend cria Stripe Checkout Session',
            'Plugin abre URL de pagamento',
            'Webhook do Stripe atualiza status no backend',
            'Plugin verifica status via API',
          ],
          'es': [
            'Backend crea Stripe Checkout Session',
            'Plugin abre URL de pago',
            'Webhook de Stripe actualiza estado en backend',
            'Plugin verifica estado vía API',
          ],
          'en': [
            'Backend creates Stripe Checkout Session',
            'Plugin opens payment URL',
            'Stripe Webhook updates status in backend',
            'Plugin checks status via API',
          ],
        },
      },
    ],
  },
]
