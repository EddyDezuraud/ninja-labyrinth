export interface Level {
  grid: string[]
  hasTraps: boolean
  playerStartAt: {
    x: number
    y: number
  }
  trapToggleDelay: number
}

export interface PlayerData {
  direction: 'up' | 'down' | 'left' | 'right'
  isMoving: boolean
  keysPressed: Set<string>
  position: {
    x: number
    y: number
  }
  showInteractButton: boolean
}

export interface MapData {
  width: number
  height: number
  isExitOpen: boolean
  isEnd: boolean
}

export function useGameEngine(level: Level) {
  const map = reactive({
    width: 4000,
    height: 4000,
    grid: level.grid,
    isExitOpen: false,
    isEnd: false,
    isTrapActive: false,
  })

  const player = reactive<PlayerData>({
    direction: 'down',
    isMoving: false,
    keysPressed: new Set<string>(),
    position: {
      x: level.playerStartAt.x,
      y: level.playerStartAt.y,
    },
    showInteractButton: false,
  })

  const getTileId = (x: number, y: number) => {
    const mapWidthInTiles = 40
    const playerSize = 150

    const tileX = Math.floor((x + playerSize / 2) / 100)
    const tileY = Math.floor((y + playerSize / 2) / 100)

    const tileId = tileY * mapWidthInTiles + tileX

    return level.grid?.[tileId] ?? null
  }

  const movePlayer = (dx: number, dy: number) => {
    const newX = player.position.x + dx
    const newY = player.position.y + dy
    const targetTileId = getTileId(newX, newY)
    const currentTileId = getTileId(player.position.x, player.position.y)

    if (INTERACTIVE_TILES.includes(currentTileId)) {
      player.showInteractButton = true
    } else {
      player.showInteractButton = false
    }

    if (targetTileId === EXIT_PORTAL && map.isExitOpen) {
      // TODO switch level management
      player.isMoving = false
      map.isEnd = true
      player.keysPressed.clear()
      window.removeEventListener('keydown', keydownHandler)
    } else if (!BLOCKED_TILE_IDS.includes(targetTileId)) {
      player.position.x = newX
      player.position.y = newY
    }
  }

  let elapsedTime = 0

  const updateMovement = () => {
    elapsedTime += 100

    if (player.keysPressed.has('z')) {
      player.direction = 'up'
      movePlayer(0, -25)
    }

    if (player.keysPressed.has('q')) {
      player.direction = 'left'
      movePlayer(-25, 0)
    }

    if (player.keysPressed.has('s')) {
      player.direction = 'down'
      movePlayer(0, 25)
    }

    if (player.keysPressed.has('d')) {
      player.direction = 'right'
      movePlayer(25, 0)
    }

    if (!map.isEnd && level.hasTraps && elapsedTime >= level.trapToggleDelay) {
      map.isTrapActive = !map.isTrapActive
      elapsedTime = 0
    }
  }

  const checkInteraction = () => {
    const tileId = getTileId(player.position.x, player.position.y)

    if (tileId === EXIT_ACTIVATION_SWITCH && !map.isExitOpen) {
      map.isExitOpen = true
    }
  }

  const keydownHandler = (event: KeyboardEvent) => {
    if (['z', 'q', 's', 'd'].includes(event.key)) {
      player.isMoving = true
      player.keysPressed.add(event.key)
    }

    if (event.key === 'e') {
      checkInteraction()
    }
  }

  const keyupHandler = (event: KeyboardEvent) => {
    if (['z', 'q', 's', 'd'].includes(event.key)) {
      player.keysPressed.delete(event.key)

      if (player.keysPressed.size === 0) {
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
