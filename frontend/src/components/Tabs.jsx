import { useLocation } from "react-router-dom";

export const Tabs = () => {

	const { pathname, hash, key } = useLocation();

	return <>
	<div className="sm:hidden">
			<label htmlFor="tabs" className="sr-only">Select events</label>
			<select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option>Past</option>
					<option>All</option>
					<option>Incoming</option>
			</select>
	</div>
	
	<ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
			<li className="w-full">
				
				<a href="#past"       
					className={`inline-block w-full p-4
					${ hash === "#past" 
					? `text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white`
					: `bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}`} 
				>	
					Past
				</a>
			</li>
			<li className="w-full">
				<a href="#all"       
					className={`inline-block w-full p-4
					${ hash === "#all" 
					? `text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white`
					: `bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}`} 
				>	
					All
				</a>
			</li>
			<li className="w-full">
				<a href="#incoming"       
					className={`inline-block w-full p-4	
					${ hash === "#incoming" 
					? `text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white`
					: `white bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}`} 
				>	
						Incoming
					</a>
			</li>
	</ul>
	</>
}