import { Button } from '@/components/ui/button'
import { ChartContainer, type ChartConfig } from '@/components/ui/chart'
import { Bar, BarChart } from 'recharts'

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#2563eb'
	},
	mobile: {
		label: 'Mobile',
		color: '#60a5fa'
	}
} satisfies ChartConfig
function App() {
	const chartData = [
		{ month: 'January', desktop: 186, mobile: 80 },
		{ month: 'February', desktop: 305, mobile: 200 },
		{ month: 'March', desktop: 237, mobile: 120 },
		{ month: 'April', desktop: 73, mobile: 190 },
		{ month: 'May', desktop: 209, mobile: 130 },
		{ month: 'June', desktop: 214, mobile: 140 }
	]
	return (
		<>
			<button className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>...</button>
			<Button variant='outline'>Button</Button>
			<div className='h-[50%] w-[80%] rounded-lg bg-white p-4 shadow'>
				<ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
					<BarChart accessibilityLayer data={chartData}>
						<Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
						<Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
					</BarChart>
				</ChartContainer>
			</div>
		</>
	)
}

export default App
