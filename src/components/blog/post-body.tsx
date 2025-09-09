interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <div
      className="ProseMirror leading-relaxed"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
