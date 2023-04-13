import React from 'react'

const Text = ({ label, handler }) => {
	return  <div className="mb-5">
		<label
			htmlFor={label}
			className="mb-3 block text-base font-medium text-[#07074D]"
		>
			{ label }
		</label>
		<input
			onChange={handler	}
			type="text"
			name={label}
			id={label}
			placeholder={label}
			className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
		/>
	</div>
}

export default Text