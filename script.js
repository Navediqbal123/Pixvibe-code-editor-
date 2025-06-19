const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const output = document.getElementById("output");

function updatePreview() {
  const code = \`
    <style>\${css.value}</style>
    \${html.value}
    <script>\${js.value}<\/script>
  \`;
  output.srcdoc = code;
}

html.addEventListener("input", updatePreview);
css.addEventListener("input", updatePreview);
js.addEventListener("input", updatePreview);
updatePreview();

document.getElementById("download").addEventListener("click", () => {
  const zip = new JSZip();
  zip.file("index.html", document.documentElement.outerHTML);
  zip.generateAsync({ type: "blob" }).then(content => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "code-editor.zip";
    a.click();
  });
});