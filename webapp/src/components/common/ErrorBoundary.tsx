import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <XCircleIcon className="mx-auto h-12 w-12 text-red-500" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
              Something went wrong
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <div className="mt-6">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Refresh page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 