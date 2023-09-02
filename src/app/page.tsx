"use client"
import { SignUp } from './Pages/SignUp'
import { useState } from 'react';
import { TodoPage } from './Pages/TodoPage/TodoPage'

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <main className="bg-gradient-to-r from-indigo-500 ... flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App">
        {isLoggedIn ? (
          <TodoPage />
        ) : (
          <SignUp setLoggedIn={setLoggedIn} />
        )}

      </div>

    </main>
  )
}
