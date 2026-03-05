/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, ChangeEvent } from "react";
import { Upload } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface ImageUploadInputProps {
  previewSrc: string | null;
  setPreviewSrc: (src: string | null) => void;
  state: any;
}

export default function ImageUploadInput({
  previewSrc,
  setPreviewSrc,
  state,
}: ImageUploadInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only image files (JPEG, PNG, GIF, WebP) are allowed!");
        if (fileInputRef.current) fileInputRef.current.value = "";
        setPreviewSrc(null);
        return;
      }
      setPreviewSrc(URL.createObjectURL(file));
    } else {
      setPreviewSrc(null);
    }
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-semibold text-slate-700">
        Company Icon
      </label>
      <div
        onClick={() => fileInputRef.current?.click()}
        className="group cursor-pointer relative h-32 w-32 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50/50 hover:bg-indigo-50/30 hover:border-indigo-300 transition-all duration-300 overflow-hidden"
      >
        {previewSrc ? (
          <div className="relative w-full h-full p-2">
            <Image
              src={previewSrc}
              fill
              alt="Preview"
              className="object-contain rounded-xl p-1"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
              <Upload className="text-white w-6 h-6" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400 group-hover:text-indigo-500 transition-colors">
            <div className="p-2.5 bg-white rounded-full shadow-sm group-hover:shadow transition-shadow">
              <Upload size={20} />
            </div>
            <span className="text-[10px] font-bold">Upload Icon</span>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
