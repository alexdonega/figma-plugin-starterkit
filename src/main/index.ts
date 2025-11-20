import { onMessage, notify } from '../utils/helpers'

export default function () {
  figma.showUI(__html__, {
    width: 500,
    height: 700,
    themeColors: true,
  })

  const colors: { [key: string]: RGB } = {
    orange: { r: 1, g: 0.5, b: 0 },
    blue: { r: 0.2, g: 0.5, b: 1 },
    red: { r: 1, g: 0.2, b: 0.2 },
    green: { r: 0.2, g: 0.8, b: 0.4 },
  }

  onMessage({
    'create-rectangles': (msg) => {
      const nodes: SceneNode[] = []
      const selectedColor = colors[msg.color] || colors.orange

      for (let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle()
        rect.resize(100, 100)
        rect.x = (i % 5) * 120
        rect.y = Math.floor(i / 5) * 120
        rect.fills = [{ type: 'SOLID', color: selectedColor }]
        rect.cornerRadius = 8
        figma.currentPage.appendChild(rect)
        nodes.push(rect)
      }

      figma.currentPage.selection = nodes
      figma.viewport.scrollAndZoomIntoView(nodes)
      notify(`✅ ${msg.count} retângulo(s) criado(s)!`)
    },
  })
}
