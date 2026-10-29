import { ViteReactSSG } from 'vite-react-ssg/single-page'
import './index.css'
import App from './App.jsx'

// Single-page static site generation: `npm run build` prerenders this app to dist/index.html.
export const createRoot = ViteReactSSG(<App />)
