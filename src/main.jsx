
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: 'red', padding: '20px', backgroundColor: 'white' }}>
                    <h1>Something went wrong.</h1>
                    <pre>{this.state.error && this.state.error.toString()}</pre>
                    <pre>{this.state.error && this.state.error.stack}</pre>
                </div>
            );
        }

        return this.props.children;
    }
}

console.log('Mounting React Application...');

try {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </React.StrictMode>,
    )
    console.log('Mount success');
} catch (e) {
    console.error('Mount failed', e);
    document.body.innerHTML = `<div style="color: red; padding: 20px;"><h1>Mount Failed</h1><pre>${e.toString()}</pre></div>`;
}
