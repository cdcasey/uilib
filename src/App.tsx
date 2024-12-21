import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Card>
				<CardHeader>
					<div className="flex flex-auto">
						<a href="https://vite.dev" target="_blank">
							<img src={viteLogo} className="logo" alt="Vite logo" />
						</a>
						<a href="https://react.dev" target="_blank">
							<img src={reactLogo} className="logo react" alt="React logo" />
						</a>
					</div>
					<CardTitle>
						<h1>Vite + React</h1>
					</CardTitle>
				</CardHeader>
				<CardContent className="border-2 rounded m-auto w-1/2">
					<Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</CardContent>
				<CardFooter>The footer</CardFooter>
			</Card>
		</>
	);
}

export default App;
