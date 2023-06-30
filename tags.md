# Basic HTML tags
`<!DOCTYPE html>` : inform type of document<br><br>
`<html lang = "en">` : represent root of HTML doc, and declare language of web page<br><br>
`<head>` : metadata located after html tag and before body tag.<br><br>

<ul>
    <li>Metadatas are not displayed.</li>
    <li>title, style, base, link, meta, script, noscript tag can be located.</li>
</ul>

`<title>` : text-only document title shown on title bar<br><br>
`<body>` : define documnet body<br><br>

<ul>
    <li>There can only be one body.</li>
</ul>

`<h1 .. h6>` : define HTML headings from big to small<br><br>
`<p>` : define paragrpah. Blank line automatically added before and after.<br><br>
`<br>` : single line break.<br><br>
`<hr>` : thematic break in HTML page.<br><br>
`<!-- -- >` : comment.<br><br>

# Forms and Input
`<form>` : create HTML form for user input<br><br>
<ul>
    <li>Can contain input, textarea, button, select, option, optgroup, fieldset, label, output</li>
    <li>`&lt;form action = "php file" method = "get"&gt;`</li>
    <li>Use GET only for non-sensitive information(exposed in URL).</li>
    <li>POST content is sent via HTTP request(not exposed in URL).</li>
</ul>

`<input>` : specify input field where user can enter data.<br><br>
<ul>
    <li>`&lt;input type = "text" id = "uID" name = "userID">`</li>
    <li>type can be botton, checkbox, color, date ....
</ul>

`<textarea>` : multi-line text input<br><br>
<ul>
    <li>&lt;textarea id = "tID" name = "text" rows = "2" cols = "50"&gt;text &lt;/textarea&gt;</li>
    <li>text between the tags are default in the textarea, which is erasable by user.</li>
</ul>

`<button>` : define clickable button.<br><br>
<ul>
    <li>&lt;button type="button"&gt;Click&lt;/button&gt;</li>
    <li>text between the tags are displayed in the button.</li>
</ul>

`<select>` : define drop down list(choose from multiple options).<br><br>
<ul>
    <li>&lt;select name="cars" id="cars"&gt;</li>
    <li>option tag used to identify options of the selection.</li>
</ul>

`<optgroup>` : group the options in drop down list.<br><br>
<ul>
    <li>&lt;optgroup label = "Label"&gt;</li>
    <li>Non clickable group name introduced in the list.</li>
</ul>