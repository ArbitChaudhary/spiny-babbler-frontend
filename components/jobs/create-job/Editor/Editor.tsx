import { Editor as DraftEditor, DraftHandleValue, DraftStyleMap, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import React, { useState } from "react";
import styles from './Editor.module.scss';
import Toolbar from './Toolbar/Toolbar';

export interface IEditor {
    editorState: EditorState;
    onChange: (...event: any[]) => void;
}

const Editor: React.FC<IEditor> = ({ editorState: incomingEditorState, onChange }) => {
    const [editorState, setEditorState] = useState(incomingEditorState)


    const handleKeyCommand = (command: string): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

    // FOR INLINE STYLES
    const styleMap: DraftStyleMap = {
        CODE: {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
            fontSize: 16,
            padding: 2,
        },
        HIGHLIGHT: {
            backgroundColor: "#F7A5F7",
        },
        UPPERCASE: {
            textTransform: "uppercase",
        },
        LOWERCASE: {
            textTransform: "lowercase",
        },
        CODEBLOCK: {
            fontFamily: '"fira-code", "monospace"',
            fontSize: "inherit",
            background: "#ffeff0",
            fontStyle: "italic",
            lineHeight: 1.5,
            padding: "0.3rem 0.5rem",
            borderRadius: " 0.2rem",
        },
        SUPERSCRIPT: {
            verticalAlign: "super",
            fontSize: "80%",
        },
        SUBSCRIPT: {
            verticalAlign: "sub",
            fontSize: "80%",
        },
    };


    // FOR BLOCK LEVEL STYLES(Returns CSS Class From DraftEditor.css)
    const myBlockStyleFn = (contentBlock) => {
        const type = contentBlock.getType();
        switch (type) {
            case "blockQuote":
                return styles.superFancyBlockquote;
            case "leftAlign":
                return styles.leftAlign;
            case "rightAlign":
                return styles.rightAlign;
            case "centerAlign":
                return styles.centerAlign;
            case "justifyAlign":
                return styles.justifyAlign;
            default:
                break;
        }
    };

    return (
        <div className={styles.editorWrapper}>
            <Toolbar editorState={editorState} setEditorState={setEditorState} />
            <div className={styles.editorContainer}>
                <DraftEditor
                    placeholder="Write the description about the job"
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    customStyleMap={styleMap}
                    blockStyleFn={myBlockStyleFn}
                    onChange={(editorState) => {
                        setEditorState(editorState)
                        onChange(editorState)
                    }} />
            </div>
        </div>
    )
}

export default Editor;