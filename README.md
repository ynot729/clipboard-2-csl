# Clipboard to CSL (Comma Separated List)

I often copy a column of values from excel and I need to convert it into a comma separated list. Example:

<table>
	<tr><td>5555</td></tr>
	<tr><td>6666</td></tr>
	<tr><td>7777</td></tr>
	<tr><td>8888</td></tr>
	<tr><td>9999</td></tr>
</table>

and need to paste it somewhere in the format 5555,6666,7777,8888,9999

This script grabs whatever is on the clipboard, splits it by new line characters `\n` and joins it by commas `,`

# Install 

Make `clipboard-2-csv.js` executable

```sh
chmod +x clipboard-2-csv.js
```

## Usage

* Copy list from excel or anything that puts text into the clipboard sparated by new lines.
* `/PATH/TO/clipboard-2-csv.js` (I have it as a shortcut)
* Paste. What you past will be comma separated.

