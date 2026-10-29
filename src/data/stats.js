import { company } from './company'
import { techStack } from './techStack'

// TODO: confirm these numbers before launch. Honest values only.
export const stats = [
  { label: 'Projects delivered & in progress', value: 4, suffix: '' },
  { label: 'Happy clients', value: 1, suffix: '' }, // TODO: update client count
  { label: 'Years building', value: Math.max(1, new Date().getFullYear() - company.foundedYear), suffix: '+' },
  { label: 'Technologies mastered', value: techStack.length, suffix: '+' },
]
