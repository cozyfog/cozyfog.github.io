const footer = '<div id="footnote"><hr><h3>Contacts:</h3><a href="https://github.com/nickel-dev">Github</a> | <a href="https://youtube.com/@cozyfog">Youtube</a> | <a href="mailto: nickel-dev@proton.me">nickel-dev@proton.me</a></div>'

var url = window. location. pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

function generate_header()
{
  let header = '';
  let name = filename.split('_').join(' ').replace('.html', '');
  const date = name.substring(0, name.lastIndexOf('-'));
  name = name.substring(name.lastIndexOf('-') + 1);
  return '<title>' + date + ' - ' + name + '</title><i>' + date + '</i><h1>' + name + '</h1><a href="../"><< Back</a><hr></hr>'
}

function remove_new_line(name)
{
  const code = document.querySelectorAll(name);
  [...code].forEach(el => el.textContent = el.textContent.replace(/^\n/,'').replace(/^\s+|\s+$/g, ""));
}

function generate_page()
{
  const header = generate_header();
  let body = document.getElementsByTagName("body")[0];

  remove_new_line('pre code');

  body.innerHTML = header + body.innerHTML + footer;
}