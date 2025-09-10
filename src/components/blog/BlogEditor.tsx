"use client";

import {
  useEditor,
  EditorContent,
  useEditorState,
  Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";

interface BlogEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

function MenuBar({ editor }: { editor: Editor }) {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor.isActive("bold"),
      isHeading2: ctx.editor.isActive("heading", { level: 2 }),
      isHeading3: ctx.editor.isActive("heading", { level: 3 }),
      isBulletList: ctx.editor.isActive("bulletList"),
    }),
  });

  return (
    <div className="flex gap-2 mb-4 border-b border-white/10">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1 rounded-lg cursor-pointer transition-all active:scale-95 ${
          editorState.isHeading2 ? "bg-primary/50" : ""
        }`}
      >
        H2
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-3 py-1 rounded-lg cursor-pointer transition-all active:scale-95 ${
          editorState.isHeading3 ? "bg-primary/50" : ""
        }`}
      >
        H3
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 rounded-lg cursor-pointer transition-all active:scale-95 ${
          editorState.isBold ? "bg-primary/50" : ""
        }`}
      >
        Bold
      </button>
    </div>
  );
}

export default function BlogEditor({
  value,
  onChange,
  label,
}: BlogEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [2, 3], // solo H2 y H3
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        // 👈 Estas clases van DIRECTO al elemento contenteditable
        class:
          "tiptap py-2 rounded-lg outline-none focus:outline-none focus:ring-0",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="min-w-full w-full min-h-[150px] flex flex-col bg-active text-black py-3 px-5 rounded-3xl focus-within:border-primary border-active  border border-[#ccc] backdrop-blur-lg">
      {label && (
        <label
          // htmlFor={id}
          className="text-[#999] text-base font-medium text-start mb-1"
        >
          {label}
        </label>
      )}
      {/* Barra de herramientas */}
      {/* <div className="flex gap-2 p-2 border-b border-white/10">
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="pr-4 cursor-pointer hover:scale-105 transition-transform active:scale-100"

         
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className="pr-4 cursor-pointer hover:scale-105 transition-transform active:scale-100"
        >
          H3
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="pr-4 cursor-pointer hover:scale-105 transition-transform active:scale-100"
        >
          B
        </button>
       
      </div> */}

      {/* Editor */}
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="outline-none" />
    </div>
  );
}
