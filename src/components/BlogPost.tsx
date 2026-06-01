import React from 'react';
import { blogPosts } from '../data/blogPosts';

interface BlogPostProps {
  postId: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ postId }) => {
  const post = blogPosts.find((item) => item.id === postId);

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const formatInline = (value: string) =>
    escapeHtml(value)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => {
        const safeHref = href.replace(/"/g, '&quot;');
        return (
          '<a href="' +
          safeHref +
          '" class="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/40 dark:hover:decoration-blue-400" rel="noopener noreferrer" target="_blank">' +
          label +
          '</a>'
        );
      })
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/(^|[\s>])\*([^*\n]+)\*(?=[\s.,;:!?)]|$)/g, '$1<em>$2</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Post not found</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
      </div>
    );
  }

  const formatContent = (content: string) => {
    const trimmed = content.trim();
    const codeChunks: string[] = [];
    let s = trimmed.replace(/```([\s\S]*?)```/g, (_, code) => {
      const idx = codeChunks.length;
      codeChunks.push('<pre><code>' + code + '</code></pre>');
      return '\n___CODE_' + idx + '___\n';
    });

    s = s
      .replace(/^### (.*)$/gm, '<h4>$1</h4>')
      .replace(/^## (.*)$/gm, '<h4>$1</h4>')
      .replace(/^# (.*)$/gm, '<h3>$1</h3>');

    const lines = s.split('\n');
    const out: string[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i] ?? '';
      const trimmedLine = line.trim();

      if (/^---+$/.test(trimmedLine)) {
        out.push('<hr />');
        i++;
        continue;
      }

      if (/^<h[234]>/.test(line)) {
        const headingMatch = line.match(/^<(h[234])>([\s\S]*)<\/\1>$/);
        if (headingMatch) {
          out.push(`<${headingMatch[1]}>${formatInline(headingMatch[2] ?? '')}</${headingMatch[1]}>`);
        } else {
          out.push(line);
        }
        i++;
        continue;
      }

      if (/^___CODE_(\d+)___$/.test(trimmedLine)) {
        const m = trimmedLine.match(/^___CODE_(\d+)___$/);
        if (m) out.push(codeChunks[Number(m[1])] ?? '');
        i++;
        continue;
      }

      if (/^\d+\.\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i] ?? '')) {
          items.push(formatInline((lines[i] ?? '').replace(/^\d+\.\s*/, '')));
          i++;
        }
        out.push('<ol>' + items.map((t) => '<li>' + t + '</li>').join('') + '</ol>');
        continue;
      }

      if (/^-\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^-\s/.test(lines[i] ?? '')) {
          items.push(formatInline((lines[i] ?? '').replace(/^-\s*/, '')));
          i++;
        }
        out.push('<ul>' + items.map((t) => '<li>' + t + '</li>').join('') + '</ul>');
        continue;
      }

      if (trimmedLine === '') {
        i++;
        continue;
      }

      const chunk: string[] = [line];
      i++;
      while (
        i < lines.length &&
        (lines[i] ?? '').trim() !== '' &&
        !/^\d+\.\s/.test(lines[i] ?? '') &&
        !/^-\s/.test(lines[i] ?? '') &&
        !/^<h[234]>/.test(lines[i] ?? '') &&
        !/^___CODE_\d+___$/.test((lines[i] ?? '').trim()) &&
        !/^---+$/.test((lines[i] ?? '').trim())
      ) {
        chunk.push(lines[i] ?? '');
        i++;
      }

      const body = chunk.join('\n');
      const formatted = formatInline(body);
      out.push(
        chunk.length > 1
          ? '<p>' + formatted.split('\n').join('<br />\n') + '</p>'
          : '<p>' + formatted + '</p>'
      );
    }

    return out.join('\n');
  };

  return (
    <article className="mx-auto max-w-2xl pb-12">
      <header className="mb-10 border-b border-gray-200 pb-10 dark:border-gray-800">
        <p className="mb-3 text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{post.date}</time>
          <span className="mx-2 text-gray-300 dark:text-gray-600" aria-hidden>
            ·
          </span>
          <span>{post.readTime} min read</span>
        </p>
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          <span dangerouslySetInnerHTML={{ __html: formatInline(post.title) }} />
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            {post.author.charAt(0)}
          </div>
          <p className="font-medium text-gray-800 dark:text-gray-200">{post.author}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div
        className="post-body prose prose-lg prose-neutral dark:prose-invert max-w-none
          prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight
          prose-p:text-[1.0625rem] prose-p:leading-[1.75] prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-li:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300
          prose-strong:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-gray-100
          prose-em:text-inherit prose-em:italic
          prose-hr:my-10 prose-hr:border-gray-200 dark:prose-hr:border-gray-800
          prose-code:rounded-md prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:font-normal prose-code:text-gray-800 before:prose-code:content-none after:prose-code:content-none
          dark:prose-code:bg-gray-800/90 dark:prose-code:text-gray-100
          prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 prose-pre:bg-gray-50 prose-pre:shadow-sm
          dark:prose-pre:border-gray-700 dark:prose-pre:bg-gray-950/50
          prose-h2:mt-8 prose-h2:mb-3 prose-h3:mt-10 prose-h3:mb-4 prose-h4:mt-8 prose-h4:mb-2
          selection:bg-blue-100 selection:text-gray-900 dark:selection:bg-blue-900/50 dark:selection:text-gray-100"
        dangerouslySetInnerHTML={{
          __html: formatContent(post.content)
        }}
      />
    </article>
  );
};
