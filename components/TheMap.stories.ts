import type { Meta, StoryObj } from '@storybook/vue3'
import TheMap from './TheMap.vue'

const meta = {
  title: 'Components/TheMap',
  component: TheMap,
  tags: ['autodocs'],
} satisfies Meta<typeof TheMap>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    grid: new Array(100).fill('d0'),
    height: 1000,
    position: {
      x: 0,
      y: 0,
    },
    width: 1000,
    isExitOpen: false,
  },
}
