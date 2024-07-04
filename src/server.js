import http from "node:http";
import fs from "node:fs/promises";
import open from "open";
import { format } from "node:url";

const interpolate = (html, data) => {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, notes) => {
    return data[notes] || "";
  });
};

const formatNotes = (notes) => {
  return `<div>
        <div class='header'>
      <p>Content</p>
      <p> Tags</p>
      </div>
        ${notes
          .map((note, index) => {
            return `
        <div class="note">
        <p>${index + 1}. ${note.content}</p>
        <div class="tags">
        ${note.tags.map((tag) => `<span class="tag">${tag}</span>`).join(", ")}
            </div>
            </div>
            `;
          })
          .join("\n")}
        </div>`;
};

const createServer = (notes) => {
  return http.createServer(async (req, res) => {
    const HTML_PATH = new URL("./template.html", import.meta.url);
    const template = await fs.readFile(HTML_PATH, "utf-8");
    const html = interpolate(template, { notes: formatNotes(notes) });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
};

export const startServer = (notes, port) => {
  const server = createServer(notes);
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    open(`http://localhost:${port}`);
  });
};
