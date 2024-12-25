import { FeedbackForm } from './components/feedback-form'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Website Feedback</h1>
        <p className="text-muted-foreground">
          We value your input! Help us improve by sharing your thoughts, reporting issues, or suggesting new features.
        </p>
      </div>
      <FeedbackForm />
    </main>
  )
}

