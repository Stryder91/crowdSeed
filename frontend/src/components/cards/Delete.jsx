import axios from "axios";
import { path_deleteHome } from "../../data/routes";

export const DeleteCta = ({ id }) => {

	const _handleDelete = async () => {
		const res = await axios.delete(path_deleteHome(id))
	}

	return <div className="mt-4" onClick={_handleDelete}>
		<a
			href="#"
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>
			Delete
		</a>
	</div>
}