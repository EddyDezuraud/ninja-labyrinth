import type { Meta, StoryObj } from '@storybook/vue3'
import GridTile from './GridTile.vue'

const meta = {
  title: 'Components/GridTile',
  component: GridTile,
  tags: ['autodocs'],
} satisfies Meta<typeof GridTile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'D0',
    isExitOpen: false,
    areTrapsActive: false,
  },
}
