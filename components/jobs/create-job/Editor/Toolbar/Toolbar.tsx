import CodeIcon from '@mui/icons-material/Code';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import HighlightIcon from '@mui/icons-material/Highlight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SubscriptIcon from '@mui/icons-material/Subscript';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import { EditorState, RichUtils } from 'draft-js';
import styles from './Toolbar.module.scss';

export interface IToolbar {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const Toolbar: React.FC<IToolbar> = ({ editorState, setEditorState }) => {
  const tools = [
    {
      label: 'bold',
      style: 'BOLD',
      icon: <FormatBoldIcon />,
      method: 'inline',
    },
    {
      label: 'italic',
      style: 'ITALIC',
      icon: <FormatItalicIcon />,
      method: 'inline',
    },
    {
      label: 'underline',
      style: 'UNDERLINE',
      icon: <FormatUnderlinedIcon />,
      method: 'inline',
    },
    {
      label: 'highlight',
      style: 'HIGHLIGHT',
      icon: <HighlightIcon />,
      method: 'inline',
    },
    {
      label: 'strike-through',
      style: 'STRIKETHROUGH',
      icon: <FormatStrikethroughIcon />,
      method: 'inline',
    },
    {
      label: 'Superscript',
      style: 'SUPERSCRIPT',
      icon: <SuperscriptIcon />,
      method: 'inline',
    },
    {
      label: 'Subscript',
      style: 'SUBSCRIPT',
      icon: <SubscriptIcon />,
      method: 'inline',
    },
    {
      label: 'Blockquote',
      style: 'blockQuote',
      icon: <FormatQuoteIcon />,
      method: 'block',
    },
    {
      label: 'Unordered-List',
      style: 'unordered-list-item',
      method: 'block',
      icon: <FormatListBulletedIcon />,
    },
    {
      label: 'Ordered-List',
      style: 'ordered-list-item',
      method: 'block',
      icon: <FormatListNumberedIcon />,
    },
    {
      label: 'Code Block',
      style: 'CODEBLOCK',
      icon: <CodeIcon />,
      method: 'inline',
    },
    {
      label: 'Uppercase',
      style: 'UPPERCASE',
      icon: <KeyboardArrowUpIcon />,
      method: 'inline',
    },
    {
      label: 'lowercase',
      style: 'LOWERCASE',
      icon: <KeyboardArrowDownIcon />,
      method: 'inline',
    },
    {
      label: 'Left',
      style: 'leftAlign',
      icon: <FormatAlignLeftIcon />,
      method: 'block',
    },
    {
      label: 'Center',
      style: 'centerAlign',
      icon: <FormatAlignCenterIcon />,
      method: 'block',
    },
    {
      label: 'Right',
      style: 'rightAlign',
      icon: <FormatAlignRightIcon />,
      method: 'block',
    },
    { label: 'H1', style: 'header-one', method: 'block' },
    { label: 'H2', style: 'header-two', method: 'block' },
    { label: 'H3', style: 'header-three', method: 'block' },
    { label: 'H4', style: 'header-four', method: 'block' },
    { label: 'H5', style: 'header-five', method: 'block' },
    { label: 'H6', style: 'header-six', method: 'block' },
  ];

  const applyStyle = (e, style, method) => {
    e.preventDefault();
    method === 'block'
      ? setEditorState(RichUtils.toggleBlockType(editorState, style))
      : setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style, method) => {
    if (method === 'block') {
      const selection = editorState.getSelection();
      const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return blockType === style;
    } else {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
    }
  };

  return (
    <div className={styles.toolbarGrid}>
      {tools.map((item, idx) => (
        <button
          style={{
            color: isActive(item.style, item.method)
              ? 'rgba(0, 0, 0, 1)'
              : 'rgba(0, 0, 0, 0.3)',
          }}
          key={`${item.label}-${idx}`}
          title={item.label}
          onClick={(e) => applyStyle(e, item.style, item.method)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {item.icon || item.label}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
