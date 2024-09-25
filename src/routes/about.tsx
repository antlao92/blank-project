import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => <div>Hello Anthony! This is to show that the routing works</div>,
})
