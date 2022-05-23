import React, { useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/hint/show-hint';

const Editor = () => {
	useEffect(() => {
		async function init() {
			CodeMirror.fromTextArea(document.getElementById('realTimeEditor'), {
				mode: { name: 'javascript', json: true },
				theme: 'dracula',
				autoCloseTags: true,
				autoCloseBrackets: true,
				lineNumbers: true,
				hint: true,
			});
		}
		init();
	}, []);

	return <textarea id="realTimeEditor"></textarea>;
};

export default Editor;
