import { generationTask } from './generationTask'

test('random simple numbers', async () => {
  const task = generationTask()

  expect(task.answers).toHaveLength(8)
})
