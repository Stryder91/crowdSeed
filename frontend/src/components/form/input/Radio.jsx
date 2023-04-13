export const Radio = () => {
	return  <div className="mb-5">
		<label className="mb-3 block text-base font-medium text-[#07074D]">
			Are you coming to the event?
		</label>
		<div className="flex items-center space-x-6">
			<div className="flex items-center">
				<input
					type="radio"
					name="radio1"
					id="radioButton1"
					className="h-5 w-5"
				/>
				<label
					for="radioButton1"
					className="pl-3 text-base font-medium text-[#07074D]"
				>
					Yes
				</label>
			</div>
			<div className="flex items-center">
				<input
					type="radio"
					name="radio1"
					id="radioButton2"
					className="h-5 w-5"
				/>
				<label
					for="radioButton2"
					className="pl-3 text-base font-medium text-[#07074D]"
				>
					No
				</label>
			</div>
		</div>
	</div>
}