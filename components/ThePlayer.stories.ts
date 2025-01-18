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
  },
}

export const DownMoving: Story = {
  args: {
    direction: 'down',
    isMoving: true,
  },
}

export const Up: Story = {
  args: {
    direction: 'up',
    isMoving: false,
  },
}

export const UpMoving: Story = {
  args: {
    direction: 'up',
    isMoving: true,
  },
}

export const Right: Story = {
  args: {
    direction: 'right',
    isMoving: false,
  },
}

export const RightMoving: Story = {
  args: {
    direction: 'right',
    isMoving: true,
  },
}

export const Left: Story = {
  args: {
    direction: 'left',
    isMoving: false,
  },
}

export const LeftMoving: Story = {
  args: {
    direction: 'left',
    isMoving: true,
  },
}
