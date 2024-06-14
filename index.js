class CodeFormatter {
    // Indent code with specified number of spaces
    indentCode(code, spaces = 4) {
        const indent = ' '.repeat(spaces);
        return code.split('\n').map(line => indent + line).join('\n');
    }

    // Trim leading and trailing whitespace from each line of code
    trimWhitespace(code) {
        return code.split('\n').map(line => line.trim()).join('\n');
    }

    // Convert double quotes to single quotes or vice versa
    convertQuotes(code, toDouble = true) {
        if (toDouble) {
            return code.replace(/'/g, '"');
        } else {
            return code.replace(/"/g, "'");
        }
    }

    // Minify code by removing all unnecessary whitespace and newlines
    minifyCode(code) {
        return code.replace(/\s+/g, ' ').trim();
    }

    // Prettify code by adding newlines and indentation
    prettifyCode(code) {
        // A simple implementation (for demonstration purposes)
        return code.replace(/;\s*/g, ';\n').replace(/\{\s*/g, '{\n').replace(/\}\s*/g, '}\n');
    }

    // Convert tabs to spaces
    tabsToSpaces(code, spaces = 4) {
        const space = ' '.repeat(spaces);
        return code.replace(/\t/g, space);
    }

    // Convert spaces to tabs
    spacesToTabs(code, spaces = 4) {
        const space = ' '.repeat(spaces);
        return code.replace(new RegExp(space, 'g'), '\t');
    }

    // Remove comments from code
    removeComments(code) {
        return code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
    }

    // Format code by applying all formatting rules
    formatCode(code, options = {}) {
        let formattedCode = code;

        if (options.trimWhitespace) {
            formattedCode = this.trimWhitespace(formattedCode);
        }
        if (options.indentSpaces !== undefined) {
            formattedCode = this.indentCode(formattedCode, options.indentSpaces);
        }
        if (options.convertQuotes !== undefined) {
            formattedCode = this.convertQuotes(formattedCode, options.convertQuotes);
        }
        if (options.minify) {
            formattedCode = this.minifyCode(formattedCode);
        }
        if (options.prettify) {
            formattedCode = this.prettifyCode(formattedCode);
        }
        if (options.tabsToSpaces !== undefined) {
            formattedCode = this.tabsToSpaces(formattedCode, options.tabsToSpaces);
        }
        if (options.spacesToTabs !== undefined) {
            formattedCode = this.spacesToTabs(formattedCode, options.spacesToTabs);
        }
        if (options.removeComments) {
            formattedCode = this.removeComments(formattedCode);
        }

        return formattedCode;
    }
}

module.exports = new CodeFormatter();
