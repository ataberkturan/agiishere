export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-4 text-center text-gray-400">
      <p className="text-sm">
        © {new Date().getFullYear()} AGI Is (Not) Here. All rights reserved. Maybe.
      </p>
      <p className="text-sm mt-1">
        Created by{' '}
        <a 
          href="https://x.com/ataberk_trn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          @ataberk_trn
        </a>
      </p>
    </footer>
  )
}

