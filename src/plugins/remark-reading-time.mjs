export function remarkReadingTime() {
  return function (tree, { data }) {
    const text = tree.children
      .filter((node) => node.type === 'paragraph' || node.type === 'heading')
      .flatMap((node) => node.children || [])
      .filter((child) => child.type === 'text' || child.type === 'inlineCode')
      .map((child) => child.value)
      .join(' ');

    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    data.astro.frontmatter.readingTime = readingTime;
  };
}
