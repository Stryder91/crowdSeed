import React from 'react'

export const Number = ({ label, min=0, max, handler }) => {
	return  <div className="mb-5">
		<label
			htmlFor={label}
			className="mb-3 block text-base font-medium text-[#07074D]"
		>
			{ label }
		</label>
		<input
			onChange={handler}
			type="number"
			name={label}
			id={label}
			placeholder="5"
			min={min}
			max={max}
			className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
		/>
	</div>
}