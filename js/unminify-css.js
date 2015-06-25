document.getElementById('minified-css-button').onclick = function() {
    var tab = document.getElementById('minified-css-tab').value,
        space = '',
        result = document.getElementById('minified-css-new'),
        code;
    tab = (/^\d+$/.test(tab) ? parseInt(tab) : 4);
    code = document.getElementById('minified-css-orig').value
        .split('{').join(' {\n    ')
        .split(';').join(';\n    ')
        .split(',').join(', ')
        .split('    }').join('}\n')
        .replace(/\}(.+)/g, '}\n$1')
        .replace(/\n    ([^:]+):/g, '\n    $1: ')
        .replace(/([A-z0-9\)])}/g, '$1;\n}');
    if (tab != 4) {
	for (;tab != 0;tab--) { space += ' '; }
	code = code.replace(/\n    /g, '\n'+space);
    }
    result.style.display = 'block';
    result.value = code;
    return false;
};