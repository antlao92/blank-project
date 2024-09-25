import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => 
  <div className='flex flex-col gap-2 text-blue-500'>
    <div>Hello Anthony!</div>
    <div>This is to show that the routing work</div>
  </div>
})
