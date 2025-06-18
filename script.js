
function switchTab(id) {
  document.querySelectorAll('.code').forEach(t => t.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function runCode() {
  const html = document.getElementById('html').value;
  const css = document.getElementById('css').value;
  const js = document.getElementById('js').value;
  const output = document.getElementById('output');
  output.srcdoc = \`
    <!DOCTYPE html>
    <html>
    <head><style>\${css}</style></head>
    <body>
      \${html}
      <script>\${js}<\/script>
    </body>
    </html>\`;
}

function downloadCode() {
  const html = document.getElementById('html').value;
  const css = document.getElementById('css').value;
  const js = document.getElementById('js').value;

  const zip = new JSZip();
  zip.file("index.html", \`<!DOCTYPE html>
<html><head><style>\${css}</style></head><body>\${html}<script>\${js}<\/script></body></html>\`);

  zip.generateAsync({ type: "blob" }).then(content => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "code.zip";
    a.click();
  });
}
