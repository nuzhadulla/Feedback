'use server'

import { z } from 'zod'
import { unstable_noStore as noStore } from 'next/cache'

// Feedback schema for validation
const feedbackSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  type: z.enum(['bug', 'feature', 'improvement']),
  priority: z.enum(['low', 'medium', 'high']),
  email: z.string().email(),
})

// Using Next.js 15.1's new unstable_noStore to opt out of caching
export async function submitFeedback(formData: FormData) {
  noStore()
  
  try {
    const validatedFields = feedbackSchema.parse({
      title: formData.get('title'),
      description: formData.get('description'),
      type: formData.get('type'),
      priority: formData.get('priority'),
      email: formData.get('email'),
    })

    // Simulate storing feedback (in a real app, this would save to a database)
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: true, message: 'Feedback submitted successfully!' }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data. Please check your inputs.' }
    }
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}

