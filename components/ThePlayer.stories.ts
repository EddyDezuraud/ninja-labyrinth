import type { Meta, StoryObj } from '@storybook/vue3'
import ThePlayer from './ThePlayer.vue'

const meta = {
  title: 'Components/ThePlayer',
  component: ThePlayer,
  tags: ['autodocs'],
} satisfies Meta<typeof ThePlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Down: Story = {
  args: {
    direction: 'down',
    isMoving: false,
    isSoundMuted: false,
  },
}

export const DownMoving: Story = {
  args: {
    direction: 'down',
    isMoving: true,
    isSoundMuted: false,
  },
}

export const Up: Story = {
  args: {
    direction: 'up',
    isMoving: false,
    isSoundMuted: false,
  },
}

export const UpMoving: Story = {
  args: {
    direction: 'up',
    isMoving: true,
    isSoundMuted: false,
  },
}

export const Right: Story = {
  args: {
    direction: 'right',
    isMoving: false,
    isSoundMuted: false,
  },
}

export const RightMoving: Story = {
  args: {
    direction: 'right',
    isMoving: true,
    isSoundMuted: false,
  },
}

export const Left: Story = {
  args: {
    direction: 'left',
    isMoving: false,
    isSoundMuted: false,
  },
}

export const LeftMoving: Story = {
  args: {
    direction: 'left',
    isMoving: true,
    isSoundMuted: false,
  },
}
