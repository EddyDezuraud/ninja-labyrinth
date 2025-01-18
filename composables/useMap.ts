interface PlayerData {
  direction: 'up' | 'down' | 'left' | 'right'
  isMoving: boolean
  position: {
    x: number
    y: number
  }
}

export function useMap(grid: string[]) {
  const map = reactive({
    width: 4000,
    height: 4000,
  })

  const player = reactive<PlayerData>({
    direction: 'down',
    isMoving: false,
    position: initPlayerPosition(),
  })

  const keysPressed = new Set<string>()

  function initPlayerPosition() {
    const position = localStorage.getItem('playerPosition')

    if (position) {
      const parsed = JSON.parse(position)
      return {
        x: Number(parsed.x),
        y: Number(parsed.y),
      }
    }

    return {
      x: 1875,
      y: 3650,
    }
  }

  const savePlayerPosition = () => {
    localStorage.setItem('playerPosition', JSON.stringify(player.position))
  }

  const getTileId = (x: number, y: number) => {
    const mapWidthInTiles = 40
    const playerSize = 150

    const tileX = Math.floor((x + playerSize / 2) / 100)
    const tileY = Math.floor((y + playerSize / 2) / 100)

    const tileId = tileY * mapWidthInTiles + tileX

    return grid?.[tileId] ?? null
  }

  const movePlayer = (dx: number, dy: number) => {
    const newX = player.position.x + dx
    const newY = player.position.y + dy
    const tileId = getTileId(newX, newY)

    if (tileId === EXIT_PORTAL) {
      // TODO switch level management
      player.isMoving = false
      keysPressed.clear()
      window.removeEventListener('keydown', keydownHandler)
    } else if (!BLOCKED_TILE_IDS.includes(tileId)) {
      player.position.x = newX
      player.position.y = newY
    }

    savePlayerPosition()
  }

  const updateMovement = () => {
    if (keysPressed.has('z')) {
      player.direction = 'up'
      movePlayer(0, -25)
    }
    if (keysPressed.has('q')) {
      player.direction = 'left'
      movePlayer(-25, 0)
    }
    if (keysPressed.has('s')) {
      player.direction = 'down'
      movePlayer(0, 25)
    }
    if (keysPressed.has('d')) {
      player.direction = 'right'
      movePlayer(25, 0)
    }
  }

  const keydownHandler = (event: KeyboardEvent) => {
    if (['z', 'q', 's', 'd'].includes(event.key)) {
      player.isMoving = true
      keysPressed.add(event.key)
    }
  }

  const keyupHandler = (event: KeyboardEvent) => {
    if (['z', 'q', 's', 'd'].includes(event.key)) {
      keysPressed.delete(event.key)

      if (keysPressed.size === 0) {
        player.isMoving = false
      }
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', keydownHandler)
    window.addEventListener('keyup', keyupHandler)

    setInterval(() => {
      updateMovement()
    }, 100)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', keydownHandler)
    window.removeEventListener('keyup', keyupHandler)
  })

  return {
    map: readonly(map),
    player: readonly(player),
    getTileId,
    movePlayer,
  }
}
