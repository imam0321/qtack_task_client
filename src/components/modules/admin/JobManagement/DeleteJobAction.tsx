"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { deleteJob } from "@/services/job/job";
import { toast } from "sonner";
import Modal from "@/components/shared/Modal";

export default function DeleteJobAction({ jobId }: { jobId: string }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async () => {
		setIsDeleting(true);
		try {
			const res = await deleteJob(jobId);
			if (res.success) {
				toast.success("Job deleted successfully");
				setIsModalOpen(false);
			} else {
				toast.error("Failed to delete job");
			}
		} catch (error) {
			console.error("Error deleting job:", error);
			toast.error("Something went wrong");
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<>
			<button
				onClick={() => setIsModalOpen(true)}
				className="p-2 text-rose-400 hover:bg-rose-50 rounded-lg transition-all"
				title="Delete"
			>
				<Trash2 size={18} />
			</button>

			<Modal
				isOpen={isModalOpen}
				onClose={() => !isDeleting && setIsModalOpen(false)}
				title="Confirm Deletion"
			>
				<p className="text-sm text-slate-600 text-start -mt-2">
					Are you sure you want to permanently delete this job?
				</p>

				<div className="flex justify-end gap-3 mt-2">
					<button
						type="button"
						onClick={handleDelete}
						disabled={isDeleting}
						className="px-4 py-2 rounded-lg font-medium text-white bg-rose-600 hover:bg-rose-700 min-w-[110px]"
					>
						{isDeleting ? "Deleting..." : "Delete"}
					</button>
				</div>
			</Modal>
		</>
	);
}
